
let randomNumber;

// Fungsi untuk menghasilkan angka acak
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tampilkanAngkaAcak() {
  randomNumber = getRandomNumber(1, 10); 
  document.getElementById('angka').value = randomNumber; 
  resetIndicators(); 
  document.getElementById('angka').style.backgroundColor = 'black'; 
  document.getElementById('angka').style.color = 'black'; 
}

function cekJawaban() {
  const jawaban = parseInt(document.getElementById('jawaban').value); 
  const selisih = Math.abs(jawaban - randomNumber);

  resetIndicators(); 

  if (!isNaN(jawaban)) {
    
    if (selisih === 0) {
      
      tampilkanIndikator(true, true, true); 
      document.getElementById('angka').style.color = 'white'; 
    } else if (selisih <= 2) {
      tampilkanIndikator(true, true, false);
    } else{
      tampilkanIndikator(true, false, false); 
    }
  }
}

function tampilkanIndikator(merah, kuning, hijau) {
  if (merah) document.getElementById('merah').style.backgroundColor = 'red';
  if (kuning) document.getElementById('kuning').style.backgroundColor = 'yellow';
  if (hijau) document.getElementById('hijau').style.backgroundColor = 'green';
}

function resetIndicators() {
  document.getElementById('merah').style.backgroundColor = 'lightgray';
  document.getElementById('kuning').style.backgroundColor = 'lightgray';
  document.getElementById('hijau').style.backgroundColor = 'lightgray';
}