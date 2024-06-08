
const lightbox = document.getElementById("lightbox");
const images = document.querySelectorAll(".gallery .card img");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".close-btn");
const lightboxPrev = document.querySelector(".prev");
const lightboxNext = document.querySelector(".next");
const cards = document.querySelectorAll('.card');

const cardElements = [];
let currentIndex = 0;

for (let i = 0; i < cards.length; i++) {
  cardElements.push(cards[i]);
}

function openLightbox(index) {
  currentIndex = index;
  lightboxImage.src = galleryItems[index].querySelector("img").src;
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function changeImage(delta) {
  currentIndex = (currentIndex + delta + images.length) % images.length;
  showImage(currentIndex);
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function navigate(direction) {
  const lastIndex = galleryItems.length - 1;
  currentIndex =
    (direction === "next" ? currentIndex + 1 : currentIndex - 1) %
    (direction === "next" ? lastIndex + 1 : lastIndex - 1 + 1);
  lightboxImage.src = galleryItems[currentIndex].querySelector("img").src;
}

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
  });
});

closeButton.addEventListener("click", closeLightbox);
prevButton.addEventListener("click", () => navigate("prev"));
nextButton.addEventListener("click", () => navigate("next"));

cardElements[0].addEventListener('click',openLightbox(0));
cardElements[1].addEventListener('click',openLightbox(1));
cardElements[2].addEventListener('click',openLightbox(2));
cardElements[3].addEventListener('click',openLightbox(3));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
    closeLightbox();
  } else if (
    e.key === "ArrowLeft" &&
    !lightbox.classList.contains("hidden")
  ) {
    navigate("prev");
  } else if (
    e.key === "ArrowRight" &&
    !lightbox.classList.contains("hidden")
  ) {
    navigate("next");
  }
})




