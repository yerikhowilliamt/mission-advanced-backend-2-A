const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");

dotenv.config();

const app = express();
const port = process.env.PORT;

const usersRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const verifyEmailRoutes = require("./routes/verifyEmail");
const UploadFileRoutes = require("./routes/upload");
const tutorsRoutes = require("./routes/tutors");
const kelasRoutes = require("./routes/kelas");
const transaksiKelasRoutes = require("./routes/transaksiKelas");
const silabusRoutes = require("./routes/silabus");
const reviewPretestRoutes = require("./routes/reviewPretest");
const reviewRoutes = require("./routes/review");
const pretestKelasRoutes = require("./routes/pretestKelas");
const pretestRoutes = require("./routes/pretest");
const pembayaranRoutes = require("./routes/pembayaran");
const ordersPembayaranRoutes = require("./routes/ordersPembayaran");
const ordersKelasRoutes = require("./routes/ordersKelas");
const ordersRoutes = require("./routes/orders");
const modulMaterialRoutes = require("./routes/modulMaterial");
const modulKelasRoutes = require("./routes/modulKelas");
const mengajarRoutes = require("./routes/mengajar");
const materialRoutes = require("./routes/material");
const kelasSayaRoutes = require("./routes/kelasSaya");
const kategoriKelasRelasiRoutes = require("./routes/kategoriKelasRelasi");
const kategoriKelasRoutes = require("./routes/kategoriKelas");
const middlewareLogRequest = require("./middleware/logs");
const middlewareErrorHandle = require("./middleware/errors");
const middlewareAccessValidation = require("./middleware/accessValidation");
const {fileStorage, fileFilter} = require("./middleware/uploadFile")

app.listen(port, () => {
  console.log(`Server berhasil berjalan di port:${port}`);
});

app.use(middlewareLogRequest);
app.use(express.json());
app.use(morgan("dev"));
app.use(middlewareErrorHandle);
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))

app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/verify-email", verifyEmailRoutes);
app.use("/upload", UploadFileRoutes);
app.use("/user", middlewareAccessValidation, usersRoutes);
app.use("/tutor", middlewareAccessValidation, tutorsRoutes);
app.use("/course", middlewareAccessValidation, kelasRoutes);
app.use("/transaksi-kelas", middlewareAccessValidation, transaksiKelasRoutes);
app.use("/silabus", middlewareAccessValidation, silabusRoutes);
app.use("/review-pretest", middlewareAccessValidation, reviewPretestRoutes);
app.use("/review", middlewareAccessValidation, reviewRoutes);
app.use("/pretest-kelas", middlewareAccessValidation, pretestKelasRoutes);
app.use("/pretest", middlewareAccessValidation, pretestRoutes);
app.use("/pembayaran", middlewareAccessValidation, pembayaranRoutes);
app.use(
  "/orders-pembayaran",
  middlewareAccessValidation,
  ordersPembayaranRoutes
);
app.use("/orders-kelas", middlewareAccessValidation, ordersKelasRoutes);
app.use("/orders", middlewareAccessValidation, ordersRoutes);
app.use("/modul-material", middlewareAccessValidation, modulMaterialRoutes);
app.use("/modul-kelas", middlewareAccessValidation, modulKelasRoutes);
app.use("/mengajar", middlewareAccessValidation, mengajarRoutes);
app.use("/material", middlewareAccessValidation, materialRoutes);
app.use("/kelas-saya", middlewareAccessValidation, kelasSayaRoutes);
app.use(
  "/kategori-kelas-relasi",
  middlewareAccessValidation,
  kategoriKelasRelasiRoutes
);
app.use("/kategori-kelas", middlewareAccessValidation, kategoriKelasRoutes);
