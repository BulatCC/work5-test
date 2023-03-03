const burger = document.querySelector('.js-burger');
const navMenu = document.querySelector('.js-nav-menu');
const sideMenuContainer = document.querySelector('.js-side-menu');

export const navMenuToggle = () => {
    const handleCloseMenu = (evt) => {
        if (evt.target.classList.contains('js-side-menu')) {
            navMenu.classList.remove('active');
            sideMenuContainer.classList.remove('active');
            burger.classList.remove('burger--active');
            sideMenuContainer.removeEventListener('click', handleCloseMenu);
        }
    };

    const handleOpenMenu = (evt) => {
        if (evt.target.closest('.js-burger')) {
            navMenu.classList.toggle('active');
            sideMenuContainer.classList.toggle('active');
            burger.classList.toggle('burger--active');
            sideMenuContainer.addEventListener('click', handleCloseMenu);
        }

    };

    burger.addEventListener('click', handleOpenMenu);
};
