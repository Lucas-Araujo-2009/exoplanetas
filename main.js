var carde = document.getElementById("Informacoes");
var divPai = document.getElementById("container-pai");

carde.addEventListener("click", function() {
  
  divPai.innerHTML += `
      <p>O que são exoplanetas.</p>
      <p>Os primeiros descobertos.</p>
      <p>Métodos de encontrar exoplanetas.</p>
      <p>Tipos de exoplanetas e suas características.</p>
      `;
});

const video = document.getElementById('video');
video.playbackRate = 0.6;

var planets = document.getElementsByClassName('.planeta1');

function Redirection(){
    window.location.href = "https://exoplanets.nasa.gov/eyes-on-exoplanets/#/planet/KELT-9_b/";
}

function Redirection2(){
  window.location.href = "https://exoplanets.nasa.gov/eyes-on-exoplanets/#/planet/HAT-P-26_b/";
}

function Redirection3(){
  window.location.href = "https://exoplanets.nasa.gov/eyes-on-exoplanets/#/planet/55_Cnc_e/";
}

function Redirection4(){
  window.location.href = "https://exoplanets.nasa.gov/eyes-on-exoplanets/#/planet/TRAPPIST-1_e/";
}