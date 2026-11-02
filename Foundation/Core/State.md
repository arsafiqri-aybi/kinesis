# State

## Keadaan dan kriteria perbedaan

**Definisi kerangka.** Keadaan merupakan deskripsi tentang suatu sistem pada konteks tertentu, dengan alternatif yang dibedakan oleh kerangka itu. Konteks dapat mencakup waktu, pilihan besaran, batas sistem, dan tingkat perincian. Keadaan bukan otomatis potret seluruh realitas.

Misalkan \(S\) himpunan keadaan yang dipakai suatu model. Penulisan \(s_1\ne s_2\) bermakna setelah kriteria kesetaraan ditentukan. Angka atau label berbeda belum cukup untuk menyatakan keadaan fisik berbeda.

Tiga pengertian kesamaan perlu dipisahkan:

| Pengertian | Pertanyaan |
| --- | --- |
| Identitas sistem | Apakah yang dibicarakan masih sistem atau bagian yang sama? |
| Kesamaan keadaan | Apakah besaran yang mendefinisikan keadaannya sama? |
| Kesetaraan representasi | Apakah dua deskripsi merupakan cara berbeda menyatakan keadaan fisik yang sama? |

Benda yang sama dapat mempunyai keadaan berbeda. Dua benda berbeda dapat mempunyai nilai posisi atau temperatur yang sama menurut deskripsi tertentu. Dua vektor numerik berbeda dapat mewakili keadaan fisik yang sama jika transformasinya merupakan redundansi representasi yang telah ditentukan.

Pembedaan tersebut merupakan **sintesis konseptual**: ia tidak menetapkan satu teori identitas universal.

## Konfigurasi bukan selalu keadaan dinamis lengkap

