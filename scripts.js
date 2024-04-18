// Daftar warna yang akan digunakan
const colors = ["#A7A5C6", "##8797B2", "#6D8A96", "#5D707F", "#66CED6"];
let index = 0;

// Fungsi untuk mengubah warna latar belakang setiap beberapa detik
function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

// Panggil fungsi setiap 2 detik (2000 milidetik)
setInterval(changeBackgroundColor, 2000);

// percobaan
const projects = [
  {
    title: "CIPTA NIRMALA GROUP RS SEMEN GRESIK KLINIK SEMEN GRESIK (PTCN)",
    year: "Januari 2023",
    role: "Front-end Mobile Developer",
    description:
      "Aplikasi dengan sebutan PTCN ini merupakan aplikasi Rumah Sakit Semen Gresik- Klinik Semen Gresik berbasis mobile yang berjalan pada platform Android. Aplikasi tersebut menyediakan beberapa layanan yang dapat membantu pasien untuk mendapatkan pelayanan medis dari Rumah Sakit dengan mudah. Sebagaimana menu-menu pada Home menyediakan informasi Jadwal Dokter, Informasi Kesehatan, Pengambilan nomor antrian, Medical CheckUp dan beberapa fitur lainya. Dibangunya aplikasi ini diharapkan pengguna dapat mengambil antrian maupun melakukan pembayaran, mendapat informasi jadwal dokter tanpa harus datang ke Rumah Sakit terlebih dahulu.",
    images: [
      "images/p1_1.png",
      "images/p1_2.png",
      "images/p1_3.png",
      "images/p1_4.png",
      "images/p1_5.png",
      "images/p1_6.png",
    ],
    link: "https://drive.google.com/drive/u/3/folders/1msNy4Rk1KGpAuYhXwRpsADA2OA6eUyig",
  },
  {
    title:
      "DINAS PENANAMAN MODAL PELAYANAN TERPADU SATU PINTU DAN TENAGA KERJA (DPMPTSP)",
    year: "Agustus 2023",
    role: "Front-end Mobile(Android) Developer",
    description:
      "Aplikasi dengan sebutan DPMPTSP ini merupakan aplikasi monitoring kerja yang dikembangkan untuk kebutuhan para pekerja di Dinas Penanaman Modal Pelayanan Terpadu Satu Pintu Dan Tenaga Kerja di Kota Mojokerto. Aplikasi ini membantu pekerja dalam hal absensi dan pelaporan pekerjaan sebelum dan sesudah selesai dikerjakan. Selain itu dengan dibangunya aplikasi ini admin dapat meminitoring pekerjaan pekerja/karyawan dengan lebih mudah.",
    images: [
      "images/p2_1.png",
      "images/p2_2.png",
      "images/p2_3.png",
      "images/p2_4.png",
    ],
    link: "https://drive.google.com/drive/u/3/folders/1Coc9OZbbSCNfgK2dWcyX__i1XjyO4VXH",
  },
  {
    title: "Latansa Brownies (UMKM- Lumajang)",
    year: "2022",
    role: "Front-end Web Developer",
    description:
      "Project ini merupakan Mini Project Award ITPreneur Work In Tech Indonesia. Landing Page dikembangkan berdasarkan kebutuhan UMKM Latansa Brownies yang ada di Lumajang yang mengeluhkan sulitnya memperkenalkan usaha brownies kukus miliknya ke konsumen di seluruh Indonesia. Adapun Landing Page memiliki beberapa menu seperti: katalog produk yang memperkenalkan aneka brownies, menu unggulan, menu Tentang Kami dan menu utama yaitu Home yang menyediakan fitur direct via Whatsapp apabila konsumen ingin memesan brownies kukus kepada Latansa Brownies. Pada Landing Page ini juga memberikan informasi terkait alamat umkm pada maps.",
    images: [
      "images/p3_1.png",
      "images/p3_2.png",
      "images/p3_3.png",
      "images/p3_4.png",
    ],
    link: "https://evlstari.github.io/latansaBrownies/",
  },
  {
    title: "CRUD Menggunakan JavaScript",
    year: "2023",
    role: "Front-end Web Developer",
    description:
      "Project ini merupakan salah satu task saya sewaktu mengikuti bootcamp Fundamental Software Engineering yang diselenggarakan oleh RevoU selama dua minggu. Project sederhana ini mensimulasikan bagaimana membuat aplikasi CRUD hanya menggunakan JavaScript tanpa database. Project ini lebih menekankan implementasi css, html serta JavaScript sebagai fundamental dalam mempelajari ilmu Software Engineering sehingga fitur dan tampilanya tergolong sangat sederhana",
    images: [
      "images/p4_1.png",
      "images/p4_2.png",
      "images/p4_3.png",
      "images/p4_4.png",
    ],
    link: "https://evlstari.github.io/websitePertama/",
  },
  {
    title: "CRUD database local XAMPP mysql dengan flutter",
    year: "2023",
    role: "Front-end Mobile(Android) Developer",
    description:
      "Project ini merupakan salah satu project saya pribadi untuk mengembangkan diri bermain dengan data dan API. Project ini mengimplementasikan fitur stack dan canvas pada bahasa Dart untuk memperoleh UI yang diinginkan seperti CRUD data mahasiswa di samping",
    images: [
      "images/p5_1.png",
      "images/p5_2.png",
      "images/p5_3.png",
      "images/p5_4.png",
      "images/p5_5.png",
      "images/p5_6.png",
    ],
    link: "https://github.com/evlstari/CRUD-mysqli-with-flutter",
  },
];

