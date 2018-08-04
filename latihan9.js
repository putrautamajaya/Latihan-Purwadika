// let x = 'halo';
// console.log(x.startsWith('ha'));
// console.log(x.startsWith('lo'));
// console.log(x.startsWith('lo',2));
// console.log(x.endsWith('lo'));
// console.log(x.endsWith('ha'));
// console.log(x.endsWith('ha',x.length-2));

////////////////////////////////////////////////////////////////////////////////

// let buah = {nama : 'apel', warna: 'merah', tebal:5};
// console.log(buah);

// let test = {...buah, warna:'hijau'}
// console.log(test);

////////////////////////////////////////////////////////////////////////////////


// let x = function () 
// {
// console.log('Hai ini X!');
// };
// let y = function (callback) 
// {
// console.log('Halo ini Y!');
// callback();
// };

// y(x);


////////////////////////////////////////////////////////////////////////////////

// var w = [0,1,2,3,4,5]
// var x = w.filter((val) => val !== 2);
// var y = w.filter((val) => val % 2 == 0);
// var z = w.filter((val) => val % 2 !== 0);
// console.log(x);
// console.log(y);
// console.log(z);

//duplikat function filter


// function ngefilter(fn)
// {
//     let tempt = fn(Arr)
//     {
//         arr !==2;
        
//     }
//     return arr;
// }

// var w = [0,1,2,3,4,5]
// var x = w.ngefilter((val) => val !== 2);
// var y = w.filter((val) => val % 2 == 0);
// var z = w.filter((val) => val % 2 !== 0);
// console.log(x);
// console.log(y);
// console.log(z);



////////////////////////////////////////////////////////////////////////////////

// var w = [1,4,9,16,25]
// var x = w.map(Math.sqrt);
// var y = w.map((val)=> val * 2);
// var z = w.map((val)=> val!==9);
// console.log(x);
// console.log(y);
// console.log(z);

////////////////////////////////////////////////////////////////////////////////

// var orang = [
//                 {nama : "Andi", marga: "Hasibuan"},
//                 {nama : "Budi", marga: "Sinaga"},
//                 {nama : "Caca", marga: "Pasaribu"}
//             ];
// function namaLengkap(item, index)
// {
//     var fullname = [item.nama,item.marga].join(" ");
//     return fullname;
// }

// function tesMap() 
// {
//     console.log(orang.map(namaLengkap));
//     console.log(orang.map(namaLengkap)[0]);
//     console.log(orang.map(namaLengkap)[1]);
//     console.log(orang.map(namaLengkap)[2]);
// }
// tesMap()

////////////////////////////////////////////////////////////////////////////////

// let janji = new Promise(
    
// function(tepati,ingkari)
//     {
//         let dipenuhi = false;

//         if(dipenuhi)
//         {
//         tepati('Janji Kutepati.');
//         } 
        
//         else 
//         {
//         ingkari('Janji Kuingkari.');
//         }
//     }
// );

// janji.then(function(janjiDitepati){console.log(janjiDitepati);})
//     .catch(function(janjiDiingkari){console.log(janjiDiingkari);})

////////////////////////////////////////////////////////////////////////////////

// let merk = 'Yamaha';
// let tahun = 2015;
// let mio = {
// merk: merk,
// prod: tahun
// }
// let vixion = {
// merk, tahun
// }
// console.log(mio);
// console.log(vixion);

////////////////////////////////////////////////////////////////////////////////

// let id = ['Ali','Bona','Ali'];
// let nama = new Set(id);
// console.log(nama);
// console.log(nama.size);

// let nama = new Set();
// nama.add('Adi').add('Budi').add('Adi');
// console.log(nama);
// console.log(nama.size);
// nama.delete('Adi');
// console.log(nama);
// console.log(nama.size);
// nama.clear();
// console.log(nama);
// console.log(nama.size);

var str = "Visit W3Schools!";
var n = str.search("W3Schools");
console.log(n);