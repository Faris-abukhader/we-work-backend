const sib = require('sib-api-v3-sdk')
const fs = require('fs')
const handlebars = require('handlebars')
const {getTargetScript} = require('./script')

var client = sib.ApiClient.instance

var apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY

var transactionalEmialApi = new sib.TransactionalEmailsApi()

const sendEmail = async(toEmails=[{email:'faresraed2022@outlook.com'}],subject='welcome to join We work',template='verify',url=' ',token=' ',userName=' ')=>{
    fs.readFile(__dirname + `/templates/${template}.html`, (err, data) => {
        if (err) console.log(err);
        var myTemplate = handlebars.compile(data.toString())
    
        var replacements = getTargetScript(template)
        console.log(replacements)
        replacements.url = url
        replacements.userName = userName
        replacements.token = token
        replacements.supportEmail = process.env.SUPPORT_EMAIL
        replacements.frontEndUrl = process.env.FRONTEND_URL
        replacements.targetEmail = toEmails[0].email
        
        var htmlToSend = myTemplate(replacements)
        const sender = {email:'faresraed2022@outlook.com'}

        transactionalEmialApi.sendTransacEmail({
            sender,
            to:toEmails,
            subject,
            htmlContent:htmlToSend,
        }).then((err)=>console.log(err))
        .catch((response)=>{
            console.log(response)
            throw new Error(`can't send email`)
        })


      });

}

module.exports = {sendEmail}