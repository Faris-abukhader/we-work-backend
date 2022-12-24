-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `credit` DECIMAL(65, 30) NOT NULL DEFAULT 100.0,
    `currentLocation` VARCHAR(191) NULL,
    `accountType` CHAR(1) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL,
    `isVerify` BOOLEAN NOT NULL DEFAULT false,
    `verifiedDate` DATETIME(3) NULL,
    `token` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Freelancer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `hourlyPrice` DECIMAL(65, 30) NULL,
    `weeklyWantingHour` INTEGER NULL,
    `aboutMe` TEXT NULL,
    `shortIntro` VARCHAR(50) NULL,

    UNIQUE INDEX `Freelancer_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Employer_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Language` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `schoolName` VARCHAR(191) NOT NULL,
    `dateAttend` DATETIME(3) NOT NULL,
    `dateGraduate` DATETIME(3) NOT NULL,
    `areaOfStudy` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `fromWhere` VARCHAR(191) NOT NULL,
    `issuedDate` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmploymentHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `fromDate` DATETIME(3) NOT NULL,
    `untilDate` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Job` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `skillRequired` VARCHAR(191) NOT NULL,
    `isClosed` BOOLEAN NOT NULL DEFAULT false,
    `accepted` BOOLEAN NOT NULL DEFAULT false,
    `jobCategory` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proposal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `jobId` INTEGER NOT NULL,
    `bid` DECIMAL(65, 30) NOT NULL,
    `timeNeeded` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL,
    `isAccepted` BOOLEAN NOT NULL DEFAULT false,
    `isDecline` BOOLEAN NOT NULL DEFAULT false,
    `reasonOfDecline` VARCHAR(191) NULL,
    `dateOfDecline` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jobId` INTEGER NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `isRefunded` BOOLEAN NOT NULL DEFAULT false,
    `dateOfRefunding` DATETIME(3) NULL,
    `reasonOfRefunding` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Transaction_jobId_key`(`jobId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HiringRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `freelancerId` INTEGER NOT NULL,
    `jobId` INTEGER NOT NULL,
    `ownerNote` VARCHAR(191) NULL,
    `freelancerNote` VARCHAR(191) NULL,
    `isEmployerAccepet` BOOLEAN NULL,
    `isFreelancerAccept` BOOLEAN NULL,
    `productId` INTEGER NOT NULL,

    UNIQUE INDEX `HiringRequest_jobId_key`(`jobId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creatorId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `requestId` INTEGER NOT NULL,
    `employerRate` DECIMAL(65, 30) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Product_requestId_key`(`requestId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Conversation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `conversationId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `senderId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ConversationToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ConversationToUser_AB_unique`(`A`, `B`),
    INDEX `_ConversationToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Freelancer` ADD CONSTRAINT `Freelancer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employer` ADD CONSTRAINT `Employer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Language` ADD CONSTRAINT `Language_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Education` ADD CONSTRAINT `Education_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Freelancer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certification` ADD CONSTRAINT `Certification_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Freelancer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmploymentHistory` ADD CONSTRAINT `EmploymentHistory_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Freelancer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Employer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Freelancer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HiringRequest` ADD CONSTRAINT `HiringRequest_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Employer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HiringRequest` ADD CONSTRAINT `HiringRequest_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `Freelancer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HiringRequest` ADD CONSTRAINT `HiringRequest_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `Freelancer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `HiringRequest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `Conversation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConversationToUser` ADD CONSTRAINT `_ConversationToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Conversation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConversationToUser` ADD CONSTRAINT `_ConversationToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
