// var x = 'Halo Dunia';
// console.log(x.length);


// console.log(x.indexOf('Dunia')); 
// //indexof itu bulai dari 0,1,2,3 Dunia dia bacany D ny itu di kotak
// // ke 5 dari halo dunia

// console.log(x.substr(5, 3));
// //substring itu buat potong kalimat, 5 maksudny mulai dri kotak ke 5, 3 kekanan

// console.log(x.slice(5, 8));
// //slice kegunaanny sama kaya substing, 5 maskudny mulai dri kotak ke 5, 8 sampai kotak ke 8

// console.log(x.split(' '));
// //untuk memisahkan 1 string menjadi array, kalau misalkan 'u' nanti di pisahin setiap u,
// // dan 'u' ny ilang


// // kalau path ke folderny ga bener. buka command promt ketik "cd(space)pathny" lalu enter, 
// // trus baru ketik "node(space)namafileny"

// var arr = ['halo', 'dunia'];
// var arr1 = x.split(' ');

// console.log(arr[1]);
// console.log(arr1[1]);
// console.log(x.split(' ')[1]);

////////////////////////////////////////////////////////////////////////////////////

// var x = 'halohaha'; 
// var y = 'DUNIA BOLA';
// var z = 12345;

// var xJadiBesar = x.toUpperCase();
// var xReplace = x.substr(0,4) + x.substr(4,2).replace('ha', 'mi') + x.substr(4,4);
// console.log(xJadiBesar);
// console.log(xReplace);
// console.log(x.toUpperCase());
// console.log(y.split(' ')[0].toLowerCase() + ' ' + y.split(' ')[1]);
// console.log(y.toLowerCase());
// console.log(x.replace('ha', 'mi'));
// //cuman ha yg pertama
// console.log(x.replace(/ha/g, 'mi'));
// //kalau pakai /g semua ha di ganti mi
// // arti dari /g adalah global

// console.log(z.toString());
// console.log(typeof(z.toString()));

///////////////////////////////////////////////////////////////////////////////

// var h = 5;
// h = h + 1;
// h += 1;
// h++;

// var x = 3;

// console.log(h % x); //sisa pembagian

///////////////////////////////////////////////////////////////////////////////

// console.log(Math.PI); // .PI itu property , .log itu method

// console.log(Math.abs(-4.7)); //mengambil nilai absoluteny. jadi + - ny ga di peduliin 
// console.log(Math.pow(8, 2));
// console.log(Math.sqrt(64));
// console.log(Math.cbrt(8));

///////////////////////////////////////////////////////////////////////////////

console.log(Math.random());
console.log(Math.floor(Math.random() * 100) +1);
console.log(Math.max(1,3,5));
console.log(Math.min(1,3,5));

///////////////////////////////////////////////////////////////////////////////

// let a = new Date()
// console.log(a.getFullYear())
// console.log(a.getMonth())
// console.log(a.getDate())
// console.log(a.getDay())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getMilliseconds())

// console.log(a.getDate() + '/' + (a.getMonth() + 1 ) + '/' + a.getFullYear());
// console.log(a.getHours() + ':' + a.getMinutes());

///////////////////////////////////////////////////////////////////////////////
