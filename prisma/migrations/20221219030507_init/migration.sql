/*
  Warnings:

  - You are about to drop the column `price` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `isVerify` on the `User` table. All the data in the column will be lost.
  - Added the required column `position` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastUpdate` to the `HiringRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastUpdate` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Employer` DROP FOREIGN KEY `Employer_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Freelancer` DROP FOREIGN KEY `Freelancer_userId_fkey`;

-- AlterTable
ALTER TABLE `EmploymentHistory` ADD COLUMN `position` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Freelancer` MODIFY `weeklyWantingHour` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `HiringRequest` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `lastUpdate` DATETIME(3) NOT NULL,
    ADD COLUMN `salary` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    MODIFY `productId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Job` DROP COLUMN `price`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `lastUpdate` DATETIME(3) NOT NULL,
    ADD COLUMN `salary` DECIMAL(65, 30) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Language` MODIFY `level` VARCHAR(191) NOT NULL DEFAULT 'Basic';

-- AlterTable
ALTER TABLE `Proposal` ADD COLUMN `dateOfAccepting` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `isVerify`,
    ADD COLUMN `isVerified` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `avatar` VARCHAR(191) NULL DEFAULT 'avatar-1.svg';

-- CreateTable
CREATE TABLE `changePasswordRequest` (
    `id` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `changePasswordRequest_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Freelancer` ADD CONSTRAINT `Freelancer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employer` ADD CONSTRAINT `Employer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `changePasswordRequest` ADD CONSTRAINT `changePasswordRequest_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
