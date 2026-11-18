document.addEventListener('DOMContentLoaded', () => {
  // Textos que dependem do idioma da página (definido no <html lang>)
  const lang = document.documentElement.lang.toLowerCase().startsWith('en')
    ? 'en'
    : 'pt-BR';

  const strings = {
    'pt-BR': {
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      projectsMore: 'Ver outros projetos',
      projectsLess: 'Ver menos projetos',
      certsMore: 'Ver outros certificados',
      certsLess: 'Ver menos certificados',
    },
    en: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      projectsMore: 'View other projects',
      projectsLess: 'View fewer projects',
      certsMore: 'View other certificates',
      certsLess: 'View fewer certificates',
    },
  };

  const t = strings[lang];

  // Atualiza o ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Nav flutuante que cola no topo ao rolar
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    const updateNav = () => {
      siteNav.classList.toggle('is-stuck', window.scrollY > 8);
    };
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  // Menu Mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? t.closeMenu : t.openMenu);
    };

    toggle.addEventListener('click', () => {
      setOpen(!menu.classList.contains('is-open'));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    setOpen(false);
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
      listLabel.textContent = open ? t.projectsLess : t.projectsMore;
      listIcon.classList.toggle('fa-chevron-down', !open);
      listIcon.classList.toggle('fa-chevron-up', open);
    };
    listToggle.addEventListener('click', () => {
      setListOpen(listPanel.hidden);
    });
    setListOpen(false);
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
      certLabel.textContent = open ? t.certsLess : t.certsMore;
      certIcon.classList.toggle('fa-chevron-down', !open);
      certIcon.classList.toggle('fa-chevron-up', open);
    };
    certToggle.addEventListener('click', () => {
      setCertOpen(certPanel.hidden);
    });
    setCertOpen(false);
  }
});
