<p align="center">
<img src="https://user-images.githubusercontent.com/70070951/195313293-ed597f4f-a617-44d8-8023-75118b55daad.jpg" width="400" height="200">
</p>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/we-work-backend/blob/master/README_ar.md"> بالعربي </a>📔 
 </p>
<p align="center">
 front-end part is coming soon . . . 
</p>


## 🚩 Table of Contents

- [Introduction](#--introduction)
- [Installation](#--installation)
- [Development setup](#--development-setup)
- [Project structure](#--project-structure)
- [Features](#--features)
- [Packages](#-packages)
- [License](#-license)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  Introduction 

<p>
WeWork is an open source freelancing platform , where is consist of two parts , first part is Backend which you are reading now and the other part is Frontend . In this part we gonna design our DB and create secure connection (using JWT) through our API to frontend , where users , request , jobs info all gonna be saved.
<br/>
This API gonna cover the authentication part , which includes SignIn, JWT , SignUp , email verification.
<br/>
In this API under user we have two accounts type , first is freelancer second is employer .
</br>
Employers can publish there own jobs , then freelancer can provides there proposals , employers can accept or decline the proposals , once proposal is accepted one recruiting request gonna be send to freelancer , if both side accept the request the job goona be closed ; also the employer can send request to specific freelancer direclty without waiting for proposal.
</br>
Employer can rate freelancer for each job , and from here freelancer gonna get his average rate.
WeWork API also provide Conversation route where users can be in touch through messages between them.
</br>

</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Installation 


### 🔘 Cloning repository
1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click  Code.
3. Copy the URL for the repository.
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
```
git clone github.com/Faris-abukhader/we-work-backend
```
Press Enter to create your local clone
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `we-work-backend`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Development setup

To set up this project you need to download NodeJs in your machine or if you have it make sure you have the latest version of it.

### 🔘 Checking up Node version
```
node -v
```

### 🔘 Downloading Node

> for Windows  


Download the windows installer from [NodeJs offical website](https://nodejs.org/en/download/) make sure you have download the latest version of NodeJs.
<br/>


> for Mac
- You can download NodeJs using brew CLI
```
brew install node
```
- You can download NodeJs mac version through [the offical website](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 Downloading the packages

Go to project direct where  <package.json> is exist and type in terminal :
```
npm install 
```
Now you need to create DB server connection , after you create it , create .gitignore file and type :
```
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://<USERNAME>:<YOUR_PASSWORD>@localhost:3306/<DB_NAME>?schema=public"

```
Now you need to step up Prisma ORM , type in your terminal :
```
cd prisma 
prisma generate
```

To run the project just type down in terminal :
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Project structure  

```
📦WeWork-backend
 ┣ 📂auth
 ┃ ┣ 📜authController.js
 ┃ ┣ 📜authRoute.js
 ┃ ┗ 📜authSchema.js
 ┣ 📂certification
 ┃ ┣ 📜certificationController.js
 ┃ ┣ 📜certificationRoute.js
 ┃ ┗ 📜certificationSchema.js
 ┣ 📂conversation
 ┃ ┣ 📜conversationController.js
 ┃ ┣ 📜conversationRoute.js
 ┃ ┗ 📜conversationSchema.js
 ┣ 📂education
 ┃ ┣ 📜educationController.js
 ┃ ┣ 📜educationRoute.js
 ┃ ┗ 📜educationSchema.js
 ┣ 📂employer
 ┃ ┣ 📜employerController.js
 ┃ ┣ 📜employerRoute.js
 ┃ ┗ 📜employerSchema.js
 ┣ 📂employmentHistory
 ┃ ┣ 📜employmentHistoryController.js
 ┃ ┣ 📜employmentHistoryRoute.js
 ┃ ┗ 📜employmentHistorySchema.js
 ┣ 📂freelancer
 ┃ ┣ 📜freelancerController.js
 ┃ ┣ 📜freelancerRoute.js
 ┃ ┗ 📜freelancerSchema.js
 ┣ 📂hiringRequest
 ┃ ┣ 📜hiringRequestController.js
 ┃ ┣ 📜hiringRequestRoute.js
 ┃ ┗ 📜hiringRequestSchema.js
 ┣ 📂job
 ┃ ┣ 📜jobController.js
 ┃ ┣ 📜jobRoute.js
 ┃ ┗ 📜jobSchema.js
 ┣ 📂language
 ┃ ┣ 📜languageController.js
 ┃ ┣ 📜languageRoute.js
 ┃ ┗ 📜languageSchema.js
 ┣ 📂message
 ┃ ┣ 📜messageController.js
 ┃ ┣ 📜messageRoute.js
 ┃ ┗ 📜messageSchema.js
  ┣ 📂preValidation
 ┃ ┣ 📜employerMiddleware.js
 ┃ ┣ 📜freelancerMiddleware.js
 ┃ ┗ 📜websiteMiddleware.js
 ┣ 📂prisma
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📂20220928063002_init
 ┃ ┃ ┃ ┗ 📜migration.sql
 ┃ ┃ ┗ 📜migration_lock.toml
 ┃ ┗ 📜schema.prisma
 ┣ 📂product
 ┃ ┣ 📜productController.js
 ┃ ┣ 📜productRoute.js
 ┃ ┗ 📜productSchema.js
 ┣ 📂proposal
 ┃ ┣ 📜proposalController.js
 ┃ ┣ 📜proposalRoute.js
 ┃ ┗ 📜proposalSchema.js
 ┣ 📂util
 ┃ ┣ 📂emailConfig
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┃ ┣ 📜resetPassword.html
 ┃ ┃ ┃ ┗ 📜verify.html
 ┃ ┃ ┣ 📜emailConfig.js
 ┃ ┃ ┣ 📜script.js
 ┃ ┃ ┗ 📜sendInBlue.js
 ┃ ┣ 📜docGenerator.js
 ┃ ┣ 📜paginationRange.js
 ┃ ┗ 📜schemaContainer.js
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Features  

- Simple rest API doc , generated using swagger library , you can check that out at :
```
http://localhost:4500/doc
```
- Authentications , authorizations are all implemented with differents layers , check Prevalidation folder .
- Credentials is all well encoded before it saves to DB.
- Custom implementation of verify account by email 
- Realtime messaging using Socket.IO (coming soon) 



## 📦 Packages


| Name | Description |
| --- | --- |
| [`@fastify/cors`](https://github.com/fastify/fastify-cors) | Fastify CORS |
| [`@fastify/static`](https://github.com/fastify/fastify-static) | Plugin for serving static files as fast as possible |
| [`@fastify/swagger`](https://github.com/fastify/fastify-swagger) | Swagger-compliant APIs entirely in Node.js |
| [`@prisma/client`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`prisma`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`bcrypt`](https://www.npmjs.com/package/bcrypt) | A library to help you hash passwords |
| [`fastify`](https://github.com/fastify/fastify) | Fast and low overhead web framework, for Node.js |
| [`handlebars`](https://www.npmjs.com/package/handlebars) | A Handlebars view engine for Express which doesn't suck |
| [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) | JSON Web Token implementation (symmetric and asymmetric) |
| [`nodemailer`](https://github.com/nodemailer/nodemailer) | Easy as cake e-mail sending from your Node.js applications |
| [`nodemon`](https://github.com/remy/nodemon) | Simple monitor script for use during development of a Node.js app |
| [`sib-api-v3-sdk`](https://www.npmjs.com/package/sib-api-v3-sdk) | SendinBlue's API v3 Node.js Library |


## 📜 License

This software is licensed under the [MIT](https://github.com/Faris-abukhader/we-work-backend/blob/master/LICENSE) © [FaRiS](https://github.com/Faris-abukhader).
