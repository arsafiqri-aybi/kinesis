# Kinesis · κίνησις

**The fundamental knowledge of motion — connected, examined, and traceable.**

Kinesis adalah perpustakaan ilmiah tentang akar pengetahuan gerakan: bagaimana keadaan dibedakan, perubahan dibandingkan, riwayat dipahami, dan kesimpulan dibenarkan oleh bukti.

Nama *kinesis* berasal dari Yunani Kuno **κίνησις**, yang berarti gerakan. Identitas keilmuan di dalam dokumen tetap menggunakan nama **Motion**.

## Explore

| Lapisan | Pertanyaan | Mulai membaca |
| --- | --- | --- |
| **Foundation** | Apa yang diperlukan agar gerakan mempunyai makna? | [Arsitektur](Foundation/Structure/Architecture.md) |
| **Synthesis** | Apa yang dapat diturunkan ketika fondasi dihubungkan? | [Ikhtisar sintesis](Synthesis/Overview.md) |
| **Graph** | Bagaimana konsep, premis, hasil, dan sumber ditelusuri? | [Panduan peta](Graph/README.md) |

## Foundation

| Fondasi | Fokus |
| --- | --- |
| [State](Foundation/Core/State.md) | Keadaan, identitas, perbedaan, dan kesetaraan |
| [Time](Foundation/Core/Time.md) | Urutan, durasi, parameter, dan waktu fisik |
| [Space](Foundation/Core/Space.md) | Posisi, relasi spasial, konfigurasi, dan geometri |
| [Reference](Foundation/Core/Reference.md) | Acuan, transformasi, dan invariansi |
| [Change](Foundation/Core/Change.md) | Riwayat, kontinuitas, serta syarat pengertian laju |
| [Evidence](Foundation/Core/Evidence.md) | Pengamatan, inferensi, keteridentifikasian, dan persepsi |

Keenam bagian merupakan pengorganisasian pengetahuan yang dapat direvisi. Jumlahnya tidak menyatakan enam aksioma alam atau bukti minimalitas universal.

## Synthesis

Sintesis menghasilkan argumen dengan premis, penurunan, contoh penyangkal, dan batas keberlakuan yang dinyatakan.

| Pembahasan | Hasil utama |
| --- | --- |
| [Comparison](Synthesis/Comparison.md) | Konsistensi perbandingan, tingkatan invariansi, dan urutan parsial |
| [Reduction](Synthesis/Reduction.md) | Kecukupan deskripsi serta syarat operasi dan evolusi tereduksi |
| [Evidence](Synthesis/Evidence.md) | Keteridentifikasian sifat dan batas geometris gerakan dari data |
| [Stationarity](Synthesis/Stationarity.md) | Ketetapan keadaan, observabel, distribusi, statistik, dan arus |
| [Limits](Synthesis/Limits.md) | Premis tambahan, jenis pembenaran, dan batas penyatuan |

Contoh ketergantungan pembuktian yang tercatat:

~~~mermaid
flowchart TD
    P04["P04 · Faktorisasi"] --> P05["P05 · Operasi tereduksi"]
    P04 --> P06["P06 · Keteridentifikasian"]
    P06 --> P07["P07 · Pengurangan data"]
~~~

Panah menunjukkan hasil yang dipakai dalam pembuktian berikutnya. Keterkaitan konseptual lainnya dicatat secara terpisah dalam [Trace.tsv](Synthesis/Trace.tsv).

## Knowledge map

Ekspor [Graph/Model.json](Graph/Model.json) mempertahankan:

- **498 unsur** dan **1.448 catatan hubungan atau atribut**.
- **28 dokumen sumber** beserta substansi dan jangkar versinya.
- **186 bagian dokumen**, **43 entri klaim**, dan **45 relasi bersyarat**.
- Enam fondasi, 13 hasil sintesis, glosarium, dan 25 catatan bibliografi.

Konteks kueri Graph adalah **documentation**. Status accepted pada catatan pemetaan menyatakan representasi dokumen diterima; status ilmiah klaim sumber tetap dibedakan. Pemetaan ini tidak mengklaim verifikasi formal seluruh matematika atau kebenaran universal semua isi.

## Reading paths

- **Memahami dasar:** [Architecture](Foundation/Structure/Architecture.md) → enam fondasi → [Boundaries](Foundation/Structure/Boundaries.md).
- **Menelusuri penalaran:** [Overview](Synthesis/Overview.md) → pembahasan terkait → [Trace](Synthesis/Trace.tsv) → sumber.
- **Memeriksa kualitas:** [Review Foundation](Foundation/Research/Review.md), [Review Synthesis](Synthesis/Review.md), dan [Checks Graph](Graph/Checks.md).
- **Menjelajahi rujukan:** [Sources Foundation](Foundation/Research/Sources.md) dan [Sources Synthesis](Synthesis/Sources.md).

## Repository

| Lokasi | Isi |
| --- | --- |
| Foundation/Core/ | Enam berkas pengetahuan fundamental |
| Foundation/Structure/ | Arsitektur, batas, glosarium, dan relasi |
| Foundation/Research/ | Sumber, jejak klaim, evaluasi, dan pertanyaan terbuka |
| Synthesis/ | Penurunan lintas fondasi dan jejak argumentasinya |
| Graph/ | Ekspor model, catatan revisi, dan pemeriksaan pemetaan |
| [Checksums.tsv](Checksums.tsv) | SHA-256 berkas repositori |

Isi keilmuan ditulis dalam bahasa Indonesia dengan terminologi dan notasi standar; penamaan berkas menggunakan bahasa Inggris.

Foundation dipertahankan sesuai snapshot asal. [Origins.tsv](Synthesis/Origins.tsv) mencatat identitas byte sumber; README dalam Foundation tetap merupakan pengantar tahap awal.

## Scientific scope

Kinesis berfokus pada fondasi gerakan. Definisi, hasil matematis bersyarat, asumsi model, interpretasi, hasil empiris, dan pertanyaan terbuka mempertahankan statusnya masing-masing.

Pemeriksaan yang tersedia bersifat internal dan memiliki batas yang dijelaskan dalam catatan evaluasi. Pengetahuan dapat berkembang melalui koreksi dan penurunan yang dapat ditelusuri.

Pengembangan teori terapan, animasi, simulasi, dan implementasi teknologi berada di luar cakupan pustaka inti.
