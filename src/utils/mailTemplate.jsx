export function mailTemplate(name, message, mail) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Correo electrónico centrado</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      text-align: center;
    }

    * {
      box-sizing: border-box;
    }

    .container {
      width: 600px;
      max-width: 100%;
      margin: 0 auto;
    }

    .header {
      padding: 20px 0;
    }

    .header h1 {
      font-size: 24px;
      font-weight: bold;
    }

    .content {
      padding: 20px 0;
    }

    .content p {
      margin: 0;
      padding: 0;
    }

    .footer {
      padding: 15px 0;
    }

    .footer p {
      font-size: 12px;
      text-align: center;
    }

span{
font-weight:800; 
font-family: Open Sans;
font-style: normal;
font-weight: 800;
line-height: 104.037%; 
}


.logo {
margin-left: 32px;
text-align: center;
font-family: Open Sans;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 104.037%;
padding: 2px;
border-radius: 24px;
background-color:black;
color:white;
width:50%;
}

.title{
gap:5px
}
  
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="title">Hola Memi! <br></br><br></br> ${name}  te ha enviado un mensaje.</h1>
    </div>
    <div class="content">
      <p>${message}</p>
    </div>

<h3>Enviado desde : ${mail}</h3>
    <div class="footer">
     <div class="logo">
     <h2 id="logotext">Pulso<span>365</span></h2>
      </div>    
    </div>
  </div>
</body>
</html>`;
}
