/*
  Warnings:

  - You are about to alter the column `waktu_transaksi` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `waktu_transaksi` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `review_pretest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pretest` INTEGER NOT NULL,
    `id_review` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `review_pretest` ADD CONSTRAINT `review_pretest_id_pretest_fkey` FOREIGN KEY (`id_pretest`) REFERENCES `pretest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review_pretest` ADD CONSTRAINT `review_pretest_id_review_fkey` FOREIGN KEY (`id_review`) REFERENCES `review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
