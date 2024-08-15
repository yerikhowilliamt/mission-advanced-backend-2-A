/*
  Warnings:

  - You are about to alter the column `waktu_transaksi` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `waktu_transaksi` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `pretest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jdudul_pertanyaan` VARCHAR(100) NOT NULL,
    `list_soal` INTEGER NOT NULL,
    `opsi_jawaban` VARCHAR(200) NOT NULL,
    `pertanyaan` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
