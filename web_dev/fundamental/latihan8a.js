var pemain = {
    nama:"Ronaldo",
    kecepatan:90,
    dribble:80,
    asal:"Portugal",
}

var barang = [
    {kode:"B1", nama:"Pensil", harga:5000},
    {kode:"B2", nama:"Pulpen", harga:6000},
    {kode:"B3", nama:"Penghapus", harga:7000},
]

var mobil = function(merek, nama, tahun, harga){
    this.merek = merek;
    this.nama = nama;
    this.tahun = tahun;
    this.harga = harga;
}

var wado = new mobil("Honda", "Stream", "2002", 150000);

var cust = {
    kode:"C001",    
    nama:"PT Maju Mundur",
    produk:"Garment",
    prodak:"Food",
    gantiProduk:function(a){
        this.produk = a;
    },
    kumpulan:function(){
        return this.produk+" and "+this.prodak;
    }
}
cust.gantiProduk("waha");
console.log(barang[0]);
