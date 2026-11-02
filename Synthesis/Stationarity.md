# Stationarity

## Apa yang dinyatakan tetap?

Kata “stasioner” dapat menunjuk ketetapan keadaan, besaran terpilih, distribusi, statistik proses, atau representasi. Sebelum menarik kesimpulan tentang gerakan, objek dan jenis kesetaraan harus disebutkan.

Hubungan antara [State](../Foundation/Core/State.md), [Change](../Foundation/Core/Change.md), dan [Evidence](../Foundation/Core/Evidence.md) memungkinkan beberapa implikasi dipisahkan secara tepat.

## P10

**Ketetapan besaran yang diamati mengimplikasikan ketetapan keadaan hanya bila cukup membedakan.**

**Premis.** \(h:T\to S\), dan \(A:S\to Z\) tidak bergantung waktu. Bila \(A\) injektif pada citra riwayat \(h(T)\), maka:

\[
A(h(t))\text{ konstan}
\quad\Longrightarrow\quad
h(t)\text{ konstan}.
\]

**Bukti.** Untuk semua \(t,u\), kesamaan \(A(h(t))=A(h(u))\) dan keinjektifan pada citra memberi \(h(t)=h(u)\).

Sebaliknya, keadaan konstan selalu membuat \(A\circ h\) konstan. Untuk keluarga besaran \(A_i\), cukup bahwa keluarga itu memisahkan semua keadaan yang relevan; tidak perlu satu besaran skalar tunggal.

**Batas teori.** “Keadaan” dan keinjektifan harus dinilai setelah redundansi representasi ditentukan. Dalam kuantum, fungsi yang memetakan keadaan ke distribusi hasil tidak berarti semua observabel memiliki nilai pasti klasik.

**Hubungan dengan P06.** P10 adalah pemeriksaan pada lintasan keadaan terhadap besaran terpilih. P06 menilai suatu sifat pada seluruh riwayat yang kompatibel dengan data. Keduanya memakai kesetaraan keluaran, tetapi objek dan lingkup kuantifikasinya berbeda.

Jika \(A\) bergantung waktu, keadaan tetap pun dapat menghasilkan keluaran berubah. Misalnya \(h(t)=0\) dan \(A_t(x)=x+t\). Sebaliknya, \(h(t)=t\) dengan \(A_t(x)=x-t\) memberi keluaran tetap. Perubahan pengamatan karena itu harus memisahkan perubahan sistem dari perubahan pembanding atau prosedur.

## P11

**Densitas stasioner membatasi divergensi arus, bukan selalu arus itu sendiri.**

**Premis model tambahan.** Dalam domain dan acuan yang ditentukan, densitas \(\rho\) dan arus \(J\) cukup teratur dan memenuhi hukum konservasi tanpa sumber:

\[
\partial_t\rho+\nabla\cdot J=0.
\tag{6}
\]

Persamaan semacam ini muncul dengan makna berbeda dalam konservasi massa dan probabilitas. Bentuk konservasi massa dibahas pada [N03](Sources.md#n03), sedangkan bentuk kuantum diwarisi dari [F-S10](../Foundation/Research/Sources.md#s10).

**Kesimpulan.** Jika \(\partial_t\rho=0\), maka \(\nabla\cdot J=0\). Tidak mengikuti bahwa \(J=0\).

**Bukti dan contoh penyangkal.** Substitusi langsung ke (6) memberi divergensi nol. Pada lingkaran satu dimensi, arus konstan \(J(x)=J_0\ne0\) mempunyai \(\partial_xJ=0\) dan kompatibel dengan densitas tetap. Jadi implikasi menuju arus nol gagal.

**Peran syarat batas.** Pada interval terhubung satu dimensi, \(\partial_xJ=0\) membuat \(J\) konstan terhadap \(x\) pada setiap waktu. Jika ditambah arus nol pada satu ujung untuk setiap waktu dan kontinuitas hingga batas, maka konstanta itu nol di seluruh interval. Kesimpulan arus nol kini mengikuti densitas stasioner, konservasi, dan syarat batas bersama.

Kesimpulan terakhir tidak digeneralisasi ke semua domain berdimensi lebih tinggi: medan sirkulasi dapat berdivergensi nol serta memiliki fluks normal nol di batas tanpa menjadi nol di bagian dalam.

### Arus total nol masih bukan diamnya setiap bagian

Pada lingkaran, dua komponen material homogen dapat mempunyai densitas \(\rho_0/2\), kecepatan \(+u\) dan \(-u\), dengan \(\rho_0>0,u\ne0\). Arus masing-masing adalah \(\rho_0u/2\) dan \(-\rho_0u/2\). Arus total nol, tetapi kedua komponen bergerak.

Ini contoh kinematis dua komponen tanpa kesimpulan tentang interaksi atau kestabilan dinamikanya. Untuk satu medium yang benar-benar dideskripsikan oleh hubungan tunggal \(J=\rho v\) dengan \(\rho>0\), \(J=0\) memang memberi \(v=0\). Hubungan konstitutif tunggal itu tidak boleh dipakai tanpa menyebut premisnya pada campuran atau arus probabilitas.

### Hubungan dengan keadaan kuantum pada lingkaran

Untuk model bebas pada lingkaran panjang \(L>0\):

\[
\psi_n(x,t)=L^{-1/2}e^{i(k_nx-\omega_nt)},\qquad
k_n=\frac{2\pi n}{L},\quad
\omega_n=\frac{\hbar k_n^2}{2m}.
\]

Dengan \(m>0,n\in\mathbb Z\), perhitungan dalam Foundation memberi \(|\psi_n|^2=1/L\) dan \(j_n=\hbar k_n/(mL)\). Keadaan \(n\) dan \(-n\), untuk \(n\ne0\), mempunyai densitas sama tetapi arus berlawanan.

Maka densitas posisi tidak cukup membedakan keadaan tersebut; kesimpulan tentang arah arus tidak memfaktor melalui densitas saja, sesuai P04. Ini menghubungkan perhitungan kuantum dengan kriteria kecukupan deskripsi, tanpa menyatakan arus probabilitas adalah arus material klasik.

## P12

**Statistik yang stasioner tidak mengharuskan riwayat individual konstan.**

**Premis contoh probabilistik.** Ambil \(A\ne0,\omega\ne0\), dan fase acak \(\Theta\) yang seragam pada \([0,2\pi)\). Definisikan:

\[
X(t)=A\cos(\omega t+\Theta).
\]

“Stasioner ketat” di sini berarti distribusi bersama pada setiap kumpulan waktu hingga tidak berubah setelah semua waktu digeser dengan selang sama.

**Bukti stasioner.** Untuk waktu \(t_1,\ldots,t_n\) dan pergeseran \(s\):

\[
(X(t_1+s),\ldots,X(t_n+s))
=\bigl(A\cos(\omega t_i+\Theta+\omega s)\bigr)_{i=1}^n.
\]

Variabel \((\Theta+\omega s)\bmod2\pi\) tetap seragam. Maka distribusi bersama ruas kanan sama dengan distribusi pada \(t_1,\ldots,t_n\).

**Bukti riwayat tidak konstan.** Untuk fase tetap mana pun, \(t\mapsto A\cos(\omega t+\Theta)\) tidak konstan pada interval terbuka yang tidak kosong. Turunannya \(-A\omega\sin(\omega t+\Theta)\) tidak identik nol di interval tersebut.

**Konsekuensi.** Bahkan ketetapan seluruh distribusi bersama terhadap pergeseran waktu berbeda dari ketetapan satu realisasi. Ketetapan distribusi satu saat saja merupakan syarat yang lebih lemah lagi.

Fase acak seragam merupakan premis contoh, bukan sifat yang diturunkan dari enam fondasi. Tidak ditarik kesimpulan bahwa semua gerakan fisik bersifat acak, bahwa proses ini ergodik untuk setiap pilihan pengamatan waktu, atau bahwa pengamat selalu mengetahui distribusinya tepat.

## P13

**Kesetaraan keadaan sesaat belum menjamin persamaan evolusi tetap berbentuk sama.**

**Premis model tambahan.** Dalam gambaran Schrödinger:

\[
i\hbar\partial_t\psi=H\psi,
\]

dan definisikan \(\psi'(t)=e^{i\theta(t)}\psi(t)\), dengan fase global real yang terdiferensialkan. Fungsi keadaan dan operator diasumsikan berada pada domain yang membuat diferensiasi serta operasi tertulis sah.

Pada setiap waktu, \(\psi'\) dan \(\psi\) mewakili ray keadaan murni yang sama menurut [F-S09](../Foundation/Research/Sources.md#s09).

**Penurunan.**

\[
i\hbar\partial_t\psi'
=-\hbar\dot\theta\,\psi'+H\psi'
=H'\psi',\qquad
H'=H-\hbar\dot\theta I.
\]

Di sini fase global merupakan kelipatan identitas sehingga komutasi dengan \(H\) tidak menambahkan suku lain.

**Kesimpulan.** Pergantian representasi yang bergantung waktu harus diikuti transformasi generator yang sesuai. Untuk fase berubah, tidak sah begitu saja menyatakan \(\psi'\) memenuhi persamaan dengan \(H\) yang persis sama. Untuk fase konstan, suku tambahan nol.

Hasil ini sejalan dengan suku tambahan akibat acuan berubah dalam P01–P02, tetapi kesamaan pola diferensial tidak menyatakan basis spasial dan fase kuantum merupakan hal fisik yang sama.

## Ketetapan mempunyai beberapa tingkat

P10 menyatakan syarat ketika observabel tetap cukup untuk keadaan tetap. P11 menunjukkan informasi arus yang tidak ditentukan densitas serta pengaruh syarat batas. P12 membedakan hukum probabilitas dari realisasi. P13 membedakan kesetaraan ray dari konsistensi generator dalam representasi.

Tidak ada satu urutan sederhana “semakin stasioner berarti semakin diam” yang menyamakan semuanya. Kesimpulan yang tepat selalu menyebut objek, acuan, kesetaraan, dan struktur hukum yang dipakai.
