var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.pwd,
  },
});

var mailOptions = {
  from: "",
  to: process.env.MAIL_ID,
  subject: "",
  phone: "",
  message: "",
};

transporter.sendMail(mailOptions, function (err, inf) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email Sent: " + inf.response);
  }
});
