# react-app-ibucanggih

### Deskripsi singkat program

Website ini dibuat dengan menggunakan framework ReactJS, Express.js, dan MySQL. User dapat menambah poin reward pada halaman yang telah disediakan dengan mengisi data-data yang dibutuhkan. Website ini dapat menampilkan total poin yang sudah didapatkan oleh user dan detail setiap poin reward yang valid dan tidak valid. Website juga memiliki fitur admin yang dapat mengelola user, event, artikel, dan banner.

### Cara Penggunaan Program

1. Clone link repository <strong>react-app-ibucanggih</strong>
2. Buat database bernama ibucanggih_db pada MYSQL
3. Jalankan perintah berikut pada terminal
```
mysql -u {username} -p ibucanggih_db < ibucanggih_db.sql
```
4. Untuk menjalankan website, buka folder frontend dan jalankan perintah berikut pada terminal
```
npm install
```
Lalu, jalankan
```
npm start
```
5. Untuk menjalankan server, buka folder backend dan jalankan perintah berikut pada terminal
```
npm install
```
Lalu, jalankan
```
nodemon index
```
