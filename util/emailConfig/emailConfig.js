const nodemailer = require("nodemailer");
const handlerbars = require('handlebars')
// require('dotenv').config()
const fs = require('fs')

const {
getTargetLanguageScript
} = require('../public/transalation/getLanguageScript')


async function sendEmail(toEmails, subject,template,language,url=' ',token=' ',userName=' ') {
  var transporter = nodemailer.createTransport({
    service: "smtp-relay.sendinblue.com", 
    port:587,
    auth: {
      user:'faresraed2011@yahoo.com',      //process.env.DEFAULT_EMAIL,
      pass: 'bLOh7rg84Y6IPSH2'//process.env.EMAIL_PASSWORD
    }
  });

  fs.readFile(__dirname + `/../public/templates/${template}.html`, (err, data) => {
    if (err) console.log(err);
    var myTemplate = handlerbars.compile(data.toString())

    var replacements = getTargetLanguageScript(language,template)
    console.log(replacements)
    replacements.url = url
    replacements.userName = userName
    replacements.token = token
    replacements.dir = language=='ar' ? 'rtl':'ltr'
    
    var htmlToSend = myTemplate(replacements)
    var mailOptions = {
      from: process.env.DEFAULT_EMAIL,
      to: toEmails,
      subject: subject,
      html: htmlToSend
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent: ' + info.response)
      }
    });
  });
}

module.exports = {sendEmail}