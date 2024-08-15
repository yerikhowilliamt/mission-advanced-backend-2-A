-- CreateTable
CREATE TABLE `mengajar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_kelas` INTEGER NOT NULL,
    `email_tutor` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mengajar` ADD CONSTRAINT `mengajar_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mengajar` ADD CONSTRAINT `mengajar_email_tutor_fkey` FOREIGN KEY (`email_tutor`) REFERENCES `tutor`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
