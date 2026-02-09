// --- Foto do perfil ---
document.addEventListener('DOMContentLoaded', () => {
  const githubUsername = 'santosfabin';
  const imgElement = document.getElementById('profile-pic-img');
  if (imgElement) {
    imgElement.src = `https://github.com/${githubUsername}.png?t=${new Date().getTime()}`;
  }
});

// --- Carrossel com loop infinito e modal ---
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let imagesPerView;
  let slideWidth;
  let currentIndex;
  let allowShift = true;

  function getImagesPerView() {
    return window.innerWidth > 768 ? 3 : 1;
  }

  function setupCarousel() {
    // Remove clones antigos
    track.querySelectorAll('.clone').forEach(c => c.remove());

    const originals = Array.from(track.querySelectorAll('img')).filter(
      img => !img.classList.contains('clone')
    );
    imagesPerView = getImagesPerView();

    // Clona últimas imagens para o começo
    for (let i = originals.length - imagesPerView; i < originals.length; i++) {
      const clone = originals[i].cloneNode(true);
      clone.classList.add('clone');
      track.insertBefore(clone, track.firstChild);
    }

    // Clona primeiras imagens para o fim
    for (let i = 0; i < imagesPerView; i++) {
      const clone = originals[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }

    const allImages = track.querySelectorAll('img');

    // Largura que a track precisa ter
    track.style.width = `${(allImages.length / imagesPerView) * 100}%`;

    // Largura de cada imagem (proporcional ao total de imagens)
    const imgWidthPercent = 100 / allImages.length;

    allImages.forEach(img => {
      img.style.flex = `0 0 ${imgWidthPercent}%`;
      img.style.width = `${imgWidthPercent}%`;
      img.style.cursor = 'pointer';
    });

    slideWidth = (100 / allImages.length) * imagesPerView; // % que desliza ao avançar 1 imagem

    currentIndex = imagesPerView;
    setTranslate(false);
  }

  function setTranslate(animate = true) {
    if (animate) {
      track.style.transition = 'transform 0.5s ease';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${
      currentIndex * (100 / track.querySelectorAll('img').length)
    }%)`;
  }

  function nextSlide() {
    if (!allowShift) return;
    allowShift = false;
    currentIndex++;
    setTranslate(true);
  }

  function prevSlide() {
    if (!allowShift) return;
    allowShift = false;
    currentIndex--;
    setTranslate(true);
  }

  track.addEventListener('transitionend', () => {
    const allImages = track.querySelectorAll('img');
    const originalsCount = allImages.length - 2 * imagesPerView;

    if (currentIndex >= originalsCount + imagesPerView) {
      // Se passou do último clone, volta para o real
      currentIndex = imagesPerView;
      setTranslate(false);
    }

    if (currentIndex < imagesPerView) {
      // Se passou do primeiro clone, pula pro final real
      currentIndex = originalsCount + imagesPerView - 1;
      setTranslate(false);
    }

    allowShift = true;
  });

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  }

  window.addEventListener('resize', () => {
    setupCarousel();
  });

  setupCarousel();

  // --- Modal de imagem grande ---
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.querySelector('.close-modal');

  track.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      modal.classList.add('active');
      modalImg.src = e.target.src;
      modalImg.alt = e.target.alt;
    }
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImg.src = '';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modalImg.src = '';
    }
  });
});
