-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `invoice` VARCHAR(100) NOT NULL,
    `waktu_transaksi` TIMESTAMP NOT NULL,
    `total_pembayaran` DECIMAL(10, 2) NOT NULL,
    `harga` DECIMAL(8, 2) NOT NULL,
    `status_pembayaran` ENUM('Berhasil', 'Gagal', 'Belum_Bayar') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
