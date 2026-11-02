# Space

## Posisi adalah bagian suatu struktur

Posisi tidak bermakna sebagai angka yang berdiri sendiri. Ia menyatakan kedudukan dalam suatu ruang atau terhadap hubungan spasial yang ditentukan. Koordinat adalah cara memberi label pada kedudukan tersebut; satu titik dapat mempunyai banyak koordinat.

**Definisi matematis.** Suatu ruang dapat diberi struktur berbeda: topologi, metrik, struktur afin, atau struktur diferensial. Struktur ini menjawab pertanyaan berbeda. Tidak semua himpunan angka merupakan ruang fisik, dan tidak semua ruang yang relevan bagi gerakan merupakan ruang tiga dimensi.

| Struktur | Peran | Batas |
| --- | --- | --- |
| Himpunan | Alternatif lokasi atau konfigurasi | Belum memberi kedekatan |
| Topologi | Lingkungan dan kontinuitas | Belum memberi panjang tertentu |
| Metrik | Jarak menurut aturan tertentu | Belum menentukan makna fisik jarak |
| Struktur afin | Perbedaan titik dan perpindahan | Tidak memilih titik asal khusus |
| Struktur diferensial | Perubahan lokal dan vektor singgung | Tidak dengan sendirinya memberi metrik |

