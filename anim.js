// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "This is the first day of my life", time: 9 },
  { text: "Swear I was born right in the doorway", time: 13 },
  { text: "I went out in the rain, suddenly everything changed", time: 19 },
  { text: "They're spreading blankets on the beach", time: 22 },
  { text: "Yours was the first face that I saw", time: 30 },
  { text: "I think I was blind before I met you", time: 34 },
  { text: "And I don't know where I am, I don't know where I've been", time: 41 },
  { text: "But I know where I want to go", time: 43 },
  { text: "And so I thought I'd let you know", time: 50 },
  { text: "Yeah, these things take forever, I especially am slow", time: 55 },
  { text: "But I realized that I need you", time: 60 },
  { text: "And I wondered if I could come home", time: 63 },
  { text: "Remember the time you drove all night", time: 79 },
  { text: "Just to meet me in the morning?", time: 82 },
  { text: "And I thought it was strange, you said everything changed", time: 89 },
  { text: "You felt as if you'd just woke up", time: 92 },
  { text: "And you said", time: 95 },
  { text: "This is the first day of my life", time: 97 },
  { text: "I'm glad I didn't die before I met you", time: 105 },
  { text: "But now I don't care, I could go anywhere with you", time: 111 },
  { text: "And I'd probably be happy", time: 115 },
  { text: "So if you wanna be with me", time: 120 },
  { text: "With these things there's no telling", time: 123 },
  { text: "We just have to wait and see", time: 126 },
  { text: "But I'd rather be working for a paycheck", time: 130 },
  { text: "Than waiting to win the lottery, ah-ha, mm-hmm", time: 132 },
  { text: "Besides, maybe this time is different.", time: 140 },
  { text: "I mean, I really think you like me", time: 144 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);