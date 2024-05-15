 const registerMail=(title, text)=>{
return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow&family=Nunito:wght@300;500&family=Poppins:wght@300;400&family=Quicksand:wght@400;500&family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <title>Welcome</title>
    <style>
      body {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }
      .head {
        width: 100%;
        display: flex;
        padding: 9px;
        justify-content: space-between;
        background-color: aliceblue;
        font-family: "Quicksand", sans-serif;
      }
      .head img {
        margin-top: 10px;
        width: 120px;
        height: 40px;
        background: transparent;
      }
      .head p {
        font-weight: bold;
        letter-spacing: 2px;
      }
      .mail-body {
        width: 100%;
        font-family: "Nunito", sans-serif;
        font-weight: lighter;
      }
      .mail-body p {
        text-align: justify;
        width: 80%;
        line-height: 30px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        color: rgb(52, 12, 12);
      }
      .mail-body img {
        display: block;
        margin-top: 20px;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
      }
      @media screen and (max-width: 480px) {
        body {
          width: 90%;
        }
        .mail-body p {
          width: 100%;
        }
      }
      .mail-body .visit {
        border: none;
        padding: 12px;
        display: block;
        font-size: large;
        color: white;
        margin-left: auto;
        margin-right: auto;
        background-color: #2767a7;
      }
      .footer {
        display: flex;
        font-family: "Nunito", sans-serif;
        text-align: center;
        /* justify-content: center; */
      }
      .footer div {
        margin: 20px;
        width: 50%;
      }
      .footer img {
        width: 150px;
      }
      .footer img:nth-child(3) {
        width: 170px;
        /* margin: 20px; */
      }
    </style>
  </head>
  <body>
    <div class="head">
      <img
        src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
        alt="Goibibo icon"
      />
      <p>Greetings</p>
    </div>
    <div class="mail-body">
      <img
        src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
        alt="welcome"
      />
      <p>
        &emsp; Hello & Welcome ${title}! ${text}
      </p>
      <button class="visit">Visit Now</button>
    </div>
  </body>
</html>`;
}
module.exports={registerMail}
