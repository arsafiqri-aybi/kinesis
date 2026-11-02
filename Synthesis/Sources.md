# Sources

## Peran sumber

Sumber utama sintesis adalah keseluruhan Foundation yang dipertahankan, termasuk enam berkas inti, arsitektur, glosarium, 45 relasi, 43 klaim, daftar sumber, dan pemeriksaan awal. Pengorganisasian atau banyaknya hubungan dalam berkas itu tidak diperlakukan sebagai bukti otomatis.

Hasil P01–P13 menyajikan argumen sendiri dari premis yang dinyatakan. Hasil elementer tentang fungsi, invariansi, dan ketaksamaan tidak diklaim sebagai temuan baru dalam literatur. “Hasil sintesis” berarti hasil yang diperoleh dalam penyatuan pembahasan ini.

Tidak ada survei ulang seluruh teori gerakan. Rujukan tambahan hanya digunakan untuk memperjelas tiga celah: struktur quotient, syarat kontinuitas absolut, dan persamaan konservasi massa sebagai pembanding.

## Hubungan ke Foundation

| Sumber internal | Bagian yang dipakai | Peran dalam sintesis |
| --- | --- | --- |
| [State](../Foundation/Core/State.md) | Kesetaraan, reduksi, observabel, identitas | Menentukan perbedaan yang dipertahankan dan alasan penggabungan |
| [Time](../Foundation/Core/Time.md) | Urutan, parameter, durasi, pembatasan relativistik | Menentukan apa yang dipertahankan saat waktu atau parameter dibaca ulang |
| [Space](../Foundation/Core/Space.md) | Konfigurasi, metrik, medan, arus material | Menetapkan interpretasi spasial dan batas penggunaan geometri |
| [Reference](../Foundation/Core/Reference.md) | Pemetaan pembanding dan transformasi | Mendukung P01–P02 serta pemeriksaan operasi tereduksi |
| [Change](../Foundation/Core/Change.md) | Riwayat, regularitas, panjang, contoh lingkaran | Menopang batas geometris dan perbedaan jenis ketetapan |
| [Evidence](../Foundation/Core/Evidence.md) | Kelas kompatibel, sampling, proyeksi, persepsi | Menopang faktorisasi sifat dan batas inferensi |
| [Architecture](../Foundation/Structure/Architecture.md) dan [Boundaries](../Foundation/Structure/Boundaries.md) | Status simpul dan batas dasar–turunan | Mencegah arsitektur dibaca sebagai aksioma alam |
| [Relations.tsv](../Foundation/Structure/Relations.tsv) dan [Claims.tsv](../Foundation/Research/Claims.tsv) | Kondisi serta jenis klaim | Titik pemeriksaan ulang, bukan sumber otoritas logis tersendiri |
| [Questions](../Foundation/Research/Questions.md) dan [Review](../Foundation/Research/Review.md) | Persoalan terbuka dan kasus penyangkal | Membatasi perluasan klaim |

## Rujukan yang diwarisi

Label **F-Sxx** menunjuk label **Sxx** dalam [Sources Foundation](../Foundation/Research/Sources.md). Penambahan awalan hanya membedakan ruang penamaan; daftar sumber aslinya tidak diubah.

| Label | Relevansi utama |
| --- | --- |
| F-S01 | Relasi ekuivalensi dan orde parsial |
| F-S05, F-S06 | Batas acuan, struktur waktu, dan regularitas geometris |
| F-S07 | Topologi, kontinuitas, dan keterhubungan |
| F-S09 | Kesetaraan fase global dan keadaan stasioner kuantum |
| F-S10, F-S11 | Arus probabilitas dan partikel pada lingkaran |
| F-S12 | Batas penafsiran label partikel identik |
| F-S13, F-S14, F-S21 | Batas inferensi dari stimulus dan persepsi |
| F-S15 | Rekonstruksi bersyarat dalam kelas sinyal berbatas frekuensi |
| F-S18 | Perbedaan ketidakpastian pengukuran dari galat yang diketahui atau dibatasi |
| F-S19, F-S20 | Status model relasional waktu dan proposal ruang-waktu diskret |
| F-S22 | Konfigurasi, keadaan fase, dan prediksi dinamika klasik |

Tabel tersebut menunjukkan relevansi, bukan menyatakan seluruh hasil P01–P13 dikutip dari rujukan tersebut. Bukti dan premis tambahannya tetap berada di dokumen sintesis.

## Rujukan tambahan

### N01

Romyar Sharifi. **Point-Set Topology**, Bab 2, §2.3; khususnya Teorema 2.3.11.

[Materi penulis, UCLA](https://www.math.ucla.edu/~sharifi/notes/topology-ch02.html).

Jenis: catatan ilmiah penulis. Bagian diperiksa: fungsi yang konstan pada serat peta quotient serta kontinuitas fungsi turunannya. Digunakan sebagai jangkar standar bagi bentuk topologis P04. P04 pada tingkat himpunan dibuktikan langsung dalam Reduction.

### N02

John K. Hunter. **Notes on Partial Differential Equations**, revisi 18 Juni 2014. University of California, Davis. Lampiran 3.A, terutama Teorema 3.60 dan pembahasan fungsi singular.

[Catatan penulis](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf).

Jenis: catatan ilmiah penulis. Bagian diperiksa: hubungan kontinuitas absolut dengan teorema dasar kalkulus; fungsi Cantor sebagai pembatas generalisasi. Tidak digunakan untuk memperluas inti ke teori persamaan diferensial parsial.

### N03

Richard Fitzpatrick. **Mass Conservation**, materi pengajaran mekanika fluida. University of Texas at Austin.

[Materi penulis](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node10.html).

Jenis: materi ilmiah penulis. Bagian diperiksa: hubungan densitas, kecepatan, dan persamaan kontinuitas massa. Digunakan untuk menjelaskan bahwa bentuk konservasi dalam P11 merupakan premis model dengan makna besaran tertentu.

## Batas pembacaan dan pembuktian

Rujukan tambahan diperiksa pada **2 November 2026** pada bagian yang disebutkan, bukan dibaca sebagai tinjauan menyeluruh seluruh naskah.

Fakta empiris yang dipakai tetap berasal dari penelitian dalam Foundation. Sintesis tidak menghasilkan data eksperimen baru atau menetapkan satu mekanisme persepsi universal.

P12 menggunakan definisi stasioner ketat dan contoh fase acak dengan bukti pergeseran distribusi yang disajikan lengkap. Tidak ditarik sifat tambahan seperti ergodisitas dari contoh tersebut.

Seluruh contoh angka menggunakan besaran dinormalisasi atau satuan yang konsisten. Hubungan yang memerlukan massa, panjang, atau parameter fisik menyebut kondisi positif dan maknanya pada tempat penggunaan.

Jejak spesifik antara premis, hasil, fondasi, dan sumber tersedia dalam [Trace.tsv](Trace.tsv). Kolom main_dependencies hanya mencatat hasil yang dipakai dalam pembuktian utama; connections mencatat keterkaitan atau penerapan lintas hasil, yang tidak otomatis merupakan premis bukti. Sebagai contoh, P13 berkaitan dengan P01–P02, tetapi penurunannya langsung memakai persamaan Schrödinger dan aturan perkalian.

Identitas byte sumber dipertahankan melalui [Origins.tsv](Origins.tsv).
