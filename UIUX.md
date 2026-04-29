---
name: ui-ux-pro-max
description: "UI/UX design intelligence untuk web dan mobile. Gunakan skill ini setiap kali user meminta: membuat (build, create, design, implement) UI apapun — website, landing page, dashboard, admin panel, SaaS, e-commerce, portfolio, blog, mobile app, komponen HTML/React/Vue/Svelte; me-review, fix, improve, optimize, enhance, atau refactor kode UI/UX; memilih color palette, typography, font pairing, atau style (glassmorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, dll); membuat elemen spesifik: button, modal, navbar, sidebar, card, table, form, chart. Stack didukung: React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind CSS, shadcn/ui. Default stack: html-tailwind. Trigger bahkan untuk request sederhana seperti 'buatkan button' atau 'perbaiki tampilan dashboard'."
---
 
# UI/UX Pro Max — Design Intelligence
 
Panduan desain komprehensif untuk aplikasi web dan mobile. Berisi 50+ style, 97 color palette, 57 font pairing, 99 UX guideline, dan 25 tipe chart untuk 9 technology stack.
 
---
 
## Workflow Wajib
 
### Step 1: Analisis Kebutuhan
 
Ekstrak dari request user:
- **Tipe produk**: SaaS, e-commerce, portfolio, dashboard, landing page, dll.
- **Kata kunci style**: minimal, playful, professional, elegant, dark mode, dll.
- **Industri**: healthcare, fintech, gaming, education, beauty, dll.
- **Stack**: jika tidak disebutkan, default ke `html-tailwind`
### Step 2: Generate Design System (WAJIB)
 
Selalu mulai dengan `--design-system` untuk rekomendasi lengkap:
 
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```
 
Command ini:
1. Mencari 5 domain sekaligus (product, style, color, landing, typography)
2. Menerapkan reasoning rules dari `ui-reasoning.csv`
3. Mengembalikan design system lengkap: pattern, style, colors, typography, effects
4. Menyertakan anti-patterns yang harus dihindari
**Contoh:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service elegant" --design-system -p "Serenity Spa"
```
 
### Step 3: Pencarian Domain Tambahan (sesuai kebutuhan)
 
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```
 
| Kebutuhan | Domain | Contoh |
|-----------|--------|--------|
| Opsi style lebih banyak | `style` | `--domain style "glassmorphism dark"` |
| Rekomendasi chart | `chart` | `--domain chart "real-time dashboard"` |
| Best practice UX | `ux` | `--domain ux "animation accessibility"` |
| Font alternatif | `typography` | `--domain typography "elegant luxury"` |
| Struktur landing page | `landing` | `--domain landing "hero social-proof"` |
 
### Step 4: Stack Guidelines
 
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```
 
Stack tersedia: `html-tailwind` (default), `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`
 
---
 
## Domain & Stack Reference
 
### Domain Pencarian
 
| Domain | Gunakan Untuk | Contoh Keyword |
|--------|--------------|----------------|
| `product` | Rekomendasi tipe produk | SaaS, e-commerce, portfolio, healthcare |
| `style` | Style UI, warna, efek | glassmorphism, minimalism, dark mode |
| `typography` | Font pairing, Google Fonts | elegant, playful, professional, modern |
| `color` | Color palette per tipe produk | saas, ecommerce, healthcare, beauty, fintech |
| `landing` | Struktur halaman, strategi CTA | hero, testimonial, pricing, social-proof |
| `chart` | Tipe chart, rekomendasi library | trend, comparison, timeline, funnel, pie |
| `ux` | Best practice, anti-pattern | animation, accessibility, z-index, loading |
| `react` | Performa React/Next.js | waterfall, bundle, suspense, memo, cache |
| `web` | Panduan antarmuka web | aria, focus, keyboard, semantic |
| `prompt` | AI prompts, CSS keywords | (nama style) |
 
---
 
## Aturan UI Profesional
 
### Icons & Elemen Visual
 
| Aturan | Lakukan | Jangan |
|--------|---------|--------|
| **Jangan emoji sebagai ikon** | Gunakan SVG (Heroicons, Lucide) | Pakai emoji 🎨 🚀 ⚙️ sebagai ikon UI |
| **Hover state stabil** | Gunakan transisi color/opacity | Scale transform yang menggeser layout |
| **Logo brand benar** | Ambil SVG resmi dari Simple Icons | Menebak path logo |
| **Ukuran ikon konsisten** | viewBox 24x24 dengan `w-6 h-6` | Campur ukuran ikon berbeda |
 
### Interaksi & Cursor
 
