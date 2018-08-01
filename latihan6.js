// function contoh() {
//     console.log('Halo Dunia!');
// }

// contoh();
// //function di buat sekali bisa di panggil berkali"

//////////////////////////////////////////////////////////////////////////

// let x = 10
// let y = 50
// function contoh() {
// console.log(x+y)
// }
// contoh();

//////////////////////////////////////////////////////////////////////////

//nama di dalem  function itu sebagai parameter. jadi dia bukan variable di 
//luar function.
// function namaku(nama) {
// console.log (nama+' Susilo');
// }
// var nama = 'adi'; //makany ini bisa berlaku.
// namaku(nama);
// namaku('Budi');
// namaku('Caca');
// namaku('Dedi');

//////////////////////////////////////////////////////////////////////////

// //parameterny juga bisa dalam bentuk array.
// function printNamaDanTahun(arr) {
// console.log (arr[0]+' Lahir th '+arr[1]);
// }
// // function printNamaDanTahun(x,y) {
// // console.log (x+' Lahir th '+y);
// // }
// printNamaDanTahun(['Adi','1990']);
// printNamaDanTahun('Budi','1991');
// printNamaDanTahun('Caca','1992');
// printNamaDanTahun('Dedi','1993');

//////////////////////////////////////////////////////////////////////////

// function total(x,y) {
// z = x + y
// return z
// } 

// var hasil = total(4,5);

// console.log(total(4,5));
// console.log(hasil);
// console.log(z);

//////////////////////////////////////////////////////////////////////////

// function total(x,y) {
// z = x + y
// }
// console.log(total(4,5))

//////////////////////////////////////////////////////////////////////////

// function total(x,y) {
// z = x + y
// console.log(z)
// }
// console.log(total(4,5))

//////////////////////////////////////////////////////////////////////////

// function Pangkat(x,y){
// if (y == 1) {
// return x;
// }
// else {
// return x=x*Pangkat(x,y-1);
// }
// }
// console.log(Pangkat(7,3))

//////////////////////////////////////////////////////////////////////////

// //unlimited loop crtl+c untuk stop
// for(;;){
//     console.log('bro!');
// }

//////////////////////////////////////////////////////////////////////////

// function tiga(){
// return 3;
// }

// function kali(x) {
// if (x < 2) {return 1;}
// else {return (x * tiga());}
// }

// console.log(kali(1))

//////////////////////////////////////////////////////////////////////////

// function waktu() {
// console.log('Halo');
// }

// setTimeout(waktu, 3000); //3000 milisecond

// console.log('Yuk');

//////////////////////////////////////////////////////////////////////////

// var tambah = function(numbers){
//     return (numbers[0]+numbers[1]);
// }
// var kurang = function(numbers){
//     return (numbers[0]-numbers[1]);
// }
// function printHasil(fn, numbers){
//     var hasil = fn(numbers);
//     console.log(hasil);
// }
// printHasil(kurang,[4,2]);

//////////////////////////////////////////////////////////////////////////

// function waktu() {
// console.log('Halo');
// }
// var x = setTimeout(waktu, 3000);
// clearTimeout(x)
// console.log('Yuk');

// let mobil = ['Alya','Xenia','Avanza'];
// console.log(mobil)
// console.log(mobil.toString())
// console.log(mobil.join(' * '))

//////////////////////////////////////////////////////////////////////////

// let count = 0;

// function waktu() {
// console.log('Halo');
// count++;
//     if(count == 5)
//     {
//         clearInterval(x);
//     }
// }

// var x = setInterval(waktu, 1500);

//////////////////////////////////////////////////////////////////////////

// function waktu()
// {
//     var date = new Date()
//     console.log('menit ke : ' + date.getMinutes() + ' detik ke : ' + date.getSeconds());
// }

// var x =setInterval(waktu,1000);

//////////////////////////////////////////////////////////////////////////

// let mobil = ['Alya','Xenia','Avanza'];
// console.log(mobil)
// console.log(mobil.toString())
// console.log(mobil.join(' * '))

//////////////////////////////////////////////////////////////////////////

// let mobil = ['Alya','Xenia','Avanza'];
// console.log(mobil[0])
// console.log(mobil[1])
// console.log(mobil[2])
// console.log(mobil[3])

//////////////////////////////////////////////////////////////////////////

