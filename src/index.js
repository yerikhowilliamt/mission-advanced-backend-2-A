const express = require('express');
const dotenv = require ("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

const usersRoutes = require('./routes/users');
const tutorsRoutes = require('./routes/tutors');
const kelasRoutes = require('./routes/kelas');
const transaksiKelasRoutes = require('./routes/transaksiKelas');
const silabusRoutes = require('./routes/silabus');
const reviewPretestRoutes = require('./routes/reviewPretest');
const reviewRoutes = require('./routes/review');
const pretestKelasRoutes = require('./routes/pretestKelas');
const pretestRoutes = require('./routes/pretest');
const pembayaranRoutes = require('./routes/pembayaran');
const ordersPembayaranRoutes = require('./routes/ordersPembayaran');
const ordersKelasRoutes = require('./routes/ordersKelas');
const ordersRoutes = require('./routes/orders');
const modulMaterialRoutes = require('./routes/modulMaterial');
const modulKelasRoutes = require('./routes/modulKelas');
const mengajarRoutes = require('./routes/mengajar');
const materialRoutes = require('./routes/material');
const kelasSayaRoutes = require('./routes/kelasSaya');
const kategoriKelasRelasiRoutes = require('./routes/kategoriKelasRelasi');
const kategoriKelasRoutes = require('./routes/kategoriKelas');
const middlewareLogRequest = require('./middleware/logs');
const middlewareErrorHandle = require('./middleware/errors');

app.listen(port, () => {
  console.log(`Server berhasil berjalan di port:${port}`);
});


app.use(middlewareLogRequest);
app.use(middlewareErrorHandle);
app.use(express.json())

app.use('/user', usersRoutes);
app.use('/tutor', tutorsRoutes);
app.use('/kelas', kelasRoutes);
app.use('/transaksi-kelas', transaksiKelasRoutes);
app.use('/silabus', silabusRoutes);
app.use('/review-pretest', reviewPretestRoutes);
app.use('/review', reviewRoutes);
app.use('/pretest-kelas', pretestKelasRoutes);
app.use('/pretest', pretestRoutes);
app.use('/pembayaran', pembayaranRoutes);
app.use('/orders-pembayaran', ordersPembayaranRoutes);
app.use('/orders-kelas', ordersKelasRoutes);
app.use('/orders', ordersRoutes);
app.use('/modul-material', modulMaterialRoutes);
app.use('/modul-kelas', modulKelasRoutes);
app.use('/mengajar', mengajarRoutes);
app.use('/material', materialRoutes);
app.use('/kelas-saya', kelasSayaRoutes);
app.use('/kategori-kelas-relasi', kategoriKelasRelasiRoutes);
app.use('/kategori-kelas', kategoriKelasRoutes);

app