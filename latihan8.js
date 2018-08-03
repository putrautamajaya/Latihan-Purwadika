// var orang = 
// {
//     namaDpn : "Andi", 
//     namaBlkg : "Susilo",
//     usia : 50, 
//     pekerjaan : "Politisi",
//     berjalan : function(nama,kecepatan)
//         {
//             console.log(nama + ' sedang berjalan ' + kecepatan + ' km/jam');
//         },
//     nama2Sodara: ['budi','usi','jeffry']
// };

// orang.berjalan('budi',20);
// console.log(orang.nama2Sodara[2]);

//////////////////////////////////////////////////////////////////////////////////

// var Andi = new Object();
// Andi.namaDpn = 'Andi';
// Andi.namaBlkg = 'Susilo';
// Andi.usia = 50;
// Andi.pekerjaan = 'PNS';
// Andi.berjalan = function()
// {
//     console.log(Andi.namaDpn + ' berjalan');
// }

// console.log(Andi.pekerjaan);
// Andi.berjalan();

//////////////////////////////////////////////////////////////////////////////////

// var orang = function(nama, usia, job) 
// {
//     this.namaDpn = nama;
//     this.umur = usia;
//     this.pekerjaan = job;
// }

// var Andi = new orang('Andi', 30, 'PNS');
// console.log(Andi.umur);

// let Budi = new orang('budi', 25, 'pengamen');
// console.log(Budi.pekerjaan);

// let Jojon = new orang('jojon', 20, 'banci Thailand');
// Jojon.kelamin = 'Waria';
// console.log(Jojon.pekerjaan);
// console.log(Jojon.kelamin);

//////////////////////////////////////////////////////////////////////////////////

// class orang 
// {
//     constructor(nama, usia, job) 
//     {
//     this.namaDpn = nama;
//     this.umur = usia;
//     this.pekerjaan = job;
//     }
// } 

// class guru extends orang
// {
//     constructor(nama, usia, job, bidang) 
//     {
//         super(nama,usia,job);
//         this.bidang = bidang;
//     }
// } 

// var Andi = new guru('Andi', 30, 'PNS', 'programming');
// console.log(Andi);

//////////////////////////////////////////////////////////////////////////////////

class makhlukHidup
{
    constructor(nama, usia) 
    {
    this.namaDpn = nama;
    this.umur = usia;
    }
} 

class manusia extends makhlukHidup
{
    constructor(nama, usia, job, marga) 
    {
        super(nama,usia);
        this.pekerjaan = job;
        this.marga = marga;
    }
} 

class guru extends manusia
{
    constructor(nama, usia, job, marga, bidang) 
    {
        super(nama,usia, job, marga, bidang);
        this.bidang = bidang;
    }
} 

var Andi = new guru('Andi', 30, 'PNS', 'programming');
console.log(Andi)

//////////////////////////////////////////////////////////////////////////////////

// var orang = 
// {
//     namaDpn : "Andi",
//     usia : 50,
//     job : "Politisi"
// };

// orang.negara = "Indonesia";
// delete orang.usia;

// console.log(orang)

//////////////////////////////////////////////////////////////////////////////////

// function orang(awal, akhir, usia) 
// {
//     this.nama = {awal, akhir};
//     this.usia = usia;
// }

// var Andi = new orang ('Andi','Susilo',20);

// console.log(Andi);
// console.log(Andi.nama.awal);
// console.log(Andi.nama.akhir);

//////////////////////////////////////////////////////////////////////////////////

// var arr = [1,2,3,4,5];
// for(var item in arr)
// {
//     console.log(arr[item]);
// }

// var gangKucing = [{nama: 'anggora'},{nama: 'garfield'}];
// for(var kucing in gangKucing)
// {
//     console.log(gangKucing[kucing].nama);
// }

// var manusia = 
// {
//     kepala: 1,
//     mata: 2,
//     telinga: 2,
//     tangan: 2,
//     kaki: 2,
// };

// var namaProp;
// for (namaProp in manusia) 
// {
//     console.log(namaProp + ":" + manusia[namaProp]);
// }

//////////////////////////////////////////////////////////////////////////////////

// //hampir ga perna di pakai
// function Orang(nama, lahir, job) 
// {
//     this.nama = nama;
//     this.lahir = lahir;
//     this.job = job;
// }
// Orang.prototype.marga = 'Hasibuan';
// //nambahin list ke cetakan 'orang'
// Orang.prototype.usia = function()    
// {
//     return 2017 - this.lahir;
// };

// var budi = new Orang('Budi', 1992, 'PNS');
// console.log(budi.marga);
// console.log(budi.usia());

//////////////////////////////////////////////////////////////////////////////////

// class persegiCreator
// {
//     constructor(luas,keliling)
//     {
//         this.luas = luas;
//         this.keliling = keliling;
//     }
// }

// let persegi = new persegiCreator(25,20);
// console.log('luas ' + persegi.luas + ' keliling ' + persegi.keliling)

//////////////////////////////////////////////////////////////////////////////////

// var jomblo = true;
// var Andi =
// {
//     usia:27, job:'Polisi'
// };

// var Budi = Object.assign({}, {usia:32, job:'Pilot'});

// var Caca = Object.assign({}, Budi, {job:'Akuntan'});

// var Dedi = Object.assign({}, {job:'Guru'}, {jomblo});

// console.log(Budi);
// console.log(Caca);
// console.log(Dedi);

//////////////////////////////////////////////////////////////////////////////////

// var orang = 
// {
//     namaDpn : "Andi",
//     namaBlk : "Susilo",
//     usia : 50,
//     namaFull : function() 
//                 {
//                     return this.namaDpn + " " + this.namaBlk;
//                 }
// }; 
// console.log(orang.namaFull)
// console.log(orang.namaFull())