// let buah, bPjg, i;
// buah = ['Jeruk', 'Nanas', 'Apel'];
// bPjg = buah.length;
// for (i = 0; i < bPjg; i++) {
// console.log(buah[i]);
// }

//////////////////////////////////////////////////////////////////////////

// let mobil = ['Alya','Xenia','Avanza'];
// let w = mobil.length;
// console.log(w)

// let x = mobil.sort();
// console.log(x)

// let y = mobil.reverse();
// console.log(y)

// let z = mobil.indexOf('Avanza');
// console.log(z)

//////////////////////////////////////////////////////////////////////////

// let buah = ['Jeruk','Nanas','Apel'];
// buah.pop();
// console.log(buah)
// buah.push('Kiwi');
// buah.push('Kiwi');
// console.log(buah);

//////////////////////////////////////////////////////////////////////////

// let buah = ['Jeruk','Nanas','Apel'];
// buah.shift();
// console.log(buah)
// buah.unshift('Lemon');
// console.log(buah)

//////////////////////////////////////////////////////////////////////////

// let buah = ['Jeruk','Nanas','Apel'];
// buah.splice(2, 0, 'Lemon', 'Kiwi');
// console.log(buah)
// buah.splice(1,3);
// console.log(buah)
// delete buah[0];
// console.log(buah)

//////////////////////////////////////////////////////////////////////////

// let buah = ['Banana', 'Orange',
// 'Lemon', 'Apple', 'Mango'];
// let buah2 = buah.slice(1);
// console.log(buah2)
// let buah4 = buah.slice(1,4);
// console.log(buah4)

//////////////////////////////////////////////////////////////////////////

// let buah = ['Jeruk','Nanas','Apel'];
// buah.push('Duku');
// console.log(buah)
// buah[buah.length] = 'Pisang';
// console.log(buah)
// buah[6] = 'Mangga';
// console.log(buah)

//////////////////////////////////////////////////////////////////////////

// let nama1 = ['Andi','Budi'];
// let nama2 = ['Caca','Dede','Euis'];
// let nama3 = nama1.concat(nama2);
// let nama4 = nama2.concat(nama1);
// console.log(nama3)
// console.log(nama4)

//////////////////////////////////////////////////////////////////////////

// let nama1 = ['Andi','Budi'];
// let nama2 = ['Caca','Dede','Euis'];
// let nama3 = ['Faza','Gilang'];
// let x = nama1.concat(nama2,nama3);
// console.log(nama1)
// console.log(nama2)
// console.log(nama3)
// console.log(x)

//////////////////////////////////////////////////////////////////////////
//SORTING ASCENDING

// let x = [40, 100, 1, 5, 25, 10];

// for( let i = 0; i<x.length ; i++)
// {
//     for( let j = i+1; j<x.length ; j++)
//     {
//         if(x[i]>x[j])
//         {
//             var tempt = x[i];
//             x[i] = x[j];
//             x[j] = tempt
//         }
//     }
// }

// console.log(x)

//////////////////////////////////////////////////////////////////////////

// var jumlahkan = function(fn,array)
// {
//     for( let i = 0; i<array.length-1; i++)
//     {   
//         for( let j = i+1; j<array.length ; j++)
//         {
//                 array[i] = fn(array[i],array[j])
//         }
//     }
//     return array;
// }

// let arr = [10, 20 ,30];
// var jumlah = jumlahkan(function(a,b){
//                             return a+b
//                          },arr);

// console.log(arr)

//////////////////////////////////////////////////////////////////////////
//SOLVE IT ASCENDING SORT

// let x = [40, 100, 1, 5, 25, 10];
// let hasilJumlah = [];

// var sort = function(fn,array)
// {
//     for( let i = 0; i<array.length-1; i++)
//     {   
//         for( let j = i+1; j<array.length ; j++)
//         {
//                 if(i == 0)
//                 {
//                     hasilJumlah[j-1] = fn(array[i],array[j]);
//                 }
                
//                 if(j == 5)
//                 {
//                     for(let h =0+i ; h<array.length-1 ; h++)
//                     {
//                             if(hasilJumlah[i]>hasilJumlah[h+1])
//                         {
//                             let tempt = array[i];
//                             array[i] = array[h+2];
//                             array[h+2] = tempt;

