/*
  Warnings:

  - You are about to alter the column `waktu_transaksi` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `waktu_transaksi` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `silabus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_kelas` INTEGER NOT NULL,
    `id_modul` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `silabus` ADD CONSTRAINT `silabus_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `silabus` ADD CONSTRAINT `silabus_id_modul_fkey` FOREIGN KEY (`id_modul`) REFERENCES `modul_kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
