# Review

Tanggal pemeriksaan: **2 November 2026**.

## Apa yang diperiksa

Pemeriksaan mencakup pembacaan ulang seluruh enam fondasi serta berkas struktur, sumber, relasi, klaim, glosarium, pertanyaan, dan evaluasi awal. Seluruh 16 berkas sumber memiliki hash yang sama dengan salinan yang diambil sebelum pengorganisasian ulang.

Sintesis dinilai dari argumennya: apakah kesimpulan mengikuti premis yang ditulis, apakah istilah tetap bermakna sama, dan apakah contoh penyangkal mematahkan generalisasi yang terlalu kuat.

Hasil P01–P13 bukan 13 postulat baru. Sebagiannya merupakan penerapan hasil elementer yang sama pada konteks berbeda. Penanda terpisah membantu menelusuri perbedaan premis dan arti kesimpulan.

## Pemisahan hasil dari sumber

Foundation dipindahkan bersama ke satu subfolder tanpa perubahan isi. Identitas berkas dipertahankan, sedangkan pemetaan lokasi dan hash dicatat dalam [Origins.tsv](Origins.tsv).

Hasil baru berada di Synthesis. Rujukan tambahan ditelusuri di Sources dan jejak premis di Trace. Tidak ada penajaman di bawah yang disisipkan diam-diam ke berkas fondasi.

## Penajaman terhadap pembacaan sumber awal

| Temuan | Sumber awal | Penajaman sintesis | Status |
| --- | --- | --- | --- |
| Pemetaan tidak injektif belum menjamin ada riwayat bergerak yang diizinkan di dalam serat | State, “Kesetaraan dan informasi yang dipertahankan” | Reduction menambahkan kelas riwayat dan contoh domain terhubung menuju keadaan diskret | Penajaman lingkup, bukan pembatalan pernyataan “dapat menyembunyikan” |
| Kesetaraan fase global sesaat belum menentukan bentuk persamaan evolusi setelah fase berubah terhadap waktu | State dan Change, keadaan murni kuantum | P13 menurunkan suku generator tambahan | Konsekuensi tambahan dengan premis Schrödinger |
| Ketetapan posisi sampel tidak cukup; tetapi data ujung yang berbeda dapat cukup untuk satu sifat | Evidence, keteridentifikasian dan sampling | P06 membedakan deteksi sifat dari rekonstruksi; P08 menambah batas galat | Pendalaman penalaran |
| Urutan parsial memerlukan penjelasan lebih lanjut untuk istilah “berubah” | Time, struktur urutan | P03 membatasi kesimpulan pada pasangan sebanding dan kelas perbandingan | Pembatasan konseptual |
| “Stasioner” dapat menunjuk beberapa objek | Change dan Glossary | P10–P12 membedakan observabel, densitas, arus, hukum statistik, dan realisasi | Pemisahan makna |

Pemeriksaan ini tidak menghasilkan dasar untuk mengubah fondasi secara diam-diam. Penajaman tersebut disimpan sebagai hasil yang bisa diperiksa tersendiri.

## Uji penyangkal dan kondisi yang dipertahankan

