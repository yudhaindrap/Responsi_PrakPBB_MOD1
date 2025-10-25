# YUDHA INDRA PRAJA
# 21120123140143
# Praktikum PPB / SHift 05 / Kel 29

# Cuci Sepatu API

REST API sederhana untuk layanan daftar barang cuci sepatu, dibangun dengan Node.js + Express + Supabase.

## Deskripsi singkat
API ini mengelola daftar sepatu yang sedang dicuci dengan operasi CRUD (Create, Read, Update, Delete). Mendukung filter berdasarkan status (mis. `GET /api/items?status=Selesai`).

## Fitur utama
- Tambah sepatu (POST /api/items)
- Ambil daftar sepatu (GET /api/items) — dukung query `status` dan `owner`
- Ambil sepatu per ID (GET /api/items/:id)
- Update data sepatu (PUT /api/items/:id)
- Hapus sepatu (DELETE /api/items/:id)

## Struktur data (table `items`)
```json
{
  "id": "uuid",
  "name": "string",
  "owner": "string",
  "status": "string", 
  "notes": "string",
  "price": "numeric",
  "created_at": "timestamp"
}
```

## Contoh request & response
Lihat file dokumentasi di folder examples atau contoh pada README di bagian atas (sama seperti yang ada dalam README ini).

### Instalasi lokal

1. Clone repo:
git clone https://github.com/<username>/<repo>.git

cd <repo>
2. Install:

npm install

3. Buat table di Supabase (SQL di supabase-schema.sql) — paste SQL ke SQL Editor Supabase.

4. Tambahkan environment variables. Buat file .env berdasarkan .env.example:

SUPABASE_URL=...

SUPABASE_KEY=...

PORT=3000

5. Jalankan server (development):

npm run dev

Server akan berjalan di http://localhost:3000 (atau PORT yang kamu tentukan).

### Contoh curl
Get items

curl "https://<your-vercel-url>/api/items"

Ambil items dengan status Selesai:

curl "https://<your-vercel-url>/api/items?status=Selesai"

## Link Vercel
https://responsi-prak-pbb-mod-1.vercel.app/