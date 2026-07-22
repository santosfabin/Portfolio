const githubUsername = 'santosfabin';

document.addEventListener('DOMContentLoaded', () => {
	const img = document.getElementById('profile-pic-img');
	if (img) {
		img.src = `https://github.com/${githubUsername}.png?t=${Date.now()}`;
		img.alt = 'Foto de Fabiano Vieira dos Santos';
	}

	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());

	const toggle = document.querySelector('.nav-toggle');
	const menu = document.getElementById('nav-menu');
	if (toggle && menu) {
		const setOpen = open => {
			menu.classList.toggle('is-open', open);
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
			toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
		};

		toggle.addEventListener('click', () => {
			setOpen(!menu.classList.contains('is-open'));
		});

		menu.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => setOpen(false));
		});
	}

	const listToggle = document.getElementById('projects-list-toggle');
	const listPanel = document.getElementById('panel-more-projects');
	const listLabel = document.querySelector('.projects-toggle__label');
	const listIcon = document.querySelector('.projects-toggle__icon');
	if (listToggle && listPanel && listLabel && listIcon) {
		const setListOpen = open => {
			listPanel.hidden = !open;
			listToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
			listLabel.textContent = open
				? 'Ver menos experimentos'
				: 'Ver experimentos';
			listIcon.classList.toggle('fa-chevron-down', !open);
			listIcon.classList.toggle('fa-chevron-up', open);
		};
		listToggle.addEventListener('click', () => {
			setListOpen(listPanel.hidden);
		});
	}
});
