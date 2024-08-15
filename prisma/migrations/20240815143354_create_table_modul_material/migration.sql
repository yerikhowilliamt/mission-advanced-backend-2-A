-- CreateTable
CREATE TABLE `modul_material` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_material` INTEGER NOT NULL,
    `id_modul_kelas` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `modul_material` ADD CONSTRAINT `modul_material_id_material_fkey` FOREIGN KEY (`id_material`) REFERENCES `material`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modul_material` ADD CONSTRAINT `modul_material_id_modul_kelas_fkey` FOREIGN KEY (`id_modul_kelas`) REFERENCES `modul_kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