Konfigurasi menyatakan susunan sistem. Untuk partikel klasik, konfigurasi dapat berupa posisi. Jika hukum evolusi memerlukan posisi dan momentum, mengetahui posisi saja belum menentukan keadaan yang cukup bagi prediksi. Dalam mekanika Hamilton, pasangan \((q,p)\) menyediakan struktur fase yang berbeda dari ruang konfigurasi. [S02](../Research/Sources.md#s02), [S22](../Research/Sources.md#s22)

Perbedaannya dapat dipahami secara langsung. Dua riwayat satu dimensi,

\[
q_1(t)=t,\qquad q_2(t)=-t,
\]

mempunyai konfigurasi sama pada \(t=0\), tetapi arah perubahan berbeda. Pernyataan tentang konfigurasi pada satu saat tidak menentukan seluruh riwayat. Tidak ada hukum khusus yang diperlukan untuk melihat ketidakcukupan informasi ini.

Untuk benda memanjang, keadaan geraknya tidak selalu terwakili oleh satu titik. Pusat yang tetap tidak meniadakan perubahan orientasi. Untuk medium, keadaan dapat berupa distribusi atau medan, tanpa pelabelan setiap bagian sebagai objek terpisah.

Istilah “keadaan lengkap” selalu relatif terhadap teori dan tujuan. Pemilihan variabel yang membuat evolusi menjadi Markov, jika memungkinkan, merupakan sifat model yang harus dijelaskan; bukan konsekuensi otomatis dari penggunaan kata “keadaan”.

## Kesetaraan dan informasi yang dipertahankan

**Definisi matematis.** Relasi ekuivalensi \(\sim\) pada \(S\) bersifat refleksif, simetris, dan transitif. Ia membentuk kelas \([s]\) dari keadaan yang diperlakukan setara dan himpunan hasil bagi \(S/{\sim}\). Struktur relasi ini mapan secara matematis. Alasan fisik memilih relasinya memerlukan pembenaran terpisah. [S01](../Research/Sources.md#s01)

Terdapat dua konstruksi yang mirip bentuknya tetapi berbeda makna:

1. **Redundansi:** berbagai representasi menyatakan keadaan fisik yang sama.
2. **Perincian terbatas:** beberapa keadaan fisik yang berbeda sengaja digabung karena deskripsi hanya mempertahankan sebagian informasi.

Misalkan \(C:S\to Z\) suatu pemetaan perincian. Kesamaan \(C(s_1)=C(s_2)\) tidak membuktikan \(s_1=s_2\). Jika \(C\) tidak injektif, ada perbedaan yang tidak dipertahankannya.

**Hasil langsung.** Untuk riwayat \(s:T\to S\), riwayat yang tetap di \(S\) pasti tetap setelah pemetaan \(C\). Sebaliknya, \(C\circ s\) dapat tetap walaupun \(s\) berubah. Bukti: pemetaan memberi keluaran sama pada masukan sama, tetapi masukan berbeda dapat memberi keluaran sama jika pemetaan tidak injektif.

Inilah alasan perubahan pada satu tingkat perincian tidak otomatis sama dengan perubahan pada tingkat lain. Proyeksi keadaan menjadi posisi pusat dapat menghapus informasi rotasi; pengukuran energi saja dapat menghapus perbedaan keadaan lain. Kesimpulan bergantung pada informasi yang dipertahankan, bukan pada banyaknya angka yang ditampilkan.

## Besaran yang dapat dibandingkan

Dalam model klasik sederhana, besaran teramati dapat ditulis sebagai fungsi \(A:S\to\mathbb R\). Perbedaan \(A(s_1)\ne A(s_2)\) menjamin \(s_1\ne s_2\) dalam model itu. Kesamaan satu besaran tidak menjamin kesamaan seluruh keadaan.

Keluarga besaran \(\mathcal A\) disebut memisahkan titik bila:

\[
s_1\ne s_2\ \Longrightarrow\
\exists A\in\mathcal A:\ A(s_1)\ne A(s_2).
\]

**Hasil matematis.** Jika keluarga tersebut memisahkan titik dan seluruh nilainya sama, keadaan sama. Ini merupakan implikasi definisi, bukan klaim bahwa semua besaran itu dapat diukur bersamaan dengan ketelitian tak terbatas.

Dalam teori kuantum, observabel dan keadaan tidak memiliki hubungan sesederhana fungsi nilai pasti bagi semua besaran. Keadaan memberi probabilitas hasil pengukuran; vektor keadaan ternormalisasi yang hanya berbeda fase global mewakili keadaan murni yang sama. Karena itu, perubahan komponen suatu representasi dapat terjadi tanpa perubahan keadaan fisik yang dibedakan teori. [S09](../Research/Sources.md#s09)

Pengetahuan tentang hasil yang tidak lengkap juga berbeda dari keadaan fisiknya. Ketidakpastian pengamat tidak selalu berarti sistem memiliki keadaan yang berubah.

## Identitas sepanjang riwayat

Untuk mengatakan bahwa sesuatu berpindah, diperlukan aturan menghubungkan deskripsi pada konteks temporal berbeda. Aturan tersebut dapat berupa label partikel, keberlanjutan bentuk, hubungan material, konservasi tertentu, atau struktur teori. Ia tidak selalu merupakan sifat intrinsik yang teramati langsung.

Dua rekaman berisi titik identik dapat mendukung lebih dari satu pencocokan antartitik. Kesesuaian warna atau kedekatan posisi hanya menjadi alasan pencocokan jika asumsi pengamatan mendukungnya. Masalah pengetahuan ini dibahas lebih lanjut dalam [Evidence](Evidence.md).

**Batas fisik.** Untuk partikel kuantum identik, label formal tidak dapat begitu saja diperlakukan sebagai identitas individual yang dapat dilacak secara klasik. Pertukaran label dalam deskripsi standar memiliki aturan simetri yang terkait dengan statistik partikel. Ini membatasi universalitas gambaran “benda berlabel yang selalu memiliki lintasan”. [S12](../Research/Sources.md#s12)

Namun, batas itu tidak membuktikan bahwa konsep identitas sepenuhnya tidak bermakna. Yang gagal adalah pemindahan tanpa syarat dari identitas partikel klasik ke semua kerangka.

## Keberadaan, model, dan batas ontologi

Keberadaan elemen \(s\in S\) menyatakan bahwa suatu keadaan termasuk kemungkinan formal model. Ia belum menyatakan keadaan itu diwujudkan secara fisik. Keberadaan kurva matematis juga belum membuktikan bahwa alam mengizinkan riwayat tersebut.

Pemisahan ini mencegah dua lompatan:

- Dari “dapat direpresentasikan” menjadi “pasti ada di alam”.
- Dari “tidak dibedakan oleh model” menjadi “tidak ada perbedaan fisik apa pun”.

Asumsi tentang apa yang ada, apa yang dipilih sebagai sistem, dan apa yang dihitung sebagai keadaan merupakan bagian kerangka ilmiah. Pengamatan dapat membatasi pilihan, tetapi tidak semua pertanyaan ontologis diselesaikan oleh satu notasi.

## Kedudukan fundamental

Peran elementer State adalah menyediakan **perbedaan yang bermakna dan kriteria kesetaraan**. Bentuk ruang keadaan, identitas individu, kelengkapan variabel, serta keterukuran semua besaran merupakan struktur lebih lanjut.

Keadaan yang berbeda belum berarti gerakan: perbedaan dapat terjadi antarsistem pada waktu sama, atau berupa perubahan nonspasial. Makna gerakan memerlukan hubungan dengan [Time](Time.md), [Space](Space.md), [Reference](Reference.md), serta [Change](Change.md).

**Batas kepastian:** tidak ada satu definisi keadaan atau identitas yang dibuktikan berlaku untuk semua teori fisika dan semua pengalaman perseptual.
