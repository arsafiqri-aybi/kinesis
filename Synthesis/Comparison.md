# Comparison

## Perbandingan mendahului klaim ketetapan

Menyatakan konfigurasi pada dua waktu “sama” memerlukan aturan menghubungkan konteks tersebut. Angka koordinat yang sama belum cukup, sebab asal atau basis dapat berubah. Sebaliknya, angka berbeda belum menetapkan perubahan fisik bila labelnya diganti.

[Reference](../Foundation/Core/Reference.md) menyajikan konfigurasi \(q_t\in Q_t\) dan pemetaan pembanding \(F_t:Q_t\to Q_R\). [State](../Foundation/Core/State.md) menetapkan peran kesetaraan; [Time](../Foundation/Core/Time.md) membedakan waktu dan parameter. Hubungannya menghasilkan syarat konsistensi berikut.

## P01

**Kovariansi aturan perbandingan.**

**Premis.** Untuk setiap \(t\), diberikan bijeksi representasi \(f_t:Q_t\to Q'_t\), konfigurasi \(q_t\), dan aturan pembanding \(F_t\). Semua pemetaan berlaku pada bagian domain yang dibicarakan. Definisikan:

\[
q'_t=f_t(q_t),\qquad F'_t=F_t\circ f_t^{-1}.
\]

**Kesimpulan.**

\[
F'_t(q'_t)=F_t(q_t).
\]

**Bukti.** Substitusi memberi \(F_t(f_t^{-1}(f_t(q_t)))=F_t(q_t)\). Karena riwayat hasil perbandingan identik pada setiap konteks, ketetapan, perbedaan ujung, dan sifat lain dari riwayat pembanding itu tetap sama.

Ini hasil aljabar pemetaan. Kontinuitas atau diferensiabilitas belum diperlukan. Jika sifat tersebut juga hendak dipertahankan dalam koordinat, transformasi harus cocok dengan struktur tambahan itu.

