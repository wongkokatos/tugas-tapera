function a() {
    let myImage = document.getElementById("image");
    myImage.setAttribute('src' , './asset/asset/pic_bulbon.gif');
}

function b() {
    let myImage = document.getElementById("image");
    myImage.setAttribute('src' , './asset/asset/pic_bulboff png.gif' );
}
let i=1;
console.log();
do {
    if ( i % 2 === 0 ){
console.log("jumlah bilangan genap " + i)}
    else {
    console.log("jumlah bilangan ganjil " + i);}

i++
} 
while (

    i <= 30); 



for (let i = 1; i < 31; i++) {

    if ((i % 3==0)&& i % 5==0)
         {
        console.log("fizzbuzz");
    }

   else if  (i % 3==0) {
       console.log("fizz");
    }

     else if (i % 5==0) {
        console.log("buzz");
    
     }
     else
     console.log(i);  
}
function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));

function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(5));