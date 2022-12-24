const verifyEmail = {
    companyName:'We Work',
    emailTitle:"Verify Email Address",
    welcome:"Hey",
    thanking:"Thanks for signing up! 👋",
    firsParagraph:"Please verify your email address by clicking the below button and join our creative community, start exploring the resources or showcasing your work.",
    secondParagraph:"If you did not sign up to star light, please ignore this email or contact us at :",
    buttonContent:"Verify Email Now",
    teamThanking:"Thanks, \n  WeWork Team",
    ourServiceAndPrivacy:'Use of our service and website is subject to our',
    termsOfUse:'Terms of Use',
    and:'and',
    privacyPolicy:'Privacy Policy'

}


const resetPassword = {
    companyName:'Star light',
    emailTitle:"Reset your password",
    welcome:"Hey",
    firsParagraph:"A request to reset password was received from your.",
    account:'account',
    secondParagraph:"Click on the button down to reset your password.",
    buttonContent:"Reset Password",
    teamThanking:"Thanks, \n  WeWork Team",
    note:'Note',
    noteContent:'This link is valid for 1 hour from the time it was sent to you and can be used to change your password only once.',
    ourServiceAndPrivacy:'Use of our service and website is subject to our',
    termsOfUse:'Terms of Use',
    and:'and',
    privacyPolicy:'Privacy Policy'

}


const getTargetScript = (target)=>{
    switch(target){
        case 'verify':
            return verifyEmail
        case 'resetPassword':
            return resetPassword
    }
}

module.exports = {
    getTargetScript
}