**Contoh.** Pada garis dengan waktu bersama, posisi benda \(q(t)=t\) dan acuan tetap mempunyai \(F_t(x)=x\). Ganti koordinat menjadi \(x'=x-t\). Koordinat benda kini \(q'(t)=0\), tetapi aturan pembanding yang sama menjadi \(F'_t(x')=x'+t\). Maka \(F'_t(q'(t))=t\): pernyataan terhadap acuan semula tetap menunjukkan perubahan.

Jika setelah pergantian koordinat digunakan \(G'_t(x')=x'\), yang dibandingkan sudah berbeda: acuan baru mengikuti asal bergerak. Hasil yang tetap bukan kontradiksi P01 karena aturan pembanding fisiknya telah berubah.

**Konsekuensi konseptual.** Predikat gerakan relatif berkaitan dengan keadaan **bersama acuan dan aturan perbandingan**, bukan semata dengan perubahan angka koordinat objek. Ini tidak menyatakan bahwa setiap keluarga \(F_t\) dapat diwujudkan menjadi alat fisik atau bahwa satu pembanding global tersedia dalam semua ruang-waktu.

## P02

**Pelestarian sifat memerlukan struktur yang sesuai.**

Misalkan \(h:T\to Q\), \(f:Q\to Q'\) tidak bergantung waktu, dan \(\phi:T'\to T\). Riwayat baru adalah:

\[
\widetilde h=f\circ h\circ\phi.
\]

| Sifat yang dibicarakan | Syarat cukup untuk pelestarian dua arah |
| --- | --- |
| Konstan atau tidak konstan | \(f\) injektif pada citra yang relevan dan \(\phi\) surjektif ke domain riwayat |
| Urutan penelusuran | Ditambah struktur urutan dan \(\phi\) bijektif meningkat |
| Kontinuitas | Homeomorfisme pada ruang dan domain yang relevan |
| Keberadaan struktur turunan yang setara | Difeomorfisme yang sesuai pada ruang dan parameter |
| Nolnya vektor turunan pada titik bersesuaian | Turunan \(Df\) injektif dan \(\phi'\ne0\), beserta keterdiferensialan |
| Panjang kurva bernilai sama | Misalnya \(f\) isometri dan reparameterisasi interval bijektif meningkat |

Homeomorfisme adalah bijeksi kontinu dengan invers kontinu. Difeomorfisme adalah bijeksi mulus dengan invers mulus pada struktur yang dibandingkan; syarat lokal pada titik dapat lebih lemah bila hanya satu turunan yang dibicarakan.

Baris-baris itu bukan satu rantai syarat yang selalu wajib seluruhnya. Isometri, misalnya, merupakan syarat cukup yang lebih kuat daripada yang diperlukan untuk satu kurva tertentu.

**Bukti ketetapan.** Jika \(h\) konstan, komposisi tetap konstan. Sebaliknya, bila \(f(h(\phi(u)))\) konstan, keinjektifan \(f\) memberi ketetapan \(h(\phi(u))\). Kesurjektifan \(\phi\) menjangkau semua nilai \(h(t)\); karena itu \(h\) konstan.

Kesurjektifan penting. Jika pengamatan hanya mencakup subselang tempat benda diam, ketetapan subselang tidak menyatakan riwayat lengkap konstan.

**Bukti untuk turunan.** Pada koordinat mulus:

\[
\frac{d\widetilde h}{d\lambda}
=Df_{h(\phi(\lambda))}
\left(\frac{dh}{dt}\bigg|_{t=\phi(\lambda)}\right)\phi'(\lambda).
\]

Jika \(\phi'\ne0\) dan \(Df\) injektif, ruas kanan nol tepat bila \(dh/dt=0\) pada titik bersesuaian. Ini tidak menyamakan nilai numerik kelajuan; norma dan satuan dapat ikut berubah.

**Bukti panjang.** Untuk isometri, tiap jarak pada penjumlahan partisi tetap sama. Reparameterisasi interval bijektif meningkat memasangkan partisi kedua domain. Supremum semua penjumlahan karena itu sama.

**Contoh penyangkal yang menyatukan Time dan Reference.** Ambil \(h(t)=t\).

- Pemetaan koordinat \(f(x)=x^3\) bijektif dan homeomorfik di garis, tetapi inversnya tidak terdiferensialkan di nol. Riwayat \(f(h(t))=t^3\) memiliki turunan nol di nol, sedangkan \(h'(0)=1\).
- Reparameterisasi \(t=\lambda^3\) juga bijektif meningkat, tetapi \(\phi'(0)=0\). Riwayat baru \(\lambda^3\) mempunyai laju nol di nol tanpa menjadi konstan pada suatu selang.

Kedua contoh mempertahankan ketidakkonstanan dan kontinuitas. Keduanya gagal mempertahankan kriteria laju nol karena syarat regularitas tidak dipenuhi. Koordinat kubik bukan chart mulus yang kompatibel di nol untuk struktur diferensial standar garis.

**Batas fisik.** Penggantian parameter formal tidak membuktikan bahwa sebuah jam fisik dapat melaksanakan pembacaan tersebut dengan seluruh sifat yang diminta. Penilaian itu memerlukan model jam. Dasar konsep diferensial dan waktu fisik dirujukkan pada [F-S06](../Foundation/Research/Sources.md#s06) dan struktur topologi pada [F-S07](../Foundation/Research/Sources.md#s07).

## P03

**Ketetapan pada urutan parsial tidak sama dengan perbandingan semua pasangan.**

**Premis.** \(T\) dilengkapi orde parsial \(\preceq\), \(Q\) mempunyai kesamaan biasa, dan \(h:T\to Q\). Anggap \(h(t)=h(u)\) setiap kali \(t\) dan \(u\) dapat dibandingkan.

Bentuk relasi \(t\approx u\) bila terdapat urutan hingga \(t=t_0,\ldots,t_n=u\) dengan setiap pasangan bertetangga dapat dibandingkan dalam salah satu arah.

**Kesimpulan.** \(h\) konstan pada setiap kelas \(\approx\). Jika hanya ada satu kelas, \(h\) konstan di seluruh \(T\).

**Bukti.** Kesamaan berlaku pada tiap langkah. Transitifnya kesamaan memberikan \(h(t_0)=h(t_n)\). Relasi \(\approx\) refleksif, simetris melalui pembalikan urutan, dan transitif melalui penyambungan urutan, sehingga benar membentuk kelas.

**Batas.** Bila ada dua komponen yang tidak dihubungkan oleh urutan seperti itu, nilai pada keduanya dapat berbeda tanpa melanggar premis.

Contoh paling kecil adalah dua elemen tidak sebanding \(a,b\) dengan \(h(a)=0,h(b)=1\). Ketidakkonstanan sebagai fungsi ada, tetapi belum ada perubahan yang terurut dari \(a\) menuju \(b\). Sebaliknya, pada bentuk bercabang \(a\preceq b\) dan \(a\preceq c\), premis memaksa ketiga nilai sama melalui \(a\), walaupun \(b,c\) tidak sebanding.

**Makna ilmiah.** Untuk domain parsial, penggunaan “ada dua nilai berbeda” sebagai perubahan temporal membutuhkan penjelasan konteks perbandingan. Pada penugasan nilai medan ke kejadian, dua nilai berbeda di lokasi spacelike tidak otomatis menggambarkan satu benda yang berpindah.

Hasil ini matematis. Ia tidak membuktikan bahwa relasi kausal selalu orde parsial, bahwa seluruh kejadian dapat diletakkan pada satu riwayat benda, atau bahwa identitas material muncul dari orde. Pembatasan kausal dan waktu proper tetap mengikuti [Time](../Foundation/Core/Time.md).

## Yang dapat disederhanakan

Koordinat, parameter, dan pengelompokan keadaan dapat sama-sama dipandang sebagai pemetaan, tetapi sifat yang harus dipertahankan berbeda. Penjelasan tidak memerlukan enam jenis substansi yang terpisah; ia memerlukan pembedaan tugas matematis dan fisik yang dilakukan masing-masing struktur.

P01 menjelaskan konsistensi perbandingan. P02 menetapkan syarat pelestarian sifat. P03 membatasi penafsiran temporal ketika urutannya tidak total. Ketiganya tidak menurunkan geometri atau dinamika fisik dari sekadar keberadaan fungsi.
