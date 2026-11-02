# Evidence

## Gerakan dan pengetahuan tentang gerakan

Suatu riwayat dapat didefinisikan secara matematis tanpa pengamat. Pernyataan empiris bahwa suatu gerakan terjadi memerlukan bukti dan hubungan yang dapat dipertanggungjawabkan antara bukti tersebut dengan riwayat.

Empat lapisan perlu dibedakan:

| Lapisan | Isi |
| --- | --- |
| Kejadian yang dimodelkan | Keadaan dan hubungan fisik yang diasumsikan |
| Observasi | Hasil interaksi sistem dengan prosedur atau perangkat pengamatan |
| Inferensi | Kesimpulan tentang riwayat berdasarkan data dan asumsi |
| Persepsi | Pengalaman atau penilaian gerakan oleh sistem perseptual |

Lapisan itu berhubungan, tetapi tidak saling identik. Kesamaan pengalaman tidak membuktikan kesamaan penyebab fisik; kesamaan satu pengukuran tidak membuktikan kesamaan seluruh keadaan.

## Relasi observasi

Dalam model sederhana:

\[
y_i=H_i(s(t_i),\eta_i),
\]

dengan \(H_i\) relasi pengamatan dan \(\eta_i\) kondisi yang mencakup gangguan, kalibrasi, atau keadaan pengamat. Bentuk deterministik ini bukan syarat semua pengukuran; model dapat memberi distribusi probabilitas hasil.

Tidak setiap catatan berasal dari satu saat ideal. Paparan selama selang, misalnya, dapat melibatkan rata-rata:

\[
y_i=\frac1{\Delta}\int_{t_i}^{t_i+\Delta}
H(s(t))\,dt.
\]

Persamaan tersebut merupakan contoh struktur observasi, bukan hukum umum instrumen. Ia memperlihatkan mengapa data yang sama dapat menggabungkan informasi beberapa saat.

