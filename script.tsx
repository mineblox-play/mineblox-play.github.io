let audioFile: File | null = null;
let audioElement: HTMLAudioElement | null = null;

const uploadBtn = document.getElementById("uploadBtn") as HTMLButtonElement;
const fileInput = document.getElementById("fileInput") as HTMLInputElement;
const playBtn = document.getElementById("playBtn") as HTMLButtonElement;

uploadBtn.addEventListener("click", () => {
  fileInput.click(); // open file picker
});

fileInput.addEventListener("change", () => {
  audioFile = fileInput.files?.[0] || null;
  if (audioFile) {
    console.log("Selected audio:", audioFile.name);

    // Create an audio element with the selected file
    const url = URL.createObjectURL(audioFile);
    audioElement = new Audio(url);
  }
});

playBtn.addEventListener("click", () => {
  if (audioElement) {
    audioElement.play();
  } else {
    alert("Please upload an audio file first!");
  }
});
