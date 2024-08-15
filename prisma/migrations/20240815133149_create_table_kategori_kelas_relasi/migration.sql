-- CreateTable
CREATE TABLE `kategori_kelas_relasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_kelas` INTEGER NOT NULL,
    `id_kategori_kelas` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kategori_kelas_relasi` ADD CONSTRAINT `kategori_kelas_relasi_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kategori_kelas_relasi` ADD CONSTRAINT `kategori_kelas_relasi_id_kategori_kelas_fkey` FOREIGN KEY (`id_kategori_kelas`) REFERENCES `kategori_kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
