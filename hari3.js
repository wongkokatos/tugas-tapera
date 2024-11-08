//Array
let angka = [1 , 2 , 3 , 4 , 5]
let buah = [`manggis` , `mangga` , `melon` , `pepaya` , `pisang`];
 
//Mengambil semua data Array
console.log(buah);

// Mengambil salah satu data di Array
console.log(buah[2]);

// Menambah data di terakhir  array
angka.push(6);
console.log(angka);

// Menambah data di awal array
buah.unshift("pisang")
console.log(buah);


// Menghapus data terakhir di array
angka.pop();
console.log(angka);

// Menghapus data pertama di array
buah.shift()
console.log(buah);

// Menghitung jumlah data di array
console.log(buah.length);

// For each
buah.forEach(function(item , index){
    console.log(index , item);
})

// Call back
function getData(callback) {
    setTimeout(async () => {
      const API = await fetch(
        "https://fortunate-burnt-sweatshirt.glitch.me/user/3"
      );
      const data = await API.json();
      callback(data)
    }, 3000);
  }
  
  function displayData(data) {
      console.log(data);
  }
  getData(displayData);

  // Promise
let promise = new Promise((resolve , reject) => {
    let succes = true;
    setTimeout(() => {
        if (succes) {
            resolve("Operasi Berhasil");
        } else {
            reject("Operasi Gagal");
        }
    }, 3000);
});

promise.then((message) => {
    console.log(message); 
}).catch((error) => {
    console.log(error);
})

async function fecthData(){
    try{
        const data = await getDataId();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}
