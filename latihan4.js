//SOLVE IT 11

let tanggal = new Date()
let bulan;

if(tanggal.getMonth() + 1 == 1){
    bulan =  ' januari';
}
else if(tanggal.getMonth() + 1 == 2){
    bulan = ' febuari';
}
else if(tanggal.getMonth() + 1 == 3){
    bulan = ' maret';
}
else if(tanggal.getMonth() + 1 == 4){
    bulan = ' april';
}
else if(tanggal.getMonth() + 1 == 5){
    bulan = ' mei';
}
else if(tanggal.getMonth() + 1 == 6){
    bulan = ' juni';
}
else if(tanggal.getMonth() + 1 == 7){
    bulan = ' juli';
}
else if(tanggal.getMonth() + 1 == 8){
    bulan = ' agustus';
}
else if(tanggal.getMonth() + 1 == 9){
    bulan =  ' oktober';
}
else if(tanggal.getMonth() + 1 == 10){
    bulan = ' september';
}
else if(tanggal.getMonth() + 1 == 11){
    bulan = ' november';
}
else if(tanggal.getMonth() + 1 == 12){
    bulan = ' desember';
}
console.log('saat ini bulan : ' + (tanggal.getMonth() + 1) + ' ' + bulan)

//SOLVE IT 12

let hari;

if(tanggal.getDay() + 1 == 1){
    hari = 'senin';
}
else if(tanggal.getDay()  + 1 == 2){
    hari = 'selasa';
}
else if(tanggal.getDay()  + 1 == 3){
    hari = 'rabu';
}
else if(tanggal.getDay()  + 1 == 4){
    hari = 'kamis';
}
else if(tanggal.getDay()  + 1 == 5){
    hari = 'jumat';
}
else if(tanggal.getDay()  + 1 == 6){
    hari = 'sabtu';
}
else if(tanggal.getDay()  + 1 == 7){
    hari = 'minggu';
}

console.log('hari ini ' + hari + ' ' + (tanggal.getDay() +1) + ' ' + bulan);

if (tanggal.getMinutes()<10 && tanggal.getSeconds()<10){
    console.log('pukul' + ' ' +(tanggal.getHours()  + 1) + ':0' + (tanggal.getMinutes()  + 1) + ':0' + (tanggal.getSeconds()+1));
}
else if ((tanggal.getMinutes()+1)<10 && (tanggal.getSeconds()+1)>10){
    console.log('pukul' + ' ' +(tanggal.getHours()  + 1) + ':0' + (tanggal.getMinutes()  + 1) + ':' + (tanggal.getSeconds()+1));
}
else if ((tanggal.getMinutes()+1)>10 && (tanggal.getSeconds()+1)<10){
    console.log('pukul' + ' ' +(tanggal.getHours()  + 1) + ':' + (tanggal.getMinutes()  + 1) + ':' + (tanggal.getSeconds()+1));
}
else {
console.log('pukul' + ' ' +(tanggal.getHours()  + 1) + ':' + (tanggal.getMinutes()  + 1) + ':' + (tanggal.getSeconds()+1))
}

//SOLVE IT 13

let berat = 67;
let tinggiBadan = 1.73;
let IMT = berat / (tinggiBadan**2);

console.log('Massa ' + berat +' kg & tinggi ' + tinggiBadan + 'm');

if(IMT<18.5){
    console.log('IMT = ' + IMT + ', ' + 'berat badan anda KURANG.')
}
else if(IMT>18.5 && IMT<24.9){
    console.log('IMT = ' + IMT + ', ' + 'berat badan anda IDEAL')
}
else if(IMT>25.0 && IMT<29.9){
    console.log('IMT = ' + IMT + ', ' + 'berat badan anda BERLEBIH')
}
else if(IMT>30.0 && IMT<39.9){
    console.log('IMT = ' + IMT + ', ' + 'berat badan anda SANGAT BERLEBIH')
}
else {
    console.log('IMT = ' + IMT + ', ' + 'ANDA OBSESITAS!!')
}