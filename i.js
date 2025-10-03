let umur = parseInt(prompt("Masukkan umur  Kamu:")); 

 if  ( umur <= 0) {
     alert("Belum lahir");

 } else if  ( umur <= 1) {
     alert("kamu bayi");

 } else if (umur < 3) {
     alert("kamu batita");

 } else if (umur < 5) {
     alert("kamu balita");

 } else if (umur < 12) {
     alert("kamu anak-anak");

 } else if (umur <= 17) {
     alert("kamu remaja");

 } else if (umur < 30) {
     alert("kamu pemuda");

 } else if (umur < 60) {
     alert("kamu dewasa");

 } else  if ( umur > 60){
     alert("kamu lansia");

 }    else {
     alert("tidak valid")
 }