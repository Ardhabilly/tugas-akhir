// tambah data
var addModal = document.getElementById("myModal");
var editModal = document.getElementById("editModal");
let nama = document.getElementById("nama");
let nim = document.getElementById("nim");
let prodi = document.getElementById("prodi");


// closes/keluar
var span = document.getElementsByClassName("close");


// tombol membuka tambah data
btnTambah.onclick = function() {
  addModal.style.display = "block";
}


// tombol x keluar dari tambah data
span[0].onclick = function() {
  nama.value = "";
  nim.value = "";
  prodi.value = "";
  addModal.style.display = "none";
}


span[1].onclick = function() {
    nama.value = "";
    nim.value = "";
    prodi.value = "";
    editModal.style.display = "none";
  }


// ketika pengguna menekan di mana saja di luar dari tambah data maka akan keluar
window.onclick = function(event) {
  if (event.target == addModal || event.target == editModal) {
    nama.value = "";
    nim.value = "";
    prodi.value = "";
    addModal.style.display = "none";
    editModal.style.display = "none";
  }
}


var submit = document.getElementById("submit")
submit.onclick = ()=>{
    addModal.style.display = "none";
}

// Logout
function Logout (){
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('fullname');
  sessionStorage.removeItem('password');
  
  localStorage.removeItem('username');
  localStorage.removeItem('fullname');
  localStorage.removeItem('password');
  
  localStorage.removeItem('keepLoggedIn');
  window.location ='landing page.html'
}