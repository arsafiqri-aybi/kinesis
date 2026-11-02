# Reference

## Acuan perbandingan

Gerakan spasial memerlukan cara membandingkan susunan pada konteks temporal berbeda. Acuan menyatakan aturan perbandingan tersebut. Ia dapat berupa benda, lingkungan, relasi antarsubsistem, jaringan jam dan penggaris ideal, atau struktur geometris yang ditentukan teori.

Acuan tidak sama dengan pengamat sadar. Koordinat juga tidak sama dengan acuan fisik: banyak sistem koordinat dapat digunakan untuk acuan yang sama.

**Sintesis konseptual.** Empat pertanyaan harus dibedakan:

| Pertanyaan | Contoh jenis perubahan |
| --- | --- |
| Apakah sistem berubah terhadap acuan tertentu? | Gerakan relatif |
| Apakah acuannya diganti? | Kerangka ikut bergerak |
| Apakah label untuk keadaan yang sama diganti? | Pergantian koordinat |
| Apakah beberapa keadaan digabung? | Pengurangan informasi atau identifikasi kesetaraan |

Tanpa pemisahan ini, perubahan angka dapat salah dibaca sebagai perubahan fisik, atau gerakan fisik dianggap hilang hanya karena koordinatnya dibuat tetap.

## Membandingkan lintas konteks

Dalam model yang memiliki ruang konfigurasi \(Q_t\) pada tiap waktu, perbandingan dapat diwakili oleh pemetaan \(F_t:Q_t\to Q_R\) menuju ruang pembanding bersama:

\[
q_R(t)=F_t(q_t).
\]

Konstruksi ini menyatakan secara eksplisit apa yang dianggap “tempat yang sama” atau “susunan yang sama”. Ia merupakan representasi bersyarat, bukan definisi yang dipaksakan pada seluruh teori.

Jika semua \(Q_t\) sudah disajikan sebagai satu \(Q\), sebagian aturan perbandingan telah tersembunyi dalam penyajian itu. Menulis \(q(t_1)=q(t_2)\) tetap mengandaikan makna kesamaan lintas waktu.

## Pergantian label yang mempertahankan perubahan

