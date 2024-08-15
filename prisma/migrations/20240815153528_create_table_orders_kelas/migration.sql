/*
  Warnings:

  - You are about to alter the column `waktu_transaksi` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `waktu_transaksi` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `orders_kelas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_orders` INTEGER NOT NULL,
    `id_kelas_saya` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orders_kelas` ADD CONSTRAINT `orders_kelas_id_orders_fkey` FOREIGN KEY (`id_orders`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_kelas` ADD CONSTRAINT `orders_kelas_id_kelas_saya_fkey` FOREIGN KEY (`id_kelas_saya`) REFERENCES `kelas_saya`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
