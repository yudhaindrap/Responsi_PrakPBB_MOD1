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
