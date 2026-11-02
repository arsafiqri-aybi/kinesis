# Change

## Perubahan dan gerakan

**Definisi bersyarat.** Untuk domain temporal \(T\), ruang keadaan \(S\), serta aturan kesamaan yang tetap ditentukan, riwayat adalah pengaitan \(s:T\to S\). Riwayat tidak konstan bila terdapat \(t_1,t_2\in T\) sehingga \(s(t_1)\ne s(t_2)\).

Ini memberikan pengertian formal perubahan, bukan teori penyebab perubahan. Untuk menyebutnya **gerakan spasial**, bagian yang berubah harus mempunyai makna posisi, orientasi, atau susunan spasial terhadap acuan yang disebutkan.

Perubahan temperatur tidak otomatis perpindahan. Perubahan konfigurasi klasik tidak selalu mencakup seluruh evolusi keadaan kuantum. Gerakan pola, pengangkutan material, dan persepsi gerakan juga perlu dibedakan. Kata “gerakan” boleh dipakai lebih luas, asalkan perluasan maknanya dinyatakan.

## Riwayat tidak ditentukan oleh keadaan ujung

Ambil \(T=[0,1]\) dan:

\[
q_0(t)=0,\qquad q_1(t)=t(1-t).
\]

Keduanya memiliki \(q(0)=q(1)=0\), tetapi hanya \(q_0\) konstan. Jadi kesamaan keadaan awal dan akhir tidak menyiratkan tiadanya perubahan di antara keduanya.

Bahkan dua riwayat yang melewati himpunan titik sama dapat berbeda urutan atau pengulangan. Kurva geometris sebagai himpunan \(q(T)\) tidak memuat seluruh informasi riwayat berparameter.

**Hasil langsung.** Penghapusan parameter dapat menghapus informasi kapan, seberapa cepat, dan berapa kali suatu konfigurasi dilalui. Karena itu, lintasan geometris, riwayat temporal, dan catatan pengamatan bukan objek yang identik.

## Kontinuitas adalah struktur tambahan

