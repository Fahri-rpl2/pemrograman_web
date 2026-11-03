//1.operator aritmatika

// + :penjumlahan
// - :pengurangan
// * :perkalian
// / :pembagian
// % :sisa bagi
// **:pangkat

//contohnya:
const angka1 = 10;
const angka2 = 5;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);
console.log(angka1 ** angka2);

//a.operartor modulus
//operator modulus digunakan untuk mendapatkan sisa bagi dari suatu bilangan
const angkah = 10;
const angka2 = angkah % 3 === 0;

console.log(angkah % angka2);

//b.urutan operasi
//operator aritmatika memiliki urutan operasi yang sama seperti matematika
//contohnya:
const hasil = 10 + 5 * 2;
console.log(hasil);

//2.operator perbandingan
//operator perbandingan digunakan untuk membandingkan dua nilai
//operator perbandingan akan menghasilkan nilai boolean (true/false)
//simbol operator perbandingan:
// > :lebih besar dari
// < :lebih kecil dari
// >= :lebih besar dari atau sama dengan
// <= :lebih kecil dari atau sama dengan
// == :sama dengan
// != :tidak sama dengan
// === :sama dengan dan memiliki tipe data yang sama
// !== :tidak sama dengan atau memiliki tipe data yang berbeda
//contohnya:
const nilai = 80;
const lulus = nilai >= 75;

console.log(`Apakah lulus? ${lulus}`);
//perbandian ketat
console.log(10 === "10");//false
console.log(10 !== "10");//true

//#Operasi logika
//operator logika digunakan untuk menggabungkan dua atau lebih pernyataan logika
//operator logika akan menghasilkan nilai boolean (true/false)
//simbol operator logika:
// && :dan
// || :atau
// ! :tidak
//contohnya:
const umur = 80;
const punyaKTP = true;

let bolehMemilih = umur >= 17 && punyaKTP === true;

console.log(`Boleh memilih? ${bolehMemilih}`);


//operator logika OR
const umur1 = 16;
const anggotaKeluarga = true;

const mendapatkanKartuKeluarga = umur1 >= 17 || anggotaKeluarga === true;

console.log(`Mendapatkan kartu keluarga? ${mendapatkanKartuKeluarga}`);

//Operator logika NOT
const sudahMenikah = false;

console.log(!sudahMenikah);//true
/*===================================================*/

const sudahlogin = true;

if (!sudahlogin) {
    console.log("Silahkan login terlebih dahulu");
}

//4.operator Penugasan
//simbol operator penugasan:
// = :sama dengan
// += :ditambah dengan
// -= :dikurangi dengan
// *= :dikalikan dengan
// /= :dibagi dengan