Misalkan \(f:Q\to Q'\) injektif dan tidak bergantung waktu. Maka:

\[
q(t_1)=q(t_2)
\quad\Longleftrightarrow\quad
f(q(t_1))=f(q(t_2)).
\]

**Bukti langsung.** Arah ke kanan mengikuti sifat fungsi; arah sebaliknya mengikuti keinjektifan. Dengan demikian, riwayat konstan tetap konstan dan riwayat tidak konstan tetap tidak konstan.

Sifat yang lebih kuat memerlukan syarat lebih kuat. Mempertahankan kontinuitas dua arah memerlukan kesesuaian topologi, misalnya homeomorfisme. Mempertahankan struktur diferensial memerlukan transformasi yang sesuai, misalnya difeomorfisme. Bijeksi sembarang hanya mempertahankan kesamaan elemen, bukan seluruh struktur geometri. [S07](../Research/Sources.md#s07)

Jika \(f\) tidak injektif, riwayat yang berubah dapat dipetakan menjadi tetap. Ini berbeda dari perubahan koordinat yang hanya mengganti label tanpa kehilangan informasi.

## Acuan yang bergantung waktu

Dalam ruang Euclidean dengan waktu bersama, ambil posisi \(\mathbf r(t)\) dan asal bergerak \(\mathbf z(t)\). Koordinat terhadap asal tersebut:

\[
\mathbf r'(t)=\mathbf r(t)-\mathbf z(t).
\]

Jika \(\mathbf z(t)=\mathbf r(t)\), maka \(\mathbf r'(t)=0\). Ini menyatakan sistem diam terhadap asal yang mengikutinya, bukan bahwa seluruh hubungan fisik geraknya menghilang.

Untuk rotasi sumbu dan translasi yang bergantung waktu:

\[
\mathbf r'=R(t)\mathbf r+\mathbf b(t),
\]

aturan rantai memberi:

\[
\dot{\mathbf r}'=
R\dot{\mathbf r}+\dot R\,\mathbf r+\dot{\mathbf b}.
\]

Suku tambahan menunjukkan bahwa laju koordinat dapat berasal dari perubahan basis atau asal. Setiap klaim “kecepatan sama” perlu menyebut jenis transformasi dan besaran yang dibandingkan.

## Relativitas bukan penghapusan semua perbedaan fisik

**Mapan dalam mekanika klasik.** Kerangka inersial berkaitan dengan perilaku partikel bebas. Di antara transformasi Galilei, dengan rotasi tetap \(R\) dan kecepatan relatif tetap \(\mathbf u\), salah satu konvensinya:

\[
t'=t,\qquad
\mathbf r'=R\mathbf r-\mathbf u t+\mathbf b.
\]

Maka \(\mathbf v'=R\mathbf v-\mathbf u\), sedangkan \(\mathbf a'=R\mathbf a\). Ketetapan posisi bergantung kerangka; nol atau tidaknya percepatan dipertahankan di antara kerangka inersial tersebut. [S04](../Research/Sources.md#s04)

Mengizinkan koordinat arbitrer tidak menjadikan semua kerangka inersial. Struktur hukum dan suku tambahan juga harus ditransformasikan.

Dalam relativitas, nilai kecepatan lokal suatu benda diperoleh relatif terhadap pengamat timelike setempat. Pengamat yang berbeda dapat memperoleh kecepatan berbeda pada kejadian sama. Namun, setelah pengamat dan benda ditentukan, relasi itu tidak bergantung pada nama koordinat.

Percepatan proper merupakan contoh perbedaan fisik yang tidak dihapus hanya dengan membuat koordinat benda tetap. Demikian pula, lintasan null tidak mempunyai kerangka diam fisik seperti benda timelike. Pernyataan “semua gerakan sepenuhnya pilihan koordinat” karena itu terlalu kuat. [S05](../Research/Sources.md#s05), [S06](../Research/Sources.md#s06)

## Simetri, invariansi, dan redundansi

**Definisi matematis.** Transformasi simetri mempertahankan struktur yang disebutkan. Struktur itu dapat berupa jarak, relasi, atau bentuk hukum. “Simetri” selalu membutuhkan penjelasan tentang apa yang dipertahankan.

Tiga penggunaan perlu dipisahkan:

1. **Transformasi pasif:** mengubah representasi deskripsi.
2. **Transformasi aktif:** membandingkan susunan fisik yang ditransformasikan terhadap struktur acuan.
3. **Redundansi gauge:** beberapa representasi diperlakukan menyatakan keadaan fisik sama dalam teori yang bersangkutan.

Tidak setiap simetri aktif merupakan redundansi. Memutar benda terhadap lingkungan dapat menghasilkan keadaan yang berbeda walaupun hukum alam memiliki simetri rotasi.

Urutan transformasi juga mempunyai struktur. Dua translasi tetap di ruang vektor komutatif:

\[
T_{\mathbf a}T_{\mathbf b}
=T_{\mathbf a+\mathbf b}
=T_{\mathbf b}T_{\mathbf a}.
\]

Sebaliknya, rotasi tiga dimensi umumnya tidak komutatif. Ini sifat komposisi transformasi tertentu, bukan prinsip bahwa “gerakan selalu komutatif” atau “gerakan selalu tidak komutatif”. [S03](../Research/Sources.md#s03)

Sifat matematis hanya diwariskan jika jenis transformasi dan struktur yang relevan memang dipakai.

## Relasi internal dan gerakan keseluruhan

Jika seluruh posisi sistem ditranslasi dengan vektor sama, semua selisih posisi internal tetap. Jika seluruh konfigurasi dirotasi bersama, semua jarak internal tetap. Deskripsi yang hanya menyimpan jarak internal tidak dapat membedakan transformasi tersebut.

**Batas inferensi.** Ketidakmampuan deskripsi internal membedakan dua konfigurasi tidak membuktikan bahwa tidak ada perbedaan terhadap lingkungan, orientasi, atau struktur inersial. Menghapus transformasi global melalui ruang hasil bagi merupakan pilihan yang memerlukan alasan sesuai teori.

Dalam beberapa pendekatan relasional, struktur hubungan diberi kedudukan lebih dasar daripada posisi terhadap latar. Arti “lebih dasar” di sini berkaitan dengan konstruksi teori, bukan hasil universal yang dapat diputuskan dari contoh translasi saja.

## Kedudukan fundamental

Peran elementer Reference adalah menjaga agar perbandingan bermakna dan tidak tertukar dengan penggantian representasi. Acuan tertentu, kelompok transformasi tertentu, dan klaim tentang struktur absolut atau relasional bergantung pada kerangka.

Invariansi koordinat merupakan konsistensi deskripsi. Ia belum menjadi bukti kecukupan model, keberadaan fisik semua objeknya, atau kebenaran inferensi dari data. Persoalan terakhir dibahas dalam [Evidence](Evidence.md).
