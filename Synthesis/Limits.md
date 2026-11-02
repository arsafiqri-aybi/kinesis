# Limits

## Hubungan ilmiah mempunyai kekuatan yang berbeda

Menghubungkan konsep tidak sama dengan menurunkan kesimpulan. Peran hubungan menentukan jenis pembenaran yang tersedia:

| Jenis hubungan | Yang membenarkan penggunaannya | Yang tidak mengikuti sendirinya |
| --- | --- | --- |
| Definisional | Istilah digunakan menurut definisi yang sama | Hubungan sebab fisik |
| Implikasi matematis | Semua premis teorema dipenuhi dalam satu struktur | Keberadaan struktur itu di alam |
| Ketergantungan representasi | Sebuah konstruksi memerlukan struktur tertentu | Prioritas ontologis struktur tersebut |
| Pembatasan empiris | Data, model observasi, dan domain eksperimen | Universalitas tanpa batas domain |
| Penafsiran konseptual | Argumen yang menjelaskan suatu pembedaan | Status teorema atau temuan empiris baru |
| Analogi bentuk | Kesamaan pola dan pemetaan yang dinyatakan | Kesamaan makna semua objek yang dipetakan |

Peta relasi Foundation memuat beberapa jenis tersebut. Sintesis tidak menaikkan setiap relasi menjadi implikasi logis hanya karena dua istilah dihubungkan.

## Syarat penyambungan argumen

Jika \(\Gamma\Rightarrow A\) dan \(\Delta,A\Rightarrow B\), kesimpulan \(B\) dapat diturunkan dengan premis \(\Gamma\cup\Delta\), selama simbol-simbolnya mempunyai arti yang kompatibel dan premis dapat dipenuhi bersama.

Ini penalaran logis biasa. Persoalan ilmiah terletak pada kecocokan konteks, bukan hanya bentuk panah.

**Contoh penyambungan yang sah.** Posisi diukur dalam acuan tetap yang diketahui, galatnya benar dibatasi dalam metrik positif yang sama, dan ruas kanan P08 positif. Maka seluruh riwayat yang memenuhi premis mempunyai panjang positif dan tidak konstan.

**Contoh penyambungan yang tidak sah.** Posisi pusat tetap, lalu teorema “turunan nol di seluruh interval mengimplikasikan konstan” digunakan untuk menyatakan seluruh benda tidak bergerak. Teorema itu hanya memberikan ketetapan koordinat pusat yang dimasukkan, bukan ketetapan orientasi yang tidak diwakilinya.

**Contoh ketidakcocokan kerangka.** Keserentakan Newtonian dan keserentakan relativistik tidak dapat dipakai bergantian sebagai satu relasi global yang sama. Hubungan pendekatan memerlukan batas rezim dan aturan pemetaan; kata “waktu” yang sama tidak menyediakan keduanya.

## Empat pertanyaan yang tidak saling menggantikan

1. **Apakah model memiliki kemungkinan?** Kelas \(\mathcal H_y\) harus tidak kosong untuk inferensi berbasis kompatibilitas.
2. **Apakah sifatnya terdefinisi?** Predikat harus konsisten terhadap kesetaraan fisik yang dipakai.
3. **Apakah data cukup membedakannya?** Predikat harus konstan pada kelas observasional yang kompatibel.
4. **Apakah hasilnya stabil dan didukung secara empiris?** Ini memerlukan penilaian gangguan, model pengamatan, dan domain penggunaan.

Satu persamaan yang kovarian tidak menjawab keempat pertanyaan. Sebuah teori dengan predikat terdefinisi tetap dapat tidak teridentifikasi dari data yang tersedia. Ketunggalan ideal juga tidak menjamin kestabilan invers.

## Apa yang membutuhkan premis tambahan

| Kesimpulan yang diinginkan | Fondasi yang tersedia | Tambahan yang masih diperlukan |
| --- | --- | --- |
| Riwayat tidak konstan | Keadaan, domain, dan kesetaraan | Perbandingan yang bermakna jika konteks atau acuan berubah |
| Perubahan merupakan gerakan spasial | Riwayat keadaan | Interpretasi posisi, orientasi, atau susunan spasial |
| Nilai kelajuan fisik | Struktur perubahan lokal | Metrik atau norma, parameter jam, satuan, serta regularitas |
| Evolusi tereduksi tertutup | Pemetaan reduksi | Evolusi lengkap dan pelestarian seratnya |
| Densitas tetap memberi arus nol | Informasi densitas | Hukum konservasi dan syarat domain atau batas yang memadai |
| Arus total nol memberi diam setiap bagian | Informasi arus gabungan | Hubungan keadaan yang meniadakan pembatalan antarkomponen |
| Sampel membuktikan diam sepanjang selang | Rekaman diskret | Pembatasan kelas riwayat yang benar-benar menyingkirkan perubahan tersembunyi |
| Besaran terukur menentukan keadaan | Observabel terpilih | Sifat pemisahan atau keinjektifan pada keadaan yang relevan |
| Hukum probabilitas stasioner memberi realisasi tetap | Distribusi proses | Pembatasan jauh lebih kuat; tidak mengikuti dari stasioneritas saja |
| Pengalaman gerak menentukan sumber fisik tunggal | Laporan persepsi | Model psikofisik, kontrol kondisi, dan kecukupan informasi sumber |

