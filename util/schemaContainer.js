var userObj = {}
var freelancerObj = {}
var employerObj = {}
var languageObj = {}
var educationObj = {}
var certificationObj = {}
var employmentHistoryObj = {}
var jobObj = {}
var proposalObj = {}
var transactionObj = {}
var hiringRequestObj = {}
var productObj = {}
var conversationObj = {}
var messageObj = {}
var changePasswordRequestObj = {}

userObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        email:{type:'string'},
        password:{type:'string'},
        firstName:{type:'string'},
        lastName:{type:'string'},
        nationality:{type:'string'},
        avatar:{type:'string'},
        credit:{type:'integer'},
        currentLocation:{type:'string'},
        accountType:{type:'string'},
        token:{type:'string'},
        createdAt:{type:'string'},
        lastUpdate:{type:'string'},
        freelancer:freelancerObj,
        employer:employerObj,
        changePasswordRequest:{
            type:'array',
            items:changePasswordRequestObj
        },
        languageList:{
            type:'array',
            items:languageObj
        },
        conversations:{
            type:'array',
            items:conversationObj
        }
    
    }
}


freelancerObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        userId:{type:'integer'},
        user:userObj,
        weeklyWantingHour:{type:'string'},
        hourlyPrice:{type:'integer'},
        aboutMe:{type:'string'},
        shortIntro:{type:'string'},
        credit:{type:'integer'},
        currentLocation:{type:'string'},
        educationList:{
            type:'array',
            items:educationObj
        },
        certificationList:{
            type:'array',
            items:certificationObj
        },
        employmentList:{
            type:'array',
            items:employmentHistoryObj
        },
        proposalList:{
            type:'array',
            items:proposalObj
        },
        hiringRequest:{
            type:'array',
            items:hiringRequestObj
        },
        products:{
            type:'array',
            items:productObj
        },
    }
}

employerObj = {
type: 'object',
properties:{
    id:{type:'integer'},
    userId:{type:'integer'},
    user:userObj,
    jobList:{
        type:'array',
        items:jobObj
    },
    hiringRequest:{
        type:'array',
        items:hiringRequestObj
    },
  }
}

languageObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        user:userObj,
        name:{type:'string'},
        level:{type:'string'},
    }
}

educationObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        freelancer:freelancerObj,
        schoolName:{type:'string'},
        dateAttend:{type:'string'},
        dateGraduate:{type:'string'},
        areaOfStudy:{type:'string'},
        degree:{type:'string'},
        description:{type:'string'},
    }
}
  

certificationObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        freelancer:freelancerObj,
        fromWhere:{type:'string'},
        issuedDate:{type:'string'},
        name:{type:'string'},
        description:{type:'string'},
    }
}


employmentHistoryObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        freelancer:freelancerObj,
        companyName:{type:'string'},
        position:{type:'string'},
        country:{type:'string'},
        city:{type:'string'},
        fromDate:{type:'string'},
        untilDate:{type:'string'},
        description:{type:'string'},
    }
}


jobObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        employer:employerObj,
        title:{type:'string'},
        location:{type:'string'},
        salary:{type:'integer'},
        skillRequired:{type:'string'},
        isClosed:{type:'boolean'},
        accepted:{type:'boolean'},
        jobCategory:{type:'string'},
        proposalList:{
            type:'array',
            items:proposalObj
        },
        transaction:transactionObj,
        hiringRequest:hiringRequestObj,
        description:{type:'string'},
        createdAt:{type:'string'},
        lastUpdate:{type:'string'},
        _count:{}
    }
}


proposalObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        freelancer:freelancerObj,
        jobId:{type:'integer'},
        job:jobObj,
        bid:{type:'number'},
        timeNeeded:{type:'string'},
        description:{type:'string'},
        createdAt:{type:'string'},
        lastUpdate:{type:'string'},
        isAccepted:{type:'boolean'},
        dateOfAccepting:{type:'string'},
        isDecline:{type:'boolean'},
        jobCategory:{type:'string'},
        reasonOfDecline:{type:'string'},
        dateOfDecline:{type:'string'}
    }
}

transactionObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        jobId:{type:'integer'},
        job:jobObj,
        amount:{type:'integer'},
        isRefunded:{type:'boolean'},
        dateOfRefunding:{type:'string'},
        reasonOfRefunding:{type:'string'},
        createdAt:{type:'string'},
        lastUpdate:{type:'string'},
    }
}


hiringRequestObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        owner:employerObj,
        freelancerId:{type:'integer'},
        freelancer:freelancerObj,
        jobId:{type:'integer'},
        job:jobObj,
        salary:{type:'number'},
        ownerNote:{type:'string'},
        reasonOfRefunding:{type:'string'},
        freelancerNote:{type:'string'},
        isEmployerAccepet:{type:'boolean'},
        isFreelancerAccept:{type:'boolean'},
        productId:{type:'integer'},
        product:productObj,
    }
}


productObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        creatorId:{type:'integer'},
        creator:freelancerObj,
        content:{type:'string'},
        requestId:{type:'integer'},
        hiringRequest:hiringRequestObj,
        employerRate:{type:'integer'},
        createdAt:{type:'string'},
        lastUpdate:{type:'string'},
    }
}


conversationObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        users:{
            type:'array',
            items:userObj
        },
        messages:{
            type:'array',
            items:messageObj
        },
        createdAt:{type:'string'},
    }
}

messageObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        conversationId:{type:'integer'},
        conversation:conversationObj,
        content:{type:'string'},
        senderId:{type:'integer'},
        createdAt:{type:'string'},
    }
}


changePasswordRequestObj = {
    type: 'object',
    properties:{
        id:{type:'integer'},
        ownerId:{type:'integer'},
        owner:userObj,
        token:{type:'string'},
        createdAt:{type:'string'},
    }
}



module.exports = {
    userObj,
    freelancerObj,
    employerObj,
    languageObj,
    educationObj,
    certificationObj,
    employmentHistoryObj,
    jobObj,
    proposalObj,
    transactionObj,
    hiringRequestObj,
    productObj,
    conversationObj,
    messageObj,
    changePasswordRequestObj
}