Dalam metrologi, measurand adalah besaran yang hendak diukur. Hasil dan ketidakpastian pengukuran perlu dibedakan dari nilai yang tidak diketahui secara tepat. Ketidakpastian tidak identik dengan satu galat yang nilainya sudah diketahui. [S18](../Research/Sources.md#s18)

## Keteridentifikasian

Misalkan \(\mathcal H\) himpunan riwayat yang diizinkan asumsi dan \(\mathcal O:\mathcal H\to Y\) pemetaan observasi. Untuk data \(y\), riwayat yang kompatibel berada dalam:

\[
\mathcal H_y=\{h\in\mathcal H:\mathcal O(h)=y\}.
\]

Sifat \(P\), misalnya “bergerak terhadap acuan R selama selang I”, dapat diidentifikasi dari data ideal bila semua riwayat di \(\mathcal H_y\) mempunyai nilai \(P\) sama.

**Hasil langsung.** Jika ada \(h_1,h_2\in\mathcal H_y\) dengan \(P(h_1)\ne P(h_2)\), data itu tidak cukup menentukan \(P\). Tidak ada pengurangan gangguan numerik yang sendirian dapat memperbaiki ketidakunikan struktural ini.

Sebaliknya, tidak semua perbedaan riwayat harus diidentifikasi untuk mengetahui satu sifat. Dua riwayat dapat berbeda detail tetapi keduanya pasti bergerak. Keteridentifikasian selalu terkait pertanyaan tertentu.

Dalam model probabilistik, kesetaraan observasional dapat berarti distribusi data sama. Masalah ketunggalan model dibedakan dari keterbatasan jumlah sampel.

## Sampel yang sama, riwayat berbeda

Ambil waktu sampel \(t_n=n\Delta\), \(\Delta>0\), dan:

\[
q_1(t)=0,\qquad
q_2(t)=A\sin\left(\frac{2\pi t}{\Delta}\right),\quad A\ne0.
\]

Semua sampel memenuhi \(q_1(t_n)=q_2(t_n)=0\), padahal riwayat kedua tidak konstan. Maka sampel posisi yang sama tidak membuktikan diam di antara sampel, bahkan bila kedua riwayat kontinu dan mulus.

Teorema sampling memberikan ketunggalan rekonstruksi pada kelas fungsi dengan batas frekuensi serta syarat sampling ideal yang sesuai. Teorema itu tidak menyatakan bahwa rekaman berhingga tanpa batasan model menentukan sembarang riwayat fisik. [S15](../Research/Sources.md#s15)

Contoh sinus di atas sengaja berada di luar jaminan rekonstruksi ketika frekuensinya tidak dibatasi cukup rendah. Tidak ada pertentangan antara contoh ambiguitas dan teorema bersyarat.

## Identitas dan proyeksi

Untuk dua titik klasik yang labelnya tidak diamati, bandingkan:

\[
h_1(t)=(t,-t),\qquad
h_2(t)=(|t|,-|t|).
\]

Pasangan terurut berbeda pada sebagian waktu. Namun, himpunan posisi tidak berlabel sama: \(\{t,-t\}=\{|t|,-|t|\}\). Data semacam itu tidak menentukan apakah label melewati satu sama lain atau kembali.

Asumsi tentang keteraturan kecepatan, interaksi, atau penandaan material dapat membatasi pilihan. Pembatasan itu harus disebutkan sebagai tambahan, bukan sebagai informasi yang sudah terkandung dalam posisi tak berlabel. Contoh ini bersifat klasik; ia bukan model pertukaran partikel kuantum.

Proyeksi juga menghapus informasi. Dalam kamera perspektif ideal:

\[
(u,v)=\left(f\frac{x}{z},f\frac{y}{z}\right),\quad z\ne0.
\]

Mengalikan \((x,y,z)\) dengan faktor positif sama mempertahankan \((u,v)\). Satu posisi citra karena itu tidak menentukan kedalaman secara tunggal. Riwayat citra pun memerlukan informasi tambahan untuk memisahkan gerak objek, acuan kamera, dan perubahan struktur tiga dimensi.

## Perubahan stimulus dan gerakan pola

Untuk intensitas citra \(I(x,y,t)\) yang diasumsikan tetap sepanjang lintasan pola terdiferensialkan, aturan rantai memberi:

\[
I_xu+I_yv+I_t=0.
\]

Ini satu persamaan dengan dua komponen gerak \((u,v)\). Di lokasi dengan gradien spasial bukan nol, hanya proyeksi tertentu yang dibatasi. Keterbatasan lokal ini merupakan inti aperture problem dalam model tersebut. [S13](../Research/Sources.md#s13)

Penurunan persamaan bergantung pada asumsi ketetapan intensitas sepanjang pola. Perubahan pencahayaan, penghalangan, atau perubahan pola dapat menggagalkan asumsi. Penggunaan contoh ini hanya menjelaskan batas informasi lokal; tidak diperlukan algoritma estimasi tertentu.

## Persepsi gerakan

**Hasil empiris dalam kondisi tertentu.** Eksperimen Adelson dan Movshon memperlihatkan ambiguitas arah pada grating yang dilihat melalui aperture serta perubahan koherensi perseptual ketika dua grating digabung. Koherensi dipengaruhi sifat stimulus seperti kontras dan frekuensi spasial. [S14](../Research/Sources.md#s14)

Hasil tersebut membatasi penyamaan gerakan yang dipersepsikan dengan satu komponen stimulus lokal. Pemilihan satu penjelasan neuronal lengkap tetap memerlukan bukti lebih lanjut; uraian mekanisme yang diajukan suatu penelitian tidak otomatis menjadi definisi semua persepsi gerakan.

Pada eksperimen lain, perhatian dapat memengaruhi gerakan tampak yang dilaporkan dari stimulus tertentu. Temuan ini mendukung pembedaan antara pola stimulus dan interpretasi gerak; ia tidak berarti semua gerakan perseptual diciptakan bebas oleh perhatian. [S21](../Research/Sources.md#s21)

Gerakan fisik dan pengalaman gerakan karena itu memiliki hubungan ilmiah yang perlu diselidiki, bukan identitas definisional yang dapat diasumsikan sejak awal.

## Ketidakpastian dan ketidakunikan

Ketidakpastian nilai dan ketidakunikan penjelasan merupakan masalah berbeda. Data sangat presisi tetap dapat kompatibel dengan banyak riwayat jika pemetaan observasi tidak injektif. Sebaliknya, model yang teridentifikasi secara ideal dapat sulit diestimasi dari data bising.

**Contoh matematis.** Bila posisi pada dua waktu masing-masing memiliki galat terbatas \(|e_i|\le\varepsilon\), selisih posisi terbagi selang waktu \(\Delta t\) memiliki kontribusi galat paling besar:

\[
\left|\frac{e_2-e_1}{\Delta t}\right|
\le\frac{2\varepsilon}{|\Delta t|}.
\]

Kesimpulan ini mengasumsikan waktu diketahui tepat dan model galat batas tersebut benar. Ia tidak merupakan rumus umum ketidakpastian kecepatan. Namun, ia memperlihatkan mengapa laju hasil diferensiasi dapat lebih sensitif daripada pengamatan posisi.

## Kedudukan fundamental

Evidence menyediakan dasar epistemik untuk membedakan:

- Apa yang diamati.
- Apa yang mengikuti secara matematis.
- Apa yang disimpulkan menggunakan asumsi model.
- Apa yang tetap tidak dapat dibedakan oleh data tersedia.

Tidak teramatinya perubahan tidak dengan sendirinya membuktikan tidak adanya gerakan. Teramatinya perubahan juga tidak dengan sendirinya menetapkan satu identitas, acuan, atau mekanisme gerak. Kekuatan kesimpulan ditentukan oleh relasi observasi dan kelas kemungkinan yang memang diuji.
