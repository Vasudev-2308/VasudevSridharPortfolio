var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

var mailOptions = {
  from: "",
  to: "",
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
