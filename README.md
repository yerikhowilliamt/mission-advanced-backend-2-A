Tugas mission Advance backend 2 A:
1. Implementasi REGISTRASI (hash password dengan bcrypt)
2. Implementasi LOGIN (memeriksa apakah email dan password user sudah benar dan terdaftar di database atau belum, authentikasi user dengan JWT)
3. Implementasi MIDDLEWARE (mengecek validitas token mnggunakan jwt.verify dan secret key)
4. Implementasi QUERY PARAMS (filter, orderBy, sort, search)
5. Implementasi SEND EMAIL VERIFIKASI (menggunakan nodemailer untuk mengirimkan email verifikasi kepada user setelah register, dengan cara mengirimkan token yang ada di database kepada user melalui email ke endpoint "/verify-email?token=<usertoken>)
6. Implementasi UPLOAD IMAGE (menggunakan multer sebagai middleware untuk mengupload file(image) ke endpoint "/upload")
