# Evidence

## Kesimpulan ditentukan terhadap kelas kemungkinan

Pengetahuan tentang gerakan tidak dimulai hanya dari data \(y\). Ia memerlukan kelas riwayat \(\mathcal H\), acuan pembanding, serta pemetaan pengamatan \(\mathcal O:\mathcal H\to Y\). Ketiganya menetapkan apa yang masih mungkin setelah data diketahui.

Definisikan:

\[
\mathcal H_y=\{h\in\mathcal H:\mathcal O(h)=y\}.
\]

Dalam pembahasan ini \(y\) selalu berada pada citra \(\mathcal O(\mathcal H)\), sehingga kelas kompatibelnya tidak kosong. Kelas kosong menunjukkan ketidakcocokan data dengan model, bukan bukti bahwa semua kesimpulan sekaligus benar.

Dasarnya adalah [Evidence Foundation](../Foundation/Core/Evidence.md), sedangkan kriteria pada tingkat fungsi dikembangkan dalam [P04](Reduction.md#p04).

## P06

**Keteridentifikasian adalah faktorisasi sifat melalui data.**

**Premis.** Diberikan sifat \(P:\mathcal H\to W\); untuk pertanyaan ya–tidak, \(W=\{0,1\}\). Seluruh konvensi acuan dan kesetaraan sudah ditentukan.

**Kesimpulan.** Ada fungsi tunggal \(\widehat P:\mathcal O(\mathcal H)\to W\) yang menentukan \(P(h)\) dari data untuk setiap riwayat jika dan hanya jika:

\[
\mathcal O(h_1)=\mathcal O(h_2)
\ \Longrightarrow\
P(h_1)=P(h_2).
\]

**Bukti.** Terapkan P04 dengan \(X=\mathcal H\), \(C=\mathcal O\) yang kodomainnya dibatasi ke citranya, dan \(A=P\).

Untuk satu data tertentu, cukup bahwa \(P\) konstan pada serat \(\mathcal H_y\); ketunggalan global seluruh model tidak diperlukan.

### Mengetahui gerak tanpa merekonstruksi riwayat

Ambil kelas riwayat kontinu pada garis, acuan tetap, dan data tepat \(q(0)=0,q(1)=1\). Setiap riwayat kompatibel tidak konstan, sehingga sifat “terjadi perubahan posisi pada selang” diketahui.

Namun \(q_1(t)=t\) dan \(q_2(t)=t^2\) memberikan data ujung sama dan riwayat berbeda. Maka informasi yang tidak cukup untuk rekonstruksi lengkap dapat cukup untuk satu kesimpulan gerak.

Kebalikannya, data \(q(0)=q(1)=0\) kompatibel dengan riwayat diam dan \(q(t)=t(1-t)\). Sifat yang sama tidak teridentifikasi pada kelas ini.

### Dua syarat yang tidak boleh dilebur

Jika \(\sim_{\mathrm{phys}}\) menyatakan redundansi fisik, predikat \(P\) terlebih dahulu harus konstan pada kelasnya agar terdefinisi secara fisik. Setelah itu baru ditanyakan apakah \(P\) konstan pada serat pengamatan.

Kesetaraan fisik dan serat pengamatan bisa berbeda ukuran. Keadaan yang berbeda secara fisik dapat tidak dibedakan oleh pengamatan yang terbatas. Perbedaan data juga harus diperiksa terhadap kalibrasi dan cara representasinya sebelum disebut perbedaan fisik.

**Batas.** Hasil ini menetapkan ketunggalan pada model deterministik ideal. Ia belum menjamin kestabilan terhadap gangguan atau tersedianya cara pengukuran fisik yang tepat.

## P07

**Pengurangan data tidak menambah keteridentifikasian struktural.**

**Premis.** Dua pengamatan berkaitan melalui:

\[
\mathcal O_2=K\circ\mathcal O_1.
\]

Artinya data kedua hanya hasil pemrosesan deterministik data pertama yang sama, tanpa masukan tambahan.

**Kesimpulan.** Jika suatu sifat dapat ditentukan dari \(\mathcal O_2\), sifat itu dapat ditentukan dari \(\mathcal O_1\). Sebaliknya tidak selalu.

**Bukti.** Jika \(\mathcal O_1(h_1)=\mathcal O_1(h_2)\), penerapan \(K\) menghasilkan data \(\mathcal O_2\) sama. Maka kelas yang digabung oleh \(\mathcal O_1\) tidak lebih besar daripada kelas yang digabung \(\mathcal O_2\). Setiap sifat yang konstan pada kelas lebih besar pasti konstan pada kelas lebih kecil.

Secara langsung, bila \(P=\widehat P_2\circ\mathcal O_2\), maka:

\[
P=(\widehat P_2\circ K)\circ\mathcal O_1.
\]

**Contoh kehilangan.** Untuk seluruh kelas riwayat pada garis, sifat \(P(h)=1\) bila \(q(0)\ne q(1)\), dan nol bila kedua posisi ujung sama, selalu dapat ditentukan dari \(\mathcal O_1(h)=(q(0),q(1))\). Jika \(K\) hanya menyimpan posisi awal, riwayat \(q(t)=t\) dan riwayat diam pada nol memberi keluaran sama tetapi nilai \(P\) berbeda. Jadi kebalikan implikasi teorema gagal.

Pada data \((0,1)\), sifat tersebut sekaligus membuktikan gerakan. Akan tetapi \(P=0\) tidak membuktikan diam karena riwayat dapat kembali ke titik awal. Sifat “ujung berbeda” tidak disamakan dengan seluruh pengertian “pernah bergerak”.

**Konsekuensi.** Pemrosesan ulang data yang tidak membedakan dua riwayat tidak dapat memaksa keduanya menjadi terbedakan. Model atau asumsi tambahan bisa mempersempit \(\mathcal H\), tetapi itu perubahan premis. Menambahkan sensor atau kondisi eksperimen juga bukan sekadar menerapkan \(K\) kepada data lama.

Hasil ini merupakan penalaran tentang pemetaan deterministik. Ia tidak diklaim sebagai pembuktian seluruh teorema informasi Shannon, optimalitas statistik, atau kinerja algoritma. Pemrosesan dapat mempermudah estimasi dan penyajian data bising; teorema ini sendiri tidak menilai kinerja suatu penaksir.

## P08

**Batas bawah panjang dari posisi dengan galat terbatas.**

**Premis tambahan.** \(q:[a,b]\to Q\) merupakan kurva kontinu dalam satu ruang metrik positif \((Q,d)\), dengan acuan dan satuan konsisten. Pada waktu tepat \(a=t_0<\cdots<t_n=b\), data posisi \(y_i\in Q\) memenuhi batas deterministik:

\[
d(y_i,q(t_i))\le\varepsilon_i,\qquad \varepsilon_i\ge0.
\]

Batas ini harus dibenarkan secara terpisah. Ia bukan otomatis interval kepastian dari suatu simpangan baku metrologis.

**Kesimpulan.** Untuk panjang kurva yang didefinisikan dengan supremum partisi:

\[
L(q)\ge
\sum_{i=1}^{n}
\max\{0,\ d(y_i,y_{i-1})-\varepsilon_i-\varepsilon_{i-1}\}.
\tag{4}
\]

**Bukti.** Ketaksamaan segitiga memberikan:

\[
d(y_i,y_{i-1})
\le \varepsilon_i+d(q(t_i),q(t_{i-1}))+\varepsilon_{i-1}.
\]

Karena jarak tidak negatif, tiap jarak sebenarnya minimal nilai maksimum pada (4). Jumlah jarak sebenarnya pada partisi tersebut tidak melebihi supremum semua partisi, yaitu \(L(q)\).

**Makna kesimpulan.** Jika ruas kanan positif, semua kurva yang memenuhi premis tidak konstan, walaupun kurva lengkap tetap tidak unik. Ini hubungan konkret antara geometri, ketidakpastian, dan keteridentifikasian sifat.

Jika \(L(q)\) hingga dan durasi \(b-a>0\) memang durasi yang dipakai, kelajuan rata-rata berbasis panjang memenuhi batas (4) dibagi \(b-a\). Kelajuan rata-rata ini berbeda dari vektor perpindahan dibagi waktu.

**Contoh.** Data satu dimensi \(y_0=0,y_1=3,y_2=0\) dengan galat masing-masing paling besar \(1/4\) memberi \(L(q)\ge5\), walaupun data posisi awal dan akhir sama. Dengan posisi tepat, batasnya menjadi 6. Angka memakai satuan konsisten atau besaran yang dinormalisasi.

**Batas.** Ruas kanan nol tidak membuktikan diam. Batas ini tidak selalu tajam dan tidak menentukan penyebab, arah lengkap, atau profil kecepatan. Tidak digunakan “jarak” Lorentzian sebagai pengganti metrik positif. Jika posisi pengamatan berasal dari acuan yang bergerak, relasinya harus diubah secara konsisten lebih dahulu menurut P01.

## P09

**Batas laju mempersempit gerakan tersembunyi, tanpa otomatis meniadakannya.**

**Premis tambahan.** Riwayat memenuhi batas Lipschitz:

\[
d(q(t),q(u))\le V|t-u|,\qquad V\ge0.
\]

Ini asumsi keteraturan dan batas perubahan dalam metrik yang dipilih. Ia tidak disimpulkan dari kontinuitas saja.

Jika \(q(a)=q(b)=x_0\), maka:

\[
d(q(t),x_0)
\le V\min\{t-a,b-t\}
\le\frac{V(b-a)}2.
\tag{5}
\]

**Bukti.** Terapkan batas Lipschitz terhadap ujung \(a\) dan ujung \(b\), lalu ambil batas yang lebih kecil.

Pada garis, kurva \(q(t)=x_0+V\min\{t-a,b-t\}\) mencapai batas puncak \(V(b-a)/2\). Kurva ini Lipschitz dan tidak konstan bila \(V>0\). Karena itu, dua posisi ujung sama dan batas laju positif tidak cukup membuktikan diam.

Untuk sampling seragam, contoh yang bahkan mulus adalah:

\[
q(t)=A\sin(2\pi t/\Delta),\qquad
0<|A|\le \frac{V\Delta}{2\pi}.
\]

Semua posisi pada \(t=n\Delta\) nol, tetapi riwayat berubah dan memenuhi \(|q'(t)|\le V\). Ini menghubungkan ambiguitas sampling Foundation dengan batas laju tambahan.

**Konsekuensi lain.** Bila ada dua data tepat dengan \(d(q(a),q(b))>V(b-a)\), data dan model batas laju tidak kompatibel. Kesimpulan yang sah adalah perlunya menilai ulang salah satu premis, bukan memilih riwayat yang melanggar semuanya.

Untuk \(V=0\), batas Lipschitz sendiri memaksa riwayat konstan. Dalam hal itu ketetapan mengikuti asumsi seluruh selang, bukan dari kecukupan dua rekaman semata.

## Ketunggalan belum berarti kestabilan

P06 membahas apakah jawaban tunggal tersedia dari data ideal. Pertanyaan berbeda adalah apakah perubahan kecil data hanya menghasilkan perubahan kecil kesimpulan.

Pemetaan injektif dapat memiliki invers yang sangat peka. Sebaliknya, reduksi tak injektif dapat tetap mempertahankan suatu sifat biner dengan andal bila seluruh kelas kompatibelnya menyetujui sifat itu.

P08 menggunakan batas galat eksplisit untuk satu jenis pembenaran yang lebih kuat. Ia tidak mengatasi semua bentuk gangguan, ketidakpastian identitas, proyeksi, ataupun kesalahan model. Perbedaan epistemik ini mempertahankan kehati-hatian yang sudah dibangun dalam [Evidence Foundation](../Foundation/Core/Evidence.md).
