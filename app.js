const myFirstName = 'M.';
const myMiddleName = 'Sulthan';
const myLastName = 'Muzaki';
const myFullName = myFirstName + ' ' + myMiddleName + ' ' + myLastName;
const myFavoriteFood = 'Keju';

console.log('Halo namaku ' + myFullName + ', dan makanan favoritku adalah ' + myFavoriteFood + '.');



const apel = 5000;
const pisang = 10000;
const pembelian = 3 * apel + 2 * pisang;
const diskon = 0.1 * pembelian;
const totalHarga = pembelian - diskon;

console.log('Rudi menjual Apel dan Pisang. Apel berharga Rp. ' + apel + ' dan Pisang berharga Rp. ' + pisang + '. Sulthan membeli 3 Apel dan 2 Pisang menggunakan diskon sebesar 10%. Total harga apel dan pisang setelah diskon adalah Rp. ' + totalHarga + '.');



const hasChild = false;
const isStudent = true;
const isEmployed = false;
const canRideBike = true;
const hasPet = false;
const isTall = false;
const canCook = true;
const hasSiblings = true;
const hasPassport = false;
if (hasPassport) {
    console.log('Sulthan boleh ke luar negeri.');
} else {
    console.log('Sulthan tidak boleh ke luar negeri.');
};
const productOutOfStock = true;
if (productOutOfStock) {
    console.log('Produk sudah habis, maaf ya kidz!');
} else {
    console.log('Produk masih tersedia, jangan ga dibeli yea!');
};



console.log(10 > 5);
console.log(8 < 4);
console.log(-1 >= 2);
console.log(0.5 <= 0);



const abc = 'abc' === 'abc';
const fT = false !== true;
const cabCba = 'cab' === 'cba';
const fF = false === false;
console.log(abc);
console.log(fT);
console.log(cabCba);
console.log(fF);



const numbers = 999;
if (numbers < 10 && numbers === 0) {
    console.log('Satuan');
} else if (numbers < 100) {
    console.log('Puluhan');
} else if (numbers < 1000) {
    console.log('Ratusan');
} else if (numbers > 999) {
    console.log(numbers);
} else {
    console.log('Angka tidak valid');
};



const person = {
    name: 'Sulthan',
    age: 15,
    yearOfBirth: 2011,
    hasJob: false
};

console.log (person.name + ' lahir pada tahun ' + person.yearOfBirth + '.');



const usernames = [
    'Asep',
    'Saipul',
    'Budi'
];  

const newUsername0 = 'Asep';
const isExist = usernames.includes(newUsername0);

if (isExist) {
    console.log('Username ' + newUsername0 + ' sudah ada di grup ini.');
} else {
    console.log('Username ' + newUsername0 + ' belum ada di grup ini.');
};

console.log('Ada total ' + usernames.length + ' username di grup ini, yaitu ' + usernames[0] + ', ' + usernames[1] + ', dan ' + usernames[2] + '.');
console.log(usernames[0]);



const myFavFoods = [
    'Keju',
    'Telur',
    'Kebab'
];

console.log('Makanan favoritku yang kedua adalah ' + myFavFoods[1] + '.');



const merekSepatu = 'Astec';
const merekSepeda = 'Mosso';
const merekMotor = 'Honda';
const merekMobil = 'Xenia';
const merekKapal = null;
const merekPesawat = null;

console.log(
    'Merek sepatu yang aku pakai adalah ' + merekSepatu + 
    ', merek sepeda yang aku pakai adalah ' + merekSepeda + 
    ', merek motor yang aku pakai adalah ' + merekMotor + 
    ', dan merek mobil yang aku pakai adalah ' + merekMobil + '.'
);



function loveFriends(name, SMA) {
    console.log('Aku sayang sekali kepada teman-temanku~ Apalagi ' + name + ' yang udah masuk ' + SMA +' ❤️ 😘');
}
loveFriends('Asep', 'SMA 17');
loveFriends('Saipul', 'SMA 22');
loveFriends('Rani', 'SMA 22');
loveFriends('Sulthan', 'SMK 4');
loveFriends('Kamu', 'SMA 1 Sakura');



function numbersAgain(num) {
    if (num === 0) {
        console.log('Netral');
    } else if (num > 0) {
        console.log('Positif');
    } else {
        console.log('Negatif');
    }
}

numbersAgain(0);
numbersAgain(5);
numbersAgain(-3);



function addXY(x, y) {
    const z = x + y;
    console.log(x + ' + ' + y + ' = ' + z);
}

addXY(5, 10);



function multiplyXY(x, y) {
    return (x * y);
}

const result = multiplyXY(5, 3);
console.log(result);



const sayBye = name => {
    console.log('Bye, ' + name + '!');
};

sayBye('sopo aje')

const add = (x, y) => x + y;

console.log(add(8, 2))


const urName = (name, age) => age + ' adalah umur ' + name;
console.log(urName('Sulthan', 14))