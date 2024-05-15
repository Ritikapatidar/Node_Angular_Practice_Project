const express= require('express')
const router= express.Router()
const verifyToken= require('../common/common_data.js')
const conn1= require('../connection.ts').conn
const LoginApi= require('./user/Login/login')
const RegisterApi= require('./user/Registration/register')
const addSubjectApi= require('./Subject/addSubject')
const getSubjects= require('./Subject/getSubjects.js')
const updateSubject= require('./Subject/updateSubject.ts')
const deleteSubject= require('./Subject/deleteSubject.ts')
const addBook= require('./Book/addBook.ts')
const getBooks= require('./Book/getBooks.ts')
const deleteBook= require('./Book/deleteBook.ts')
const updateBook= require('./Book/updateBook.ts')
const generateOtp= require('./user/forgot-password/forgot-password.ts').generateOtp
const verifyOtp= require('./user/forgot-password/forgot-password.ts').verifyOtp
const forgotPassword= require('./user/forgot-password/forgot-password.ts').forgotPassword

router.post('/login', LoginApi)
router.post('/register', RegisterApi)

router.get('/', verifyToken.tokenVerify ,(req, res1)=>{
    const query= 'select * from user'
    conn1.query(query, [], (err, res)=>{
        return res1.send(res)
    })
})
router.post('/getSubjects', getSubjects)
router.post('/getBooks', getBooks)
router.post('/generateOtp', generateOtp)
router.post('/verifyOtp', verifyOtp)
router.post('/forgot-password', forgotPassword)
router.use(verifyToken.tokenVerify)
router.post('/addSubject', addSubjectApi)
router.patch('/updateSubject/:id', updateSubject)
router.delete('/deleteSubject/:id', deleteSubject)
router.post('/addBook', verifyToken.tokenVerify, addBook)
router.patch('/updateBook/:id', updateBook)
router.delete('/deleteBook/:id', deleteBook)

module.exports= router