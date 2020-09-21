const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");

const mailOptions = {
  from: "ltest7526@gmail.com",
  to: "edirisinghe.nimesha@gmail.com",
  subject: "Email from Node-App: A Test Message!",
  html: `<html><body><i>Hello World....</i><br/><a href="https://www.qries.com/">
  <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
  width=150" height="70">
</a></body></html>`,
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ltest7526@gmail.com",
    pass: "1Qaz2wsx#",
  },
});

var task = cron.schedule(
  "* */10 * * * *",
  () => {
    // Send e-mail
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
  {
    scheduled: false,
  }
);

task.start();

app = express();
app.listen(3128);