**Definisi matematis.** Jika \(T\) dan \(Q\) ruang topologis, \(q:T\to Q\) kontinu bila prabayang setiap himpunan terbuka di \(Q\) terbuka di \(T\). Definisi ini tidak memerlukan angka kecepatan atau satuan jarak. [S07](../Research/Sources.md#s07)

Untuk ruang metrik, kontinuitas pada \(t_0\) dapat ditulis:

\[
\forall\varepsilon>0\ \exists\delta>0:
d_T(t,t_0)<\delta
\Longrightarrow
d_Q(q(t),q(t_0))<\varepsilon.
\]

Pernyataan itu membatasi hubungan kedekatan. Ia tidak menetapkan bahwa semua riwayat fisik harus kontinu, bahwa waktu harus kontinu, atau bahwa kecepatan harus ada.

Riwayat diskret \(q:\mathbb Z\to Q\) tetap dapat membedakan urutan konfigurasi. Kontinuitas pada domain diskret tidak memaksakan perilaku di antara label yang tidak termasuk domain.

**Hasil matematis dengan bukti.** Jika \(T\) tidak kosong dan terhubung serta \(Q\) diskret secara topologis, setiap \(q:T\to Q\) kontinu harus konstan. Citra kontinu himpunan terhubung harus terhubung; bagian terhubung ruang diskret hanya memuat paling banyak satu titik. Maka citra \(q\) satu titik.

Implikasinya terbatas: gabungan asumsi waktu terhubung, keadaan diskret, dan kontinuitas biasa menghalangi perubahan nonkonstan. Hasil itu tidak membuktikan alam mustahil diskret. Salah satu asumsi atau definisi kontinuitas dapat berbeda dalam teori yang dipilih.

## Diferensiabilitas dan laju lokal

Dalam ruang vektor dengan parameter real:

\[
\dot q(t_0)=
\lim_{h\to0}\frac{q(t_0+h)-q(t_0)}{h},
\]

jika limit ada. Pada manifold mulus, turunan kurva adalah vektor singgung di titik \(q(t_0)\). Pengurangan titik manifold sembarang tidak dipakai sebagai definisi global.

Turunan memerlukan lebih banyak struktur daripada sekadar perbedaan keadaan. Diferensiabilitas mengimplikasikan kontinuitas, tetapi tidak sebaliknya. Contoh elementer \(q(t)=|t|\) kontinu dan tidak terdiferensialkan di nol.

Pada model Brownian standar terdapat versi dengan lintasan kontinu yang hampir pasti tidak terdiferensialkan di titik mana pun. Ini hasil model probabilitas, bukan pernyataan bahwa partikel fisik pada semua skala benar-benar memiliki lintasan Brownian ideal. [S08](../Research/Sources.md#s08)

Karena itu, kecepatan klasik yang terdefinisi pada setiap saat bukan syarat universal semua pengertian gerakan.

## Diam pada selang dan laju nol sesaat

Dalam model konfigurasi dengan acuan tetap, diam pada selang \(I\) berarti \(q|_I\) konstan. Hal ini berbeda dari \(\dot q(t_0)=0\) pada satu saat.

Ambil:

\[
q(t)=t^3,\qquad \dot q(0)=0.
\]

Riwayat berubah pada setiap lingkungan terbuka nol walaupun laju sesaat nol. Maka nolnya kecepatan sesaat tidak cukup untuk menyatakan diam sepanjang suatu selang.

**Hasil matematis.** Jika \(q:I\to\mathbb R^n\) terdiferensialkan pada interval terbuka terhubung \(I\) dan \(\dot q(t)=0\) untuk semua \(t\in I\), maka \(q\) konstan di \(I\). Terapkan teorema nilai rata-rata pada setiap komponen antara dua titik interval.

Syarat “terdiferensialkan pada semua titik” tidak boleh diam-diam diganti “turunan nol hampir di mana-mana”. Tanpa syarat keteraturan tambahan, seperti kontinuitas absolut untuk konteks yang sesuai, implikasinya dapat gagal.

Pernyataan mengenai gerakan sesaat dengan demikian menggunakan struktur suatu riwayat atau limit di sekitar saat itu. Satu posisi terisolasi tidak menyediakan seluruh informasi tersebut.

## Perpindahan, panjang, dan kelajuan

Dalam ruang Euclidean, perpindahan ujung \(\Delta\mathbf r=\mathbf r(b)-\mathbf r(a)\) berbeda dari panjang jalan.

Pada ruang metrik, panjang kurva dapat didefinisikan:

\[
L(q)=\sup_{\mathcal P}
\sum_{i=1}^n d(q(t_i),q(t_{i-1})),
\quad
a=t_0<\cdots<t_n=b.
\]

Ketaksamaan segitiga langsung memberi:

\[
d(q(a),q(b))\le L(q).
\]

Kurva yang kembali ke titik awal dapat mempunyai panjang positif. Panjang juga dapat tak hingga; kontinuitas sendiri tidak menjamin panjang hingga.

Jika struktur dan keteraturan memadai, kelajuan dapat dikaitkan dengan norma vektor singgung. Ada pula turunan metrik:

\[
|\dot q|(t)=
\lim_{h\to0}\frac{d(q(t+h),q(t))}{|h|},
\]

jika limit ada. Definisi ini tidak sama dengan vektor kecepatan: ia memberi besar laju tanpa arah vektor. Metrik dan parameter tetap bagian asumsi.

## Kinematika dan dinamika

Kinematika menyatakan bagaimana gerakan dideskripsikan. Dinamika membatasi riwayat melalui hukum suatu teori. Menentukan \(q(t)\) yang mungkin secara matematis belum menentukan bahwa gerakan itu terjadi, diizinkan secara fisik, atau disebabkan gaya tertentu.

Dalam mekanika Newtonian, \(F=ma\) memerlukan pengertian massa, gaya, kerangka inersial, dan keteraturan yang sesuai. Ia tidak merupakan definisi gerakan. Dalam teori lain, struktur hukum dan keadaan berbeda. [S04](../Research/Sources.md#s04)

Determinisme juga bukan akibat definisi riwayat. Sebuah riwayat dapat diketahui setelah kejadian, sementara model prediksinya stokastik. Persamaan evolusi deterministik sendiri memerlukan syarat keberadaan dan ketunggalan solusi; menuliskan persamaan tidak membuktikan semua syaratnya terpenuhi.

## Batas lintasan klasik dalam teori kuantum

Dalam teori kuantum standar, perubahan distribusi probabilitas dan arus probabilitas tidak boleh langsung disamakan dengan lintasan posisi pasti partikel individual.

Untuk Hamiltonian bebas satu dimensi tanpa potensial vektor:

\[
\rho=|\psi|^2,\qquad
j=\frac{\hbar}{m}\operatorname{Im}
\left(\psi^*\partial_x\psi\right),
\qquad
\partial_t\rho+\partial_xj=0.
\]

Persamaan kontinuitas menyatakan hubungan lokal antara perubahan densitas probabilitas dan arus, bukan tambahan asumsi lintasan individual. [S10](../Research/Sources.md#s10)

Pada lingkaran panjang \(L>0\) dengan massa \(m>0\), ambil keadaan ternormalisasi:

\[
\psi(x,t)=\frac1{\sqrt L}
e^{i(kx-\omega t)},\qquad
k=\frac{2\pi n}{L},\quad n\in\mathbb Z,\quad
\hbar\omega=\frac{\hbar^2k^2}{2m}.
\]

Substitusi langsung menghasilkan \(\rho=1/L\) tetap dan \(j=\hbar k/(mL)\), yang tidak nol jika \(n\ne0\). Keadaan ini menunjukkan bahwa densitas posisi stasioner tidak cukup untuk menyimpulkan semua besaran yang berkaitan dengan gerak nol. Konteks partikel pada lingkaran dan keadaan stasioner dibahas dalam [S11](../Research/Sources.md#s11).

Dalam gambaran Schrödinger, fase global evolusi keadaan eigenenergi juga tidak mengubah ray keadaan murninya. Kesimpulan tentang “bergerak” harus menyebut apakah yang dibandingkan adalah ray, densitas posisi, arus, observabel, atau lintasan dalam interpretasi tertentu.

## Kedudukan fundamental

Fondasi Change adalah riwayat perbedaan yang dibaca menurut struktur temporal, spasial, dan acuan yang jelas. Kontinuitas, laju, panjang, serta hukum evolusi ditambahkan hanya bila struktur pendukungnya tersedia.

Tidak ada satu uji “koordinat berubah” yang mencakup seluruh kasus tanpa menyebut kerangka. Justru kejernihan tentang apa yang berubah, terhadap apa, dalam pengertian apa, dan dengan asumsi apa merupakan inti pengertian gerakan.
