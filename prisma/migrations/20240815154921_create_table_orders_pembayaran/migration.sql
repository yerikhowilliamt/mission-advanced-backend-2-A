/*
  Warnings:

  - You are about to alter the column `waktu_transaksi` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `waktu_transaksi` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `Orders_pembayaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_orders` INTEGER NOT NULL,
    `id_pembayaran` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Orders_pembayaran` ADD CONSTRAINT `Orders_pembayaran_id_orders_fkey` FOREIGN KEY (`id_orders`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders_pembayaran` ADD CONSTRAINT `Orders_pembayaran_id_pembayaran_fkey` FOREIGN KEY (`id_pembayaran`) REFERENCES `pembayaran`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
