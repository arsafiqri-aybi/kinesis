# Reduction

## Persamaan yang sama, tiga arti berbeda

Kesetaraan keadaan, pengurangan perincian, dan ketakterbedaan observasional dapat sama-sama ditulis sebagai pemetaan yang menggabungkan alternatif. Namun, alasan penggabungannya berbeda:

| Penggabungan | Yang dipertahankan sebagai sama | Justifikasi yang dibutuhkan |
| --- | --- | --- |
| Redundansi representasi | Keadaan fisik menurut teori | Struktur dan interpretasi teori |
| Reduksi deskripsi | Informasi yang sengaja disimpan | Kecukupan terhadap pertanyaan tertentu |
| Ketakterbedaan observasional | Data yang dapat dihasilkan | Model pengamatan dan kelas kemungkinan |

[State](../Foundation/Core/State.md) sudah membedakan dua arti pertama; [Evidence](../Foundation/Core/Evidence.md) memberikan arti ketiga. Hubungannya memungkinkan satu kriteria matematis dipakai tanpa menyamakan makna fisiknya.

## P04

**Kriteria faktorisasi melalui deskripsi tereduksi.**

**Premis.** Diberikan himpunan \(X,W\), pemetaan \(C:X\to Z\) yang surjektif, dan fungsi \(A:X\to W\). Nilai \(z\) mewakili semua kemungkinan pada serat \(C^{-1}(\{z\})\).

**Kesimpulan.** Terdapat fungsi tunggal \(\bar A:Z\to W\) dengan \(A=\bar A\circ C\) jika dan hanya jika:

\[
C(x_1)=C(x_2)\ \Longrightarrow\ A(x_1)=A(x_2).
\tag{1}
\]

**Bukti kebutuhan.** Jika \(\bar A\) ada, masukan \(C(x_1)=C(x_2)\) yang sama memberinya keluaran sama. Maka \(A(x_1)=A(x_2)\).

**Bukti kecukupan.** Untuk setiap \(z\in Z\), ambil nilai \(A(x)\) dari serat \(C^{-1}(\{z\})\). Serat tidak kosong karena surjektif. Kondisi (1) menjamin semua anggotanya memberi nilai sama, sehingga definisi \(\bar A(z)\) tidak bergantung wakil.

**Bukti ketunggalan.** Setiap \(z=C(x)\) harus memenuhi \(\bar A(z)=A(x)\). Tidak ada kebebasan memilih keluaran lain.

