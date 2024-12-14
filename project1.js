let i = 0;
const txt = 'Welcome!!';
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();