//                             let tempt2 = hasilJumlah[i];
//                             hasilJumlah[i] = hasilJumlah[h+1];
//                             hasilJumlah[h+1] = tempt2;
//                         }
//                     }
                    
//                 }
               
                
//         }
//     }
//     return array;
// }

// var xAsc = sort(function(a,b){
//     return a+b;
//  },x);
//  console.log(xAsc)
//  console.log(hasilJumlah)

let x = [40, 100, 1, 5, 25, 10];

function sort(fn,arr)
{
    for( let i = 0; i<arr.length-1; i++)
    {   
        for( let j = i+1; j<arr.length ; j++)
        {
            var hasil = fn(arr[i],arr[j]);
            if(hasil >= 0)
            {
                let tempt = arr[i];
                arr[i] = arr[j];
                arr[j] = tempt;
            }          
        }
    }
    return arr;
}
var xAsc = sort(function(a,b){return a-b;},x);
console.log(xAsc);

var xDsc = sort(function(a,b){ return b-a;},x);
console.log(xDsc);

 //////////////////////////////////////////////////////////////////////////
//SOLVE IT DESCENDING SORT

// let x = [40, 100, 1, 5, 25, 10];
// let hasilJumlah = [0];

// var sort = function(fn,array)
// {
//     for( let i = 0; i<array.length-1; i++)
//     {   
//         for( let j = i+1; j<array.length ; j++)
//         {
//                 if(i == 0)
//                 {
//                     hasilJumlah[j] = fn(array[i],array[j]);
//                 }
                
//                 if(j == 5)
//                 {
//                     for(let h =0+i ; h<array.length-1 ; h++)
//                     {
//                             if(hasilJumlah[i]>hasilJumlah[h+1])
//                         {
//                             let tempt = array[i];
//                             array[i] = array[h+1];
//                             array[h+1] = tempt;

//                             let tempt2 = hasilJumlah[i];
//                             hasilJumlah[i] = hasilJumlah[h+1];
//                             hasilJumlah[h+1] = tempt2;
//                         }
//                     }
                    
//                 }  
                
//         }

//     }
//     return array;
// }

// var xDsc = sort(function(a,b){
//     return a-b;
//  },x);
//  console.log(xDsc)
//  console.log(hasilJumlah)

//////////////////////////////////////////////////////////////////////////
//Minimal Value
// let x = [40, 100, 1, 5, 25, 10];

// function sort(x)
// {
//     for(let i = 0 ; i<x.length ;i++)
//     {
//         if(x[0]>x[i])
//         {
//             x[0] = x[i];
//         }
//     }
//     return x;
// }
// sort(x);
// console.log(x[0]);

// //Max Value
// let x = [40, 100, 1, 5, 25, 10];

// for(let i = 0 ; i<x.length ;i++)
// {
//     if(x[0]<x[i])
//     {
//         x[0] = x[i];
//     }
// }
// console.log(x[0]);

//////////////////////////////////////////////////////////////////////////

//  var xDsc = sort(function(a,b){
//     return a-b;
//  },x);
//  console.log(xDsc);

//////////////////////////////////////////////////////////////////////////

// let x = [40, 100, 1, 5, 25, 10];
// console.log(x)
// console.log(x.sort())
// x.sort(function(a,b){
// return a-b
// });
// console.log(x)

//////////////////////////////////////////////////////////////////////////

// let x = [40, 100, 1, 5, 25, 10];
// function nilaiMin(a) {
// return Math.min.apply(null, a);
// }
// function nilaiMax(a) {
// return Math.max.apply(null, a);
// }
// console.log(nilaiMin(x))
// console.log(nilaiMax(x))
// console.log(x)

//////////////////////////////////////////////////////////////////////////

// var arrayKu = [['Andi',24,'PNS'],['Budi',28,'Pengacara'],['Caca',21,'Siswa'],]
// console.log(arrayKu[0])
// console.log(arrayKu[0][0])
// console.log(arrayKu[1][1])
// console.log(arrayKu[2][2])

//////////////////////////////////////////////////////////////////////////

// var arrayKu = [['Andi',24,'PNS'],['Budi',28,'Pengacara'],['Caca',21,'Siswa'],]
// arrayKu[0].sort()
// arrayKu[1].reverse()
// console.log(arrayKu[0])
// console.log(arrayKu[1])