Ini teorema elementer tentang fungsi pada kelas kesetaraan, bukan hukum fisika baru. Bentuk topologis dengan syarat kontinuitas dibahas dalam [N01](Sources.md#n01). Bukti di sini diberikan pada tingkat himpunan terlebih dahulu.

**Apa yang belum mengikuti.** Keberadaan \(\bar A\) sebagai fungsi tidak menjamin ia kontinu, terukur, mulus, mudah dihitung, atau dapat diukur secara fisik. Jika \(C\) adalah peta quotient topologis dan \(A\) kontinu, sifat universal quotient memberi kontinuitas \(\bar A\). Tanpa syarat itu, sifat tambahan tidak boleh dianggap gratis.

## Gerakan sebagai predikat yang harus terdefinisi

Misalkan \(\pi:\mathcal H\to\mathcal H/{\sim}\) menggabungkan representasi riwayat yang menurut teori menyatakan keadaan fisik sama, dengan acuan yang ikut direpresentasikan. Predikat \(M:\mathcal H\to\{0,1\}\) bermakna pada kelas fisik hanya bila:

\[
h_1\sim h_2\ \Longrightarrow\ M(h_1)=M(h_2).
\]

Ini aplikasi P04 dengan \(C=\pi\). Bila hasil predikat berubah hanya karena redundansi representasi, predikat itu belum terdefinisi pada tingkat fisik yang diklaim.

P01 memberi contoh bagaimana aturan perbandingan yang ditransformasikan bersama keadaan menjaga kesimpulan semacam itu. Namun, memilih semua transformasi sebagai “redundansi” akan menjadi tambahan ontologi yang tidak dibenarkan oleh P04.

## P05

**Kapan operasi dapat diwariskan ke deskripsi tereduksi.**

**Premis.** \(C:X\to Z\) surjektif dan \(T:X\to X\) suatu operasi.

**Kesimpulan.** Terdapat operasi tunggal \(\bar T:Z\to Z\) dengan:

\[
\bar T\circ C=C\circ T
\tag{2}
\]

tepat bila:

\[
C(x_1)=C(x_2)
\ \Longrightarrow\
C(T(x_1))=C(T(x_2)).
\tag{3}
\]

**Bukti.** Terapkan P04 pada \(A=C\circ T\). Kondisi (3) persis syarat (1).

Hasil ini menyatakan kecukupan deskripsi terhadap operasi yang ditentukan. Ia tidak menyatakan reduksi mempertahankan seluruh keadaan atau semua operasi.

### Transformasi acuan dapat gagal diwariskan

Ambil \(X=\mathbb R^2\), \(C(x,y)=x\), dan rotasi:

\[
T(x,y)=(-y,x).
\]

Keadaan \((0,0)\) dan \((0,1)\) sama-sama direduksi menjadi nol. Setelah rotasi, nilai tereduksinya masing-masing nol dan \(-1\). Kondisi (3) gagal.

Jadi tidak ada aturan tunggal yang mengubah koordinat \(x\) lama menjadi \(x\) baru akibat rotasi ini untuk semua titik, bila \(y\) telah dibuang. Informasi yang diperlukan transformasi tidak dipertahankan oleh reduksi.

**Konsekuensi lintas fondasi.** Dua deskripsi yang setara untuk satu acuan belum tentu cukup untuk pergantian acuan. Bukan rotasinya yang tidak sah; yang tidak cukup adalah deskripsi satu komponen.

### Evolusi tereduksi memerlukan ketertutupan

Misalkan sudah diberikan evolusi deterministik otonom \(\Phi_t:X\to X\), \(t\ge0\), yang memenuhi:

\[
\Phi_0=\mathrm{id},\qquad
\Phi_{t+s}=\Phi_t\circ\Phi_s.
\]

Ini **premis tambahan tentang model dinamika**, bukan hasil dari fondasi kinematika.

Jika kondisi (3) berlaku untuk setiap \(\Phi_t\), P05 menghasilkan \(\Psi_t:Z\to Z\) dengan:

\[
\Psi_t\circ C=C\circ\Phi_t.
\]

**Turunan lanjutan.**

\[
\Psi_{t+s}(C(x))
=C(\Phi_{t+s}(x))
=\Psi_t(\Psi_s(C(x))).
\]

Karena \(C\) surjektif, \(\Psi_{t+s}=\Psi_t\circ\Psi_s\), dan dengan cara sama \(\Psi_0=\mathrm{id}\). Dengan demikian sifat semigrup diwariskan pada tingkat himpunan. Regularitas dan sifat fisik lain membutuhkan syarat terpisah.

**Contoh kegagalan.** Untuk partikel bebas klasik bermassa \(m>0\):

\[
\Phi_t(q,p)=\left(q+\frac{p}{m}t,p\right),\qquad C(q,p)=q.
\]

Dua keadaan awal \((0,0)\) dan \((0,m)\) memiliki posisi sama. Pada \(t>0\), posisinya nol dan \(t\). Maka evolusi posisi saja tidak tertutup sebagai fungsi dari posisi saat itu pada kelas keadaan ini.

Contoh menggunakan hukum partikel bebas sebagai premis model. Ia memperjelas hubungan konfigurasi–keadaan fase dalam [F-S22](../Foundation/Research/Sources.md#s22), bukan menurunkan hukum tersebut dari P05.

**Pembatasan yang sah.** Bila momentum dibatasi sejak awal menjadi satu nilai yang diketahui, posisi dapat cukup untuk kelas lebih sempit itu. Kecukupan berubah karena kelas keadaan dibatasi, bukan karena informasi momentum diperoleh dari posisi.

## Penggabungan tidak selalu mempertahankan kontinuitas

Penggunaan himpunan hasil bagi dapat mengubah sifat topologi. Karena itu, gambar hubungan yang sama secara aljabar belum menjamin ruang tereduksi merupakan manifold atau mendukung laju yang sama.

Kesamaan serat juga tidak menjamin adanya lintasan fisik di dalam serat. Misalnya \(X=\{0,1\}\) dengan topologi diskret, \(C\) konstan, dan riwayat hanya diizinkan kontinu dari interval terhubung. Tidak ada riwayat nonkonstan yang diizinkan, meskipun \(C\) tidak injektif.

Ini penajaman penting terhadap pernyataan umum “reduksi dapat menyembunyikan perubahan”: kehilangan pembedaan memungkinkan ambiguitas secara struktural, tetapi ambiguitas riwayat yang aktual masih bergantung pada \(\mathcal H\), kelas riwayat yang diperbolehkan.

## Yang dapat dan tidak dapat disatukan

P04 memberi satu pola penalaran untuk pertanyaan “apakah informasi yang dipertahankan cukup?” P05 menunjukkan bahwa pertanyaan itu dapat diajukan terhadap transformasi dan dinamika sekaligus.

Yang tidak disatukan adalah alasan fisik mengapa keadaan digabung, pilihan operasi yang relevan, dan hukum yang membatasi riwayat. Sebuah reduksi dapat sah untuk menjawab satu pertanyaan serta gagal untuk pertanyaan lainnya.

Pemakaian kriterianya pada bukti pengamatan dikembangkan dalam [Evidence](Evidence.md). Perbedaan ketetapan deskripsi dan ketetapan keadaan ditelaah dalam [Stationarity](Stationarity.md).