Tabel ini tidak mengusulkan semua tambahan harus diadopsi. Ia menunjukkan lokasi tempat suatu penurunan akan berhenti jika premisnya belum tersedia.

## Penajaman syarat turunan nol

Foundation menggunakan dua pernyataan yang harus tetap dibedakan:

- Turunan nol pada setiap titik interval, dengan diferensiabilitas yang sesuai, memberikan ketetapan melalui teorema nilai rata-rata.
- Turunan nol hampir di mana-mana belum cukup tanpa syarat tambahan.

Secara definisional, fungsi real \(q\) kontinu absolut di \([a,b]\), \(a<b\), bila untuk setiap \(\varepsilon>0\) terdapat \(\delta>0\) sehingga setiap keluarga hingga subinterval berinterior saling lepas dengan jumlah panjang kurang dari \(\delta\) mempunyai jumlah perubahan mutlak \(\sum_i|q(b_i)-q(a_i)|<\varepsilon\).

Untuk fungsi tersebut berlaku:

\[
q(t)=q(a)+\int_a^t q'(u)\,du.
\]

Jika \(q'=0\) hampir di mana-mana, integralnya nol sehingga \(q\) konstan. Syarat kontinuitas absolut memulihkan penurunan yang tidak sah untuk fungsi kontinu sembarang. Fungsi Cantor merupakan contoh standar fungsi kontinu tidak konstan dengan turunan nol hampir di mana-mana. [N02](Sources.md#n02)

Hasil ini memperlihatkan daya pengembangan fondasi tanpa menyebut semua fungsi kontinu sebagai gerakan fisik. Untuk kurva vektor berdimensi hingga, argumen berlaku per komponen.

## Kekeliruan dari penghapusan premis

Dalam P05, determinisme evolusi lengkap sudah diasumsikan. Karena itu, hasil penurunannya bukan “semua gerakan deterministik”.

Dalam P08, batas galat adalah premis deterministik. Karena itu, hasilnya bukan “setiap rentang ketidakpastian statistik merupakan jaminan panjang”.

Dalam P11, persamaan kontinuitas konservatif sudah diberikan. Jika terdapat sumber \(\sigma\), persamaannya menjadi \(\partial_t\rho+\nabla\cdot J=\sigma\). Densitas stasioner kemudian hanya memberi \(\nabla\cdot J=\sigma\), bukan otomatis nol.

Dalam P12, fase seragam merupakan asumsi yang membuat distribusi tidak berubah oleh pergeseran. Tanpa itu, kesimpulan stasioneritas tidak otomatis berlaku.

## Mengapa satu kriteria formal belum menjadi satu ontologi

Faktorisasi P04 berlaku bagi banyak objek yang bukan gerakan. Ia menjelaskan kapan suatu deskripsi cukup untuk kesimpulan tertentu. Ia tidak memilih mana ruang fisik, mana waktu, apa yang ada, atau apa sebab perubahan.

Perbedaan arti densitas massa dan densitas probabilitas tetap ada walaupun keduanya memenuhi bentuk persamaan konservasi. Orde parsial matematis juga tidak otomatis merupakan hubungan sebab. Kesamaan bentuk memberi alat penalaran yang dapat digunakan bersama, bukan izin memindahkan seluruh penafsiran.

Tidak diturunkan bahwa enam fondasi merupakan enam unsur ontologis yang independen. Sebaliknya, tidak diturunkan pula bahwa semua fondasi dapat direduksi secara fisik menjadi konsep kesetaraan. Kriteria perbedaan tetap harus diberi makna dalam kerangka yang dipilih.

## Pertanyaan yang tetap terbuka

Hakikat waktu, kontinuitas ruang-waktu pada skala paling dasar, serta kedudukan lintasan individual dalam interpretasi kuantum tidak diselesaikan oleh hasil tentang pemetaan.

Persoalan persepsi juga tidak direduksi menjadi satu aturan pengamatan. Eksperimen yang diwarisi dari Foundation membatasi penafsiran pada kondisi tertentu. Menggunakan istilah “data” yang sama untuk instrumen dan laporan pengalaman tidak menghapus kebutuhan penelitian mekanistis masing-masing.

Minimalitas arsitektur pun tetap merupakan persoalan terbuka. Yang dapat ditunjukkan adalah redundansi penalaran tertentu bisa diringkas melalui P04, sedangkan makna fisik dan justifikasi premis tetap beragam.

Hubungan yang dipertahankan adalah hubungan yang mempunyai argumen dengan domain jelas. Batas ini memungkinkan perkembangan lebih lanjut sambil menjaga agar kesimpulan baru tidak mewarisi premis tersembunyi.