const popupBox = document.getElementById("popupBox");
const close = document.querySelector(".close");
const popupImage = document.getElementById("popupBoximg");
const blurContent = document.querySelector(".content-left");
const blurContent2 = document.querySelector(".content-right");
const publicationLink = document.getElementById("popUplink");
let currentProjectIndex = 0;
let currentImageIndex = 0;

function openPopup(projectIndex, imageIndex) {
  currentProjectIndex = projectIndex;
  currentImageIndex = imageIndex;
  const project = projects[projectIndex];
  popupImage.src = project.images[imageIndex];
  document.getElementById("popupBox__title").innerText = project.title;
  document.getElementById("popupBox__year").innerText = project.year;
  document.getElementById("popupBox__role").innerText = project.role;
  document.getElementById("popupBox__description").innerText =
    project.description;
  publicationLink.href = project.link; // Mengatur link URL pada elemen <a>
  publicationLink.textContent = "Publication Link :";
  popupBox.style.display = "block";
  blurContent.classList.add("blur-effect");
  blurContent2.classList.add("blur-effect");
}

function closePopup() {
  popupBox.style.display = "none";
  blurContent.classList.remove("blur-effect");
  blurContent2.classList.remove("blur-effect");
}

function nextImage() {
  const project = projects[currentProjectIndex];
  currentImageIndex = (currentImageIndex + 1) % project.images.length;
  popupImage.src = project.images[currentImageIndex];
}

function previousImage() {
  const project = projects[currentProjectIndex];
  currentImageIndex =
    (currentImageIndex - 1 + project.images.length) % project.images.length;
  popupImage.src = project.images[currentImageIndex];
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    previousImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
});

document.getElementById("openPopup").addEventListener("click", function () {
  openPopup(0, 0); 
});

document.getElementById("openPopup2").addEventListener("click", function () {
  openPopup(1, 0); 
});
document.getElementById("openPopup3").addEventListener("click", function () {
  openPopup(2, 0); 
});
document.getElementById("openPopup4").addEventListener("click", function () {
  openPopup(3, 0); 
});
document.getElementById("openPopup5").addEventListener("click", function () {
  openPopup(4, 0); 
});
