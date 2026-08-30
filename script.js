document.addEventListener('DOMContentLoaded', () => {
  // Atualiza o ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Menu Mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };

    toggle.addEventListener('click', () => {
      setOpen(!menu.classList.contains('is-open'));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });
  }

  // Sanfona de Outros Projetos
  const listToggle = document.getElementById('projects-list-toggle');
  const listPanel = document.getElementById('panel-more-projects');
  const listLabel = document.querySelector('.projects-toggle__label');
  const listIcon = document.querySelector('.projects-toggle__icon');
  if (listToggle && listPanel && listLabel && listIcon) {
    const setListOpen = (open) => {
      listPanel.hidden = !open;
      listToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      listLabel.textContent = open
        ? 'Ver menos projetos'
        : 'Ver outros projetos';
      listIcon.classList.toggle('fa-chevron-down', !open);
      listIcon.classList.toggle('fa-chevron-up', open);
    };
    listToggle.addEventListener('click', () => {
      setListOpen(listPanel.hidden);
    });
  }

  // Sanfona de Outros Certificados
  const certToggle = document.getElementById('certs-list-toggle');
  const certPanel = document.getElementById('panel-more-certs');
  const certLabel = document.querySelector('.certs-toggle__label');
  const certIcon = document.querySelector('.certs-toggle__icon');
  if (certToggle && certPanel && certLabel && certIcon) {
    const setCertOpen = (open) => {
      certPanel.hidden = !open;
      certToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      certLabel.textContent = open
        ? 'Ver menos certificados'
        : 'Ver outros certificados';
      certIcon.classList.toggle('fa-chevron-down', !open);
      certIcon.classList.toggle('fa-chevron-up', open);
    };
    certToggle.addEventListener('click', () => {
      setCertOpen(certPanel.hidden);
    });
  }
});