| Aturan | Lakukan | Jangan |
|--------|---------|--------|
| **Cursor pointer** | `cursor-pointer` di semua elemen klikabel | Biarkan cursor default |
| **Hover feedback** | Beri feedback visual (color, shadow, border) | Tidak ada indikasi elemen interaktif |
| **Transisi halus** | `transition-colors duration-200` | Perubahan state instan atau >500ms |
 
### Kontras Light/Dark Mode
 
| Aturan | Lakukan | Jangan |
|--------|---------|--------|
| **Glass card light mode** | `bg-white/80` atau opacity lebih tinggi | `bg-white/10` (terlalu transparan) |
| **Kontras teks light** | `#0F172A` (slate-900) untuk teks | `#94A3B8` (slate-400) untuk body text |
| **Teks muted light** | Minimal `#475569` (slate-600) | gray-400 atau lebih terang |
| **Visibilitas border** | `border-gray-200` di light mode | `border-white/10` (tidak terlihat) |
 
### Layout & Spacing
 
| Aturan | Lakukan | Jangan |
|--------|---------|--------|
| **Navbar floating** | `top-4 left-4 right-4` | Tempel ke `top-0 left-0 right-0` |
| **Content padding** | Hitung tinggi navbar tetap | Biarkan konten tersembunyi di balik navbar |
| **Max-width konsisten** | Gunakan `max-w-6xl` atau `max-w-7xl` yang sama | Campur lebar container berbeda |
 
---
 
## Prioritas Aturan UX
 
| Prioritas | Kategori | Impact |
|-----------|----------|--------|
| 1 | Accessibility | CRITICAL |
| 2 | Touch & Interaction | CRITICAL |
| 3 | Performance | HIGH |
| 4 | Layout & Responsive | HIGH |
| 5 | Typography & Color | MEDIUM |
| 6 | Animation | MEDIUM |
| 7 | Style Selection | MEDIUM |
| 8 | Charts & Data | LOW |
 
### Accessibility (CRITICAL)
- Rasio kontras minimum 4.5:1 untuk teks normal
- Focus ring terlihat di elemen interaktif
- Alt text deskriptif untuk gambar bermakna
- `aria-label` untuk tombol ikon-saja
- Tab order sesuai urutan visual
- Gunakan `<label for="">` pada form
### Touch & Interaction (CRITICAL)
- Touch target minimum 44×44px
- Gunakan click/tap untuk interaksi utama
- Disable tombol saat operasi async
- Pesan error jelas dekat masalah
- `cursor-pointer` di semua elemen klikabel
### Performance (HIGH)
- Gunakan WebP, srcset, lazy loading
- Periksa `prefers-reduced-motion`
- Reservasi ruang untuk konten async
### Animation (MEDIUM)
- Durasi 150–300ms untuk micro-interaction
- Gunakan `transform`/`opacity`, bukan `width`/`height`
- Gunakan skeleton screen atau spinner untuk loading state
---
 
## Output Format Design System
 
```bash
# ASCII box (default) — untuk tampilan terminal
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system
 
# Markdown — untuk dokumentasi
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```
 
---
 
## Pre-Delivery Checklist
 
Sebelum menyerahkan kode UI, verifikasi:
 
### Visual Quality
- [ ] Tidak ada emoji sebagai ikon (gunakan SVG)
- [ ] Semua ikon dari set yang konsisten (Heroicons/Lucide)
- [ ] Logo brand benar (verifikasi dari Simple Icons)
- [ ] Hover state tidak menyebabkan layout shift
- [ ] Gunakan warna tema langsung (bg-primary) bukan `var()` wrapper
### Interaksi
- [ ] Semua elemen klikabel punya `cursor-pointer`
- [ ] Hover state memberi feedback visual jelas
- [ ] Transisi halus (150–300ms)
- [ ] Focus state terlihat untuk navigasi keyboard
### Light/Dark Mode
- [ ] Teks light mode cukup kontras (minimum 4.5:1)
- [ ] Elemen glass/transparan terlihat di light mode
- [ ] Border terlihat di kedua mode
- [ ] Test kedua mode sebelum deliver
### Layout
- [ ] Elemen floating punya spacing dari tepi
- [ ] Tidak ada konten tersembunyi di balik navbar fixed
- [ ] Responsif di 375px, 768px, 1024px, 1440px
- [ ] Tidak ada horizontal scroll di mobile
### Accessibility
- [ ] Semua gambar punya alt text
- [ ] Input form punya label
- [ ] Warna bukan satu-satunya indikator
- [ ] `prefers-reduced-motion` dihormati