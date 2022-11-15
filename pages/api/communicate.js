// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const e = require("cors");
const sparkPost = require("sparkpost");

async function handleEmail(req, res) {
  const client = new sparkPost(process.env.API_KEY);
  const data = JSON.parse(req.body);
  const { name, phno, email, sub, msg } = data;

  client.transmissions.send({
    content: {
      from: "connecttovdx.sparkpost.com",
      subject: "You have an Invitation",
      html: `<html>
        <body>
        <p>Name : ${name}</p>
        <br/>
        <p>Phone : ${phno}</p>
        <br/>
        <p>Email : ${email}</p>
        <br/>
        <p>Subject : ${sub}</p>
        <br/>
        <p>Message : ${msg}</p>
        <br/>
        </body>
      </html>`,
      
    },
    recipients:[{
      address:email

    }]
  }).then(()=>{
    res.statusCode=200;
    res.setHeader("Content-Type", "Application-JSON");
    res.end(JSON.stringify({error: null}))
  }).catch(()=>{
    res.statusCode=200;
    res.setHeader("Content-Type", "Application-JSON");
    res.end(JSON.stringify({error: null}))
  });
}

export default handleEmail;
