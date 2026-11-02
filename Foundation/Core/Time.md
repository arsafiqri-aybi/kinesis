# Time

## Urutan, durasi, dan parameter

Istilah waktu memuat beberapa struktur yang tidak setara:

| Struktur | Yang diberikan | Yang belum diberikan |
| --- | --- | --- |
| Urutan | Sebelum, sesudah, atau dapat dibandingkan | Lama selang |
| Durasi | Perbandingan atau ukuran selang | Posisi spasial |
| Parameter | Label untuk menyatakan riwayat | Jaminan bahwa label adalah pembacaan jam fisik |
| Waktu koordinat | Penempatan kejadian dalam deskripsi ruang-waktu | Satu waktu universal yang disepakati semua pengamat |
| Waktu proper | Durasi sepanjang riwayat timelike dalam relativitas | Parameter untuk riwayat cahaya |

Pemisahan ini bersifat konseptual. Ia tidak membuktikan bahwa waktu pada hakikatnya tersusun dari unsur terpisah tersebut.

## Struktur urutan

**Definisi matematis.** Orde parsial tak ketat \(\preceq\) bersifat refleksif, antisimetris, dan transitif. Tidak semua pasangan harus dapat dibandingkan. Orde total menambahkan keterbandingan setiap pasangan. [S01](../Research/Sources.md#s01)

Urutan \(a\prec b\prec c\) tidak menentukan apakah selang \(a\) ke \(b\) lebih panjang daripada \(b\) ke \(c\). Misalnya, label \(0,1,2\) dan \(0,1,100\) mempertahankan urutan tetapi memberikan selisih angka berbeda. Selisih label baru dapat diartikan sebagai durasi bila struktur pengukuran membenarkannya.

Urutan daftar pengamatan juga belum identik dengan urutan kejadian sumber. Informasi dapat tiba terlambat, disusun ulang, atau berasal dari lokasi berbeda. Untuk menyamakan keduanya diperlukan model hubungan antara kejadian dan pencatatan.

Tidak setiap relasi urutan merupakan waktu. Urutan alfabet mempunyai struktur matematis, tetapi tidak dengan sendirinya menyatakan riwayat fisik.

## Riwayat dan pilihan parameter

Riwayat sederhana ditulis \(q:T\to Q\). Domain \(T\) dapat berupa interval real atau urutan diskret sesuai kerangka. Sekadar memberi label \(t\) tidak mengharuskan kontinuitas, keseragaman satuan, atau arah waktu fisik tertentu.

Misalkan \(t=f(\lambda)\) bijektif dan meningkat ketat, lalu

\[
\widetilde q(\lambda)=q(f(\lambda)).
\]

**Hasil langsung.** Kedua riwayat melewati konfigurasi yang sama dalam urutan yang sama. Jika domainnya bersesuaian melalui bijeksi, yang satu konstan tepat ketika yang lain konstan. Namun, selang parameter dapat berbeda.

Jika \(f\) dan \(q\) terdiferensialkan, aturan rantai memberi:

\[
\frac{d\widetilde q}{d\lambda}
=\frac{dq}{dt}\frac{dt}{d\lambda}.
\]

Turunan numerik bukan sifat kurva geometris saja. Ia juga bergantung pada parameter. Untuk memakai rumus invers laju secara teratur, \(dt/d\lambda\) perlu tidak nol pada bagian yang dipertimbangkan.

Jika \(f\) menurun, arah penelusuran berbalik. Jika \(f\) tidak injektif, beberapa parameter dapat digabung; informasi urutan atau pengulangan dapat hilang. Karena itu, semua pelabelan ulang tidak otomatis setara.

Perubahan satuan \(t'=at+b\), \(a>0\), berbeda dari penggunaan fungsi umum yang tidak mewakili jam berjalan seragam dalam model semula. Laju dapat dibandingkan sesudah konversi satuan; perubahan parameter umum membutuhkan penjelasan fisik tambahan.

## Durasi dan jam

Durasi memerlukan standar perbandingan proses. Jam adalah sistem fisik yang pembacaannya digunakan untuk menetapkan selang, dengan domain penggunaan dan ketidakpastian tertentu.

Dalam SI, detik ditetapkan melalui nilai tetap frekuensi transisi hiperhalus keadaan dasar atom cesium-133 yang tidak terganggu, \(\Delta\nu_{\mathrm{Cs}}=9\,192\,631\,770\ \mathrm{Hz}\). Definisi satuan ini memberikan keseragaman metrologis; ia bukan teori ontologi waktu. [S16](../Research/Sources.md#s16)

Adanya standar satuan tidak berarti semua jam pada lintasan dan lingkungan berbeda selalu memperoleh selang sama. Perlu dibedakan satuan yang digunakan, kualitas realisasi jam, dan durasi fisik yang diukur.

## Waktu dalam kerangka klasik dan relativistik

**Asumsi klasik tertentu.** Model Newtonian menggunakan waktu bersama untuk membandingkan konfigurasi pada saat yang sama. Secara representasional, riwayat dapat disajikan dalam produk \(T\times Q\). Keberhasilan model dalam domainnya tidak membuktikan waktu global ini merupakan syarat semua gerakan.

**Mapan dalam relativitas khusus.** Keserentakan kejadian yang terpisah secara spasial bergantung pada kerangka inersial. Urutan kausal kejadian yang berhubungan timelike atau null dipertahankan oleh transformasi Lorentz yang mempertahankan arah waktu; pasangan spacelike tidak mempunyai urutan temporal invarian seperti itu. [S05](../Research/Sources.md#s05)

Persamaan satu dimensi menunjukkan alasannya:

\[
\Delta t'=\gamma\left(\Delta t-\frac{v\Delta x}{c^2}\right),
\qquad
\gamma=\frac{1}{\sqrt{1-v^2/c^2}}.
\]

Jika \(\Delta t=0\), maka \(\Delta t'\) umumnya tidak nol ketika \(v\Delta x\ne0\). Perbedaannya tidak diselesaikan hanya dengan mengoreksi waktu tempuh cahaya: koordinat kejadian sudah dapat ditentukan setelah koreksi penerimaan sinyal.

Relasi kausal membentuk orde parsial bila syarat kausalitas yang sesuai dipenuhi. Pada ruang-waktu dengan kurva kausal tertutup, antisimetrisitas dapat gagal. Karena itu, “semua relativitas memberikan orde parsial global” merupakan generalisasi berlebihan.

## Waktu proper

Dengan konvensi metrik \((-+++)\) dan \(x^0=ct\), durasi proper sepanjang kurva timelike dapat ditulis:

\[
\Delta\tau
=\frac1c\int_{\lambda_1}^{\lambda_2}
\sqrt{-g_{\mu\nu}
\frac{dx^\mu}{d\lambda}
\frac{dx^\nu}{d\lambda}}\,d\lambda.
\]

Waktu proper adalah besaran geometris sepanjang kurva tersebut. Kurva berbeda di antara dua kejadian dapat menghasilkan durasi berbeda. Untuk kurva null, \(d\tau=0\); waktu proper tidak dapat dipakai sebagai parameter reguler cahaya. [S06](../Research/Sources.md#s06)

Dalam ruang-waktu Minkowski:

\[
d\tau=dt\sqrt{1-\frac{|\mathbf v|^2}{c^2}}
\]

untuk lintasan timelike dan koordinat inersial. Batas \(|\mathbf v|\ll c\) menjelaskan mengapa waktu koordinat dan waktu proper dapat mendekati satu sama lain dalam keadaan tertentu; pendekatan itu tidak menyamakan keduanya secara prinsip.

## Arah, kausalitas, dan perubahan

Memberi orientasi “masa depan” pada domain tidak menerangkan mengapa banyak proses makroskopis memiliki arah yang khas. Arah termodinamis memerlukan pengetahuan tentang keadaan statistik dan kondisi batas. Urutan temporal, sebab, arah parameter, serta ketakterbalikan proses bukan sinonim.

Demikian pula, perubahan tidak otomatis membuktikan suatu teori substansi waktu. Deskripsi relasional dapat menghubungkan satu variabel dengan variabel lain tanpa menganggap sebuah jam eksternal mendasari semuanya.

**Model konseptual terbuka.** Page dan Wootters mengusulkan cara mendeskripsikan evolusi melalui korelasi dengan subsistem jam dalam keadaan keseluruhan yang stasioner. Ini contoh bahwa peran waktu dapat dirumuskan berbeda, bukan bukti bahwa waktu eksternal telah dieliminasi secara empiris dari semua fisika. [S19](../Research/Sources.md#s19)

## Kedudukan fundamental

Yang diperlukan untuk mengartikan sebuah riwayat ialah hubungan temporal atau pengganti relasional yang dinyatakan dengan jelas. Durasi metrik, garis real kontinu, waktu global, arah termodinamis, serta jam eksternal merupakan komitmen tambahan yang kedudukannya bergantung pada kerangka.

Persoalan apakah waktu fundamental atau muncul dari struktur lain tetap terbuka. Menuliskan \(q(t)\) tidak menyelesaikannya. Hubungan gerakan dengan keteraturan fungsi dibahas dalam [Change](Change.md); perbandingan posisi lintas konteks dibahas dalam [Reference](Reference.md).
