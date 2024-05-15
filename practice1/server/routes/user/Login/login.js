const conn1 = require('../../../connection.ts').conn
const crypto = require('crypto')
const jwt= require('jsonwebtoken')
module.exports = (req, res) => {
    const query = 'select * from user where email=?'
    // const token = crypto.randomBytes(32).toString('hex')
    const jwtToken= jwt.sign({sub: req.body.email, iss:process.env.ENVIRONMENT_IDS || '' }, process.env.PRIVATE_KEY || '', {algorithm: 'HS256'})

    conn1.query(query, [req.body.email], (err, res1) => {
        if (err) {
            return res.send({ status: 'error', msg:err })
        }
        else {
            if (res1.length == 0) {
                return res.send({ status: 'success', msg: 'Invalid credentials!' })
            }
            else {
                let user_login_attemps = res1[0].login_attempts
                let locked = res1[0].locked
                if (!locked) {
                    if (res1[0].password == req.body.password) {
                        const updateQuery = 'update user set token=?, login_attempts=? where email=?'
                        conn1.query(updateQuery, [jwtToken, 0, req.body.email], (err, res2) => {
                            if (err) { return res.send({ status: 'errorr' }) }
                            else {
                                return res.send({ status: 'success', msg: 'Successfully loggedIn.', token: jwtToken, user:res1[0].first_name })
                            }
                        })
                    }
                    else {
                        user_login_attemps = user_login_attemps + 1
                        if (user_login_attemps === 5) {
                            const updateQuery1 = 'update user set login_attempts=?, locked=? where email=?'
                            const updateParams1 = [user_login_attemps, 1, req.body.email]
                            conn1.query(updateQuery1, updateParams1, (err, updateRes) => {
                                if (err) { return res.send({ status: 'error' }) }
                                else {
                                    return res.send({ status: 'error', msg:'Your Accout has been locked!' })
                                }
                            })
                        }
                        else {
                            const updateQuery2 = 'update user set login_attempts=? where email=?'
                            conn1.query(updateQuery2, [user_login_attemps, req.body.email], (err, Res) => {
                                if (err) { return res.send({ status: 'error__' }) }
                                else {
                                    return res.send({ status: 'error', msg: 'Invalid password!', remainingAttepts: 5 - user_login_attemps })
                                }
                            })
                        }
                    }
                }
                else {
                    return res.send({ status: 'error', msg: 'Account Locked!' })
                }
            }
        }
    })
}