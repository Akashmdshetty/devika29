// 🧡 Your name (for validation)
const correctName = "aakash"; // Change this to your real name (lowercase)

// 💌 Your photo and caption data
const photos = [
  {
    src: "image1.jpg.jpg",
    caption: "Never thought we would get close in a place like that.It was the begining of our never ending bueatiful journey."
  },
  {
    src: "image2.jpg.jpg",
    caption: "It was not even a proper proposal but just a line it took to do the job.At the begining I thought it would be just a childrens play which will last for a max 6months but look at us standing after 3 years and act like it was just 3 days"
  },
  {
    src: "image3.jpg.jpg",
    caption: "All the small small things you done for me that's all it took me to fall harder for you.Never forgotten not even the smallest thing you did for me. "
  },
  {
    src: "image4,jpg.jpg",
    caption: "Never got chance to tell you that i have spent all my luck only on you.That's reason why i got the perfect lady ever born. "
  },
  {
    src: "image5.jpg.jpg",
    caption: "Every second of my life I will be praying to god that we would spend our whole life together.The things i have to tell you is never stoping but it's the last picture here even though i got a lot pictures left in my phone."
  }
];

let currentPhoto = 0;

// 🧠 Validate name and show gallery
function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  const errorMsg = document.getElementById("errorMsg");

  if (input === correctName.toLowerCase()) {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("galleryScreen").style.display = "block";
    loadPhoto(currentPhoto);
  } else {
    errorMsg.textContent = "Hmm... try again! 😉";
  }
}

// 📷 Load a photo and caption
function loadPhoto(index) {
  const photo = document.getElementById("photo");
  const caption = document.getElementById("caption");
  const nextBtn = document.getElementById("nextBtn");

  photo.src = photos[index].src;
  caption.textContent = photos[index].caption;
  photo.style.display = "none";
  caption.style.display = "none";

  // Reset envelope
  const envelope = document.querySelector(".envelope");
  envelope.classList.remove("open");

  nextBtn.style.display = "none";
}

// 💌 Open the envelope and reveal photo
function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  const photo = document.getElementById("photo");
  const caption = document.getElementById("caption");
  const nextBtn = document.getElementById("nextBtn");

  // Delay showing content for effect
  setTimeout(() => {
    photo.style.display = "block";
    caption.style.display = "block";
    nextBtn.style.display = "inline-block";
  }, 600);
}

// 👉 Next photo or go to love letter
function nextPhoto() {
  currentPhoto++;

  if (currentPhoto < photos.length) {
    loadPhoto(currentPhoto);
  } else {
    // Show love letter
    document.getElementById("galleryScreen").style.display = "none";
    document.getElementById("loveLetterScreen").style.display = "block";
  }
}

// 💌 Show final message
function showFinalMessage() {
  document.getElementById("loveLetterScreen").style.display = "none";
  document.getElementById("finalScreen").style.display = "block";
}