Hubungan standar topologi, ruang metrik, produk, hasil bagi, dan manifold dibahas dalam [S07](../Research/Sources.md#s07). Penggunaan struktur tertentu sebagai model ruang fisik merupakan keputusan ilmiah tambahan.

## Titik, vektor, dan koordinat

Dalam ruang afin Euclidean, dua titik \(p,q\) menentukan vektor perpindahan \(q-p\). Satu titik sendiri tidak merupakan vektor posisi tanpa pilihan asal. Setelah asal \(o\) dipilih, \(\mathbf r=p-o\) menjadi representasi vektor titik itu.

**Hasil langsung.** Mengganti asal sebesar \(\mathbf b\) mengubah kedua vektor posisi dengan cara sama:

\[
\mathbf r'_p=\mathbf r_p-\mathbf b,\qquad
\mathbf r'_q=\mathbf r_q-\mathbf b.
\]

Maka \(\mathbf r'_q-\mathbf r'_p=\mathbf r_q-\mathbf r_p\). Perpindahan pasangan titik bertahan terhadap translasi asal tetap. Hasil ini tidak memerlukan anggapan bahwa posisi absolut dapat diukur.

Namun, pengurangan titik tidak tersedia secara kanonis di setiap manifold. Pada ruang melengkung, menghubungkan titik atau membandingkan vektor di lokasi berbeda dapat memerlukan kurva dan struktur tambahan. Penggunaan rumus Euclidean di semua ruang akan memasukkan asumsi yang tidak dinyatakan.

## Relasi spasial dan konfigurasi

Konfigurasi merupakan susunan sistem, bukan sekadar satu posisi. Untuk \(N\) partikel klasik berlabel di ruang \(X\), konstruksi awalnya:

\[
Q=X^N,\qquad q=(x_1,\ldots,x_N).
\]

Kendala dapat membatasi konfigurasi menjadi bagian tertentu dari produk itu. Contohnya, jarak antartitik material yang tetap membatasi konfigurasi benda tegar. Jumlah koordinat yang ditulis tidak selalu sama dengan jumlah derajat kebebasan independen. [S02](../Research/Sources.md#s02)

Jika benda tegar memiliki titik yang ditetapkan dan penandaan material memadai, orientasinya dalam ruang Euclidean tiga dimensi direpresentasikan oleh:

\[
SO(3)=\{R\in\mathbb R^{3\times3}:R^\top R=I,\ \det R=1\}.
\]

Jadi perubahan orientasi tetap merupakan gerakan meskipun titik yang ditetapkan tidak berpindah. Simetri benda atau informasi yang tidak diamati dapat membuat orientasi yang dapat dibedakan lebih sedikit daripada seluruh \(SO(3)\). [S03](../Research/Sources.md#s03)

Contoh tersebut berfungsi menguji kelengkapan konsep konfigurasi. Ia tidak memerlukan pengembangan teori rotasi atau daftar jenis gerakan.

## Jarak tidak selalu memuat semua informasi

**Definisi matematis.** Metrik \(d:X\times X\to[0,\infty)\) memenuhi:

\[
d(x,y)=0\Leftrightarrow x=y,\qquad
d(x,y)=d(y,x),\qquad
d(x,z)\le d(x,y)+d(y,z).
\]

Jika syarat pertama dilemahkan, hasilnya dapat berupa pseudometrik: dua elemen berbeda mungkin berjarak nol. Menyebut suatu besaran “jarak” tidak otomatis menjamin semua aksioma metrik.

Jarak antarpasangan memberi informasi relasional, tetapi tidak selalu orientasi terhadap lingkungan. Semua jarak internal benda tegar tetap selama translasi dan rotasi. Karena itu, **jarak internal tetap tidak menyiratkan benda diam terhadap acuan eksternal**.

Selain itu, konfigurasi dan bayangan cerminnya dapat memiliki jarak pasangan yang sama. Bila orientasi atau kiralitas relevan, jarak saja tidak selalu mencukupi. Mempertahankan atau menghapus perbedaan itu bergantung pada pertanyaan fisik, bukan pada preferensi notasi.

Kebutuhan acuan tidak selalu berarti benda eksternal. Relasi antarsubsistem juga dapat menyediakan perbandingan, selama informasi yang hilang dijelaskan.

## Ruang fisik dan ruang keadaan

Tiga pengertian ruang sering tertukar:

- **Ruang fisik:** tempat atau relasi spasial yang dimodelkan.
- **Ruang konfigurasi:** himpunan seluruh susunan yang mungkin.
- **Ruang keadaan:** himpunan keadaan yang dipilih teori; dapat memuat besaran tambahan.

Satu titik ruang konfigurasi dapat menyatakan banyak posisi fisik sekaligus. Perubahan temperatur, probabilitas, atau komposisi dapat menjadi perjalanan dalam ruang keadaan tanpa merupakan perpindahan benda di ruang fisik.

Karena itu, ungkapan “gerakan dalam ruang keadaan” adalah perluasan matematis yang sah bila maknanya disebutkan. Ia tidak membuktikan bahwa semua perubahan merupakan gerakan spasial dalam arti yang sama.

## Distribusi, medan, dan pengangkutan

Tidak semua deskripsi gerakan memerlukan individu berlabel. Suatu distribusi \(\phi(x,t)\) dapat menggambarkan besaran pada lokasi. Sebaliknya, deskripsi material dapat menggunakan \(\chi(a,t)\), lokasi bagian material berlabel \(a\). Kedua cara mengajukan pertanyaan berbeda: apa yang terjadi pada lokasi, atau di mana bagian yang sama berada.

**Analisis matematis.** Bandingkan:

\[
\phi_1(x,t)=f(x-vt),\qquad
\phi_2(x,t)=a(t)f(x).
\]

Yang pertama merepresentasikan translasi profil tetap dalam model satu dimensi. Yang kedua mengubah amplitudo pada lokasi tetap; umumnya tidak merupakan translasi profil yang sama. Keduanya dapat memiliki \(\partial_t\phi\ne0\).

Jika \(f\) konstan, \(\phi_1\) bahkan tidak berubah walaupun \(v\) dimasukkan. Distribusi homogen sendiri tidak dapat mengidentifikasi perpindahan material. Informasi arus, label material, atau struktur lain mungkin diperlukan.

Kesimpulannya terbatas tetapi mendasar: perubahan nilai medan pada suatu titik tidak cukup untuk menyimpulkan pengangkutan; ketetapan satu distribusi juga tidak cukup untuk meniadakan seluruh gerakan yang mungkin.

## Ruang dan waktu sebagai satu struktur

Dalam relativitas, kejadian berada dalam ruang-waktu. “Ruang pada suatu saat” memerlukan cara memilih kejadian yang diperlakukan serentak. Pilihan tersebut tidak identik bagi semua pengamat.

Metrik Lorentzian ruang-waktu bukan metrik jarak positif seperti definisi \(d\) di atas. Ia membedakan arah timelike, null, dan spacelike. Karena itu, mengganti jarak Euclidean dengan “jarak empat dimensi” tanpa mengubah pengertian matematis akan menyesatkan. [S06](../Research/Sources.md#s06)

Pemisahan konseptual ruang dan waktu tetap berguna untuk mengajukan pertanyaan, tetapi tidak berarti keduanya harus terpisah secara fisik dalam setiap teori.

Dalam metrologi SI, metre didefinisikan melalui nilai tetap \(c=299\,792\,458\ \mathrm{m\,s^{-1}}\), dengan detik didefinisikan secara terpisah. Ini menghubungkan standar panjang dan waktu, tanpa membuktikan bahwa seluruh geometri ruang diturunkan dari satuan tersebut. [S17](../Research/Sources.md#s17)

## Kedudukan fundamental

Peran elementer struktur spasial adalah memungkinkan perbedaan posisi, orientasi, atau hubungan susunan dibicarakan. Geometri Euclidean, tiga dimensi, koordinat global, identitas titik lintas waktu, dan pembagian ruang-waktu tertentu bukan konsekuensi kata “ruang” saja.

Apakah ruang-waktu kontinu atau diskret pada tingkat paling dasar tetap merupakan pertanyaan terbuka. Model causal set, misalnya, mengusulkan struktur orde yang lokal hingga sebagai dasar pendekatan ruang-waktu. Statusnya adalah usulan penelitian, bukan fakta bahwa ruang telah terbukti diskret. [S20](../Research/Sources.md#s20)

Perbandingan konfigurasi membutuhkan [Reference](Reference.md), sedangkan penelusuran konfigurasi dalam konteks temporal dibahas dalam [Change](Change.md).