| Uji | Kesalahan yang dicegah | Hasil |
| --- | --- | --- |
| \(q=t,\ x'=x-t\), dengan aturan pembanding ikut berubah | Koordinat nol dianggap menghapus gerak relatif lama | P01 mempertahankan riwayat pembanding |
| \(x'=x^3\) dan \(t=\lambda^3\) | Bijeksi dianggap cukup untuk melestarikan nolnya turunan | P02 memerlukan regularitas |
| Dua konteks tak sebanding | Perbedaan nilai dianggap otomatis perubahan temporal satu benda | P03 membatasi inferensi |
| \(C(x,y)=x,\ T(x,y)=(-y,x)\) | Transformasi dianggap selalu dapat dilakukan setelah informasi dihapus | P05 gagal tepat ketika serat tidak dipertahankan |
| Partikel bebas dengan posisi sama, momentum berbeda | Determinisme lengkap dianggap memberi prediksi posisi dari posisi saja | Evolusi tereduksi tidak tertutup pada kelas tersebut |
| Data ujung \((0,1)\) dibandingkan \((0,0)\) | Deteksi gerak disamakan dengan rekonstruksi atau dengan perbedaan ujung saja | P06–P07 membedakan sifat dan kuantifikasinya |
| Data bising dengan batas galat deterministik | Simpangan baku dianggap jaminan mutlak gerakan | P08 menyebut premis batas yang sebenarnya |
| Kurva tenda dan sinus di antara sampel | Batas laju positif dianggap menghilangkan semua gerakan tersembunyi | P09 membatasi amplitudo tanpa membuktikan diam |
| Arus sirkulasi dan dua komponen berlawanan | Divergensi nol atau arus gabungan nol dianggap diam semua bagian | P11 mempertahankan perbedaan |
| Fase acak seragam pada osilasi | Statistik stasioner dianggap lintasan individual tetap | P12 membuktikan distribusi bersama tetap dan riwayat tidak konstan |
| Fase kuantum bergantung waktu | Persamaan lama dianggap otomatis tetap berlaku tanpa transformasi generator | P13 memberi tanda suku tambahan yang konsisten |

## Pembuktian dan pemeriksaan tambahan

Bukti umum ditulis dalam dokumen hasil, bukan disimpulkan dari jumlah contoh yang lulus. Pemeriksaan tambahan dilakukan untuk mendeteksi kesalahan aljabar atau kondisi pada contoh:

| Pemeriksaan | Cakupan hingga yang diperiksa |
| --- | --- |
| Faktorisasi P04 | 162 pasangan pemetaan pada domain tiga elemen, termasuk ketunggalan fungsi faktor |
| Pewarisan operasi P05 | 162 kasus operasi dan reduksi pada domain tiga elemen |
| Penyederhanaan data P07 | 1.728 kombinasi pemetaan dan predikat |
| Ketetapan orde parsial P03 | 19 orde parsial berlabel pada tiga elemen; 152 penugasan nilai |
| Ketaksamaan P08 | 1.000 kasus poligonal satu dimensi dengan aritmetika rasional eksak |
| Batas ekskursi P09 | 21 posisi pada contoh yang mencapai batas puncak |
| Pergeseran fase P12 | 44 permutasi fase seragam diskret sebagai pemeriksaan ilustrasi |
| Generator fase P13 | Lima evaluasi kompleks untuk tanda suku \(-\hbar\dot\theta\) |

Pemeriksaan hingga itu sesuai dengan hasil tertulis. Ia bukan pembuktian semua domain, pembuktian probabilitas kontinu melalui sampel diskret, atau bukti keberlakuan model di alam.

Saat pemeriksaan, contoh P07 diperjelas agar predikat “ujung berbeda” tidak disamakan dengan “pernah bergerak”. Pemisahan ini diperlukan karena riwayat yang kembali mempunyai ujung sama tetapi tetap tidak konstan.

## Penilaian terhadap jenis klaim

P01–P10 sebagian besar merupakan hasil tentang fungsi, urutan, diferensiasi, dan metrik dengan premis yang disebutkan. P11 membutuhkan persamaan konservasi. P12 merupakan contoh probabilistik yang diasumsikan. P13 membutuhkan persamaan evolusi kuantum.

Tidak ada hasil empiris baru. Temuan persepsi dan batas teori kuantum atau relativitas tetap mengikuti domain sumber yang diwarisi. Kesamaan bentuk konservasi massa dan probabilitas tidak dijadikan bukti bahwa besaran tersebut identik.

## Pemeriksaan artefak dan batas evaluasi

Tautan lokal, jangkar hasil, rujukan sumber, tabel jejak, dan pasangan pembatas rumus diperiksa. Foundation/Checksums.tsv tetap cocok dengan isi Foundation. Checksums proyek dan arsip memeriksa kesamaan byte, bukan kebenaran ilmu.

Pemeriksaan bersifat internal; tidak ada peer review independen, proof assistant, atau tinjauan sistematis seluruh literatur. Ketidakmampuan menyatukan semua fondasi menjadi satu ontologi tidak ditafsirkan sebagai bukti bahwa penyatuan selamanya mustahil.

Kesimpulan yang dipertahankan adalah tersedianya struktur penalaran bersyarat yang lebih kuat daripada daftar hubungan awal: kriteria kecukupan bersama, konsekuensi geometris dari bukti, serta pembatasan ketetapan dan reduksi yang dapat ditelusuri. Minimalitas universal dan hukum baru tentang seluruh Motion tidak diklaim.
