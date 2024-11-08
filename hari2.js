// switch case
let hari = 900000000000000;
switch (hari) {
    case 1:
      console.log("Senin");
      break;
    case 2:
      console.log("Selasa");
      break;
    case 3:
      console.log("Rabu");
      break;
    case 4:
      console.log("Kamis");
      break;
    case 5:
      console.log("Jumat");
      break;
    case 6:
      console.log("Sabtu");
      break;
    case 7:
      console.log("Minggu");
      break;
    default:
      console.log("Tidak Ada Hari Ke " + hari);
      break;
  }

//for loop
 for (let i = 0; i < 11; i++) {
    console.log(i);
 }

//do while
let d = 0;
do {
    console.log(d);

    d++;
} while (d < 11);

// function
function myfunction() {
    alert("WOII!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
}

function myfunction() {
for (let i = 0; i < 11; i++) 
    console.log(i);
 }

 //Dom
 document.getElementById("name").innerHTML = "Gresini VS Lenovo";

 let myImage = document.getElementById("image");
 myImage.setAttribute('src' , './asset/asset/marc-marquez-1_169.jpeg');
 
 let css = document.getElementById("name");
 css.style.textAlign = 'center';
 css.style.marginLeft = `px`;