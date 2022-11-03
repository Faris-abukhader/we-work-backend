
<p align="center">
<img src="https://user-images.githubusercontent.com/70070951/195313293-ed597f4f-a617-44d8-8023-75118b55daad.jpg" width="400" height="200">
</p>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/we-work-backend/blob/master/README.md"> English </a>📔 
 </p>
<p align="center">
 فرونت اند سيكون متاح قريباً  
</p>


## 🚩 قائمة المحتويات 


- [المقدمة](#--المقدمة)
- [تحميل المستودع](#--تحميل-المستودع)
- [تهيئة المشروع](#--تهيئة-المشروع)
- [بنية مجلد المشروع](#--بنية-مجلد-المشروع)
- [الخصائص](#--الخصائص)
- [المكتبات](#-المكتبات)
- [الرخصة](#-الرخصة)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  المقدمة 

<p>
مشروع WeWork هو مشروع مفتوح المصدر  لمنصة توظيف ، بيحث ينقصم الى قسمين هما باك اند والذي هو ما تقرأه الآن ، والقسم الثاني هو الفرونت اند ، وكما نعلم في الباك اند نقوم بتصميم قاعد البيانات ونقوم بعمل اتصال مؤمن بواسطة API مع لربط كلى القسمين مع بعضهم البعض .
<br/>
هذا ال API سيغطي جزء المصادقة authentication والتي تتكون من عده عناصر وهي تسجيل دخول ، وتسجيل مستخدم جديد ، تفعيل الحساب بواسطة الايميل.
<br/>
في خلال تصميم هذا ال API قمت بانشاء نوعين مختلفين من الحسابات ، الاول وهو صاحب العمل ، والثاني هو الباحث عن العمل .
</br>
يمكن لصاحب العمل نشر اعلانات عمله ، بعد ذلك سيتلقى العروض من الباحثين عن العمل ، اي ان لكل عمل منشور يمكن او يحوي على عدة عروض ، ويمكن لصاحب العمل ان يرفضهن او يقبل واحد منهن ، في حال قبول الطلب ، سيتم اعلام الباحث عن العمل بالتفاصيل وانتظار تاكيد القبول من طرفة لاغلاق هذا الاعلان . يمكن ايضا لصاحب العمل ان يبعث طلب توظيف مباشر بعد نشر العمل من دون انتظار قدوم العروض من قبل الباحثين عن العمل . 
</br>
يمكن لصاحب العمل تقييم كل عمل بعد انتهاء وبهذا سيتم تقييم صاحب كل حساب بناءً على تقيمات اعماله .
</br>
أيضا يمكن للمستخدمين التواصل وارسال الرسائل فيما بينهم لتحسين تجربة العميل على المنصة .
</br>

</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تحميل المستودع  


### 🔘 نسخ مستودع المشروع 
1. اذهب الى الصفحة الرئسية للمشروع .
2. في اعلى الصفحة انقر على الزر "code".
3. انسخ رابط المستودع .
4. افتح خط الاوامر terminal على الجهاز الخاص بك.
5. انتقل على المكان المراد تحميل المشروع اليه .
6. ادخل الامر التالي لنسخ مستودع المشروع لجهاز الحاسب الخاص بك:
```
git clone github.com/Faris-abukhader/we-work-backend
```
انقر على الزر enter لاتمام العملية 
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `we-work-backend`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  تهيئة المشروع 

لتهيئة المشروع لابد من تحميل NodeJs على جهاز الخاص ، اما اذا كنت تمتلكه بالفعل فتأكد تحميل اخر اصدار.
### 🔘 التأكد من اصدار NodeJs
```
node -v
```

### 🔘 تحميل NodeJs


> لاجهزة وندوز
- يمكن تحميل نسخة ويندوز عبر الصفحة الرسمية ل NodeJs ، يرجى التأكد من تحميل آخر اصدار متاح .
 [الصفحة الرسمية](https://nodejs.org/en/download/)

<br/>

> لاجهزة الماك 
- يمكن تحميل NodeJs عبر اوامر brew 
```
brew install node
```
- يمكنك تحميل نسخة الماك عن طريق  ل NodeJs  [الصفحة الرسمية  ](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 تحميل المكتبات اللازمة 

من خلال شريط الاوامر terminal انتقل الى مكان تواجد الملف package.json ثم ادخل الامر التالي  :
```
npm install 
```
الان عليك عمل قاعد بيانات جديد sql ، بعد قيامك بذلك انشىء ملف جديد في المشروع باسم .gitignore واكتب بداخله :
```
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://<USERNAME>:<YOUR_PASSWORD>@localhost:3306/<DB_NAME>?schema=public"

```
الان نحتاج الى تهيئة مكتبة Prisma ادخل الامر التالي :
```
cd prisma 
prisma generate
```

لتشغيل المشروع ادخل الامر التالي : 
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  بنية مجلد المشروع   

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


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  الخصائص  

- صفحة ويب  توثق محتويات ال API  يمكن زيارة عن طريق الرابط التالي :
```
http://localhost:4500/doc
```
- المصادقة authentication و التفويض authorization لعد طبقات ، للمزيد انظر لمحتويات المجلد prevalidation  .
- جميع معلومات المستخدم الحساسة يتم تشفيرها قبل حفظها في قاعدة البيانات .
- نظام خاص بتأكيد الحساب بواسطة الايميل  
- نظام مراسلة لحظي باستخدام Socket.IO (قريبا…)



## 📦 المكتبات


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


## 📜 الرخصة

هذا المشروع تحت رخصة [MIT](https://github.com/Faris-abukhader/we-work-backend/blob/master/LICENSE) © [FaRiS](https://github.com/Faris-abukhader).
