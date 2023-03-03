const body = document.querySelector('body');
const modalButtons = document.querySelectorAll('.js-modal-button');
const modals = Array.from(document.querySelectorAll('.js-modal'));

export const modalInit = (reinit) => {
    if (modalButtons[0] && modals[0]) {
        const initModals = (openModalbutton) => {
            const modalName = openModalbutton.getAttribute('data-modal');
            const modal = modals.find((modalWindow) => {
                if (modalWindow.getAttribute('data-modal') === modalName) {
                    return modalWindow.getAttribute('data-modal') === modalName;
                }
            });

            const closeButton = modal.querySelectorAll('.js-modal-close');
            let scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';

            const closeModal = () => {
                body.style.overflow = null;
                body.style['padding-right'] = null;
                modal.classList.remove('site-modal--active');
                closeButton.forEach((button) => {
                    button.removeEventListener('click', closeModal);
                });
                window.removeEventListener('keydown', handleEscPress);
                modal.removeEventListener('click', handleOverlayClick);
            };

            const openModal = (modalWindow) => {
                body.style.overflow = 'hidden';
                body.style['padding-right'] = scrollbarWidth;
                modalWindow.classList.add('site-modal--active');
                closeButton.forEach((button) => {
                    button.addEventListener('click', closeModal);
                });
                window.addEventListener('keydown', handleEscPress);
                modalWindow.addEventListener('click', handleOverlayClick);
            };

            const handleEscPress = (evt) => {
                if (evt.key === 'Escape') {
                    closeModal();
                }
            };

            const handleOverlayClick = (evt) => {
                if (evt.target.classList.contains('js-modal')) {
                    closeModal();
                }
            };

            openModal(modal);
        };

        modalButtons.forEach((button) => {
            if (button.dataset.isModalInited !== 'true') {
                button.dataset.isModalInited = 'true';
                button.addEventListener('click', () => {
                    initModals(button);
                });
            }
        });

        if (reinit) {
            const modalButtonsReinit = document.querySelectorAll('.js-modal-button');
            modalButtonsReinit.forEach((button) => {
                if (button.dataset.isModalInited !== 'true') {
                    button.dataset.isModalInited = 'true';
                    button.addEventListener('click', () => {
                        initModals(button);
                    });
                }
            });
        }
    }
};

modalInit(false);
