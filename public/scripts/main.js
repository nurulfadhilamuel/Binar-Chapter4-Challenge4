/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

function search() {
  app.clear();
  document.getElementById("tombol").style.visibility = "hidden";
  const element = document.getElementById("main");
  element.remove();
  document.getElementById("search").style.visibility = "visible";
}

function activeDarkBackground() {
  document.getElementById("filter").style.width = "100%";
}

function inactiveDarkBackground() {
  document.getElementById("filter").style.width = "0";
}

function runSearch() {
  document.getElementById("load-btn").style.width = "0";
  app.init().then(app.run);
}
