Tugas mission Advance backend 2 A:
1. Implementasi REGISTRASI (hash password dengan bcrypt)
2. Implementasi LOGIN (memeriksa apakah email dan password user sudah benar dan terdaftar di database atau belum, authentikasi user dengan JWT)
3. Implementasi MIDDLEWARE (mengecek validitas token mnggunakan jwt.verify dan secret key)
4. Implementasi QUERY PARAMS (filter, orderBy, sort, search)
5. Implementasi SEND EMAIL VERIFIKASI (menggunakan nodemailer untuk mengirimkan email verifikasi kepada user setelah register, dengan cara mengirimkan token yang ada di database kepada user melalui email ke endpoint "/verify-email?token=(usertoken))
6. Implementasi UPLOAD IMAGE (menggunakan multer sebagai middleware untuk mengupload file(image) ke endpoint "/upload")

# Cara menggunakan applikasi ini
- ## Registrasi
  ![Screenshot 2024-08-16 043945](https://github.com/user-attachments/assets/bcf86c35-bb2e-4ded-bba7-7f774ae77fde)
  
- ## Login
  ![Screenshot 2024-08-16 043902](https://github.com/user-attachments/assets/48358f56-047d-4844-9786-ff5d8702809f)
  
# Pastikan sudah login lalu copy token masukkan ke "Authorization" lalu pilih "Bearer Token"
- ## Mendapatkan semua data user
  ![Screenshot 2024-08-16 043817](https://github.com/user-attachments/assets/d7371209-557e-4ada-b695-ed818016dc6c)
  
- ## Edit user
  ![Screenshot 2024-08-16 043717](https://github.com/user-attachments/assets/07fed8b5-1c70-4767-8960-cce2c43bbed0)
  
- ## Hapus user
  ![Screenshot 2024-08-16 043410](https://github.com/user-attachments/assets/1bdd863f-9222-42cf-bae0-9a0ae6b993cc)
  
- ## Membuat kelas baru
  ![Screenshot 2024-08-16 043311](https://github.com/user-attachments/assets/d0f6935f-14e7-409c-a29b-41b66d54e093)
  
- ## Mendapatkan semua data kelas dan melakukan (Filtering, Sorting, Searching)
  ### Filtering
  ![Screenshot 2024-08-16 042720](https://github.com/user-attachments/assets/a7e0f8d4-561c-485c-83d5-4c47d8606f9d)

  ### Sorting
  ![Screenshot 2024-08-16 043012](https://github.com/user-attachments/assets/e47501ed-27d7-4f92-a0fe-def09f8f1429)

  ### Searching
  ![Screenshot 2024-08-16 043118](https://github.com/user-attachments/assets/9f6c4815-bf5d-4e2f-b5da-af93b9e13985)

- ## Edit kelas
  ![Screenshot 2024-08-16 041837](https://github.com/user-attachments/assets/7b1ef433-7add-4876-9d6e-58798ea16407)
  
-  ## Hapus kelas
  ![Screenshot 2024-08-16 041022](https://github.com/user-attachments/assets/2f9cb84b-2143-4a18-ad04-7ff1554c4fbe)

-  ## Upload image
  ![Screenshot 2024-08-16 040607](https://github.com/user-attachments/assets/ad1cd93b-f64e-47bc-ae82-a2d7f307649e)
