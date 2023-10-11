// inputan variable nama
let nama = prompt("Masukkan Username")

// inputan variable password
let Password = prompt("Masukkan Password")

// variable cek ternary untuk mengecek apakah password sudah benar atau salah
let cek = confirm("apakah sudah benar?")

// variable hasil 
let hasil = Password == "112233" ? "Berhasil" : "Password Salah"

// alert
alert(hasil)
document.getElementsByTagName("h3")[0].innerText = hasil