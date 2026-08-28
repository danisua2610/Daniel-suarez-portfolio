document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const gallery = document.getElementById("photo-gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");

  if (gallery && lightbox && lightboxImage) {
    gallery.addEventListener("click", (event) => {
      const image = event.target.closest("img");
      if (!image) return;
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      document.body.style.overflow = "";
    };

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target === lightboxClose) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }
});