document.addEventListener('DOMContentLoaded', () => {

    document.documentElement.classList.add('scroll-smooth');

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    function toggleMobileMenu() {
        mobileMenu?.classList.toggle('hidden');
    }

    mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

    document.querySelectorAll('[data-mobile-menu-link]').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
        });
    });

    document.querySelectorAll('[data-filter-category]').forEach(button => {
        button.addEventListener('click', () => {
            filterWorkshops(button.dataset.filterCategory);
        });
    });

    document.querySelectorAll('[data-workshop-details]').forEach(button => {
        button.addEventListener('click', () => {
            openWorkshopDetails(button.dataset.workshopDetails, button);
        });
    });

});

const workshopDetailsModal = document.getElementById('workshopDetailsModal');
const workshopDetailsTitle = document.getElementById('workshopDetailsTitle');
const workshopDetailsContent = document.getElementById('workshopDetailsContent');
const closeWorkshopDetailsButton = document.getElementById('closeWorkshopDetails');
const workshopDetailsBackdrop = workshopDetailsModal?.querySelector('.modal-backdrop');
let workshopDetailsTrigger = null;

function openWorkshopDetails(templateId, trigger) {
    const detailsTemplate = document.getElementById(templateId);
    const workshopCard = trigger.closest('.workshop-card');
    const title = workshopCard?.dataset.modalTitle
        || workshopCard?.querySelector('h3')?.textContent
        || trigger.dataset.workshopTitle;

    if (!detailsTemplate || !workshopDetailsModal || !workshopDetailsTitle || !workshopDetailsContent || !title) {
        console.error(`No se pudieron cargar los detalles del taller "${templateId}".`);
        return;
    }

    workshopDetailsTrigger = trigger;
    workshopDetailsTitle.textContent = title;
    workshopDetailsContent.replaceChildren(detailsTemplate.content.cloneNode(true));
    workshopDetailsModal.classList.remove('hidden');
    workshopDetailsModal.classList.add('flex');
    workshopDetailsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeWorkshopDetailsButton?.focus();
    
}

const workshopCardAnimations = new WeakMap();

function filterWorkshops(category) {
    document.querySelectorAll('.filter-btn').forEach(button => {
        const isActive = button.dataset.filterCategory === category;
        button.classList.toggle('bg-slate-900', isActive);
        button.classList.toggle('text-white', isActive);
        button.classList.toggle('bg-white', !isActive);
        button.classList.toggle('text-slate-700', !isActive);
    });

    document.querySelectorAll('.workshop-card').forEach(card => {
        const shouldShow = category === 'all' || card.dataset.category === category;
        const previousAnimation = workshopCardAnimations.get(card);
        if (previousAnimation) {
            previousAnimation.animation.cancel();
            card.style.transition = previousAnimation.originalTransition;
            workshopCardAnimations.delete(card);
        }

        if (shouldShow) {
            if (card.hidden) {
                card.hidden = false;
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

                const originalTransition = card.style.transition;
                card.style.transition = 'none';
                const animation = card.animate(
                    [
                        { opacity: 0, transform: 'translateY(0.5rem) scale(0.98)' },
                        { opacity: 1, transform: 'translateY(0) scale(1)' },
                    ],
                    { duration: 250, easing: 'ease-out' },
                );
                workshopCardAnimations.set(card, { animation, originalTransition });
                animation.onfinish = () => {
                    if (workshopCardAnimations.get(card)?.animation !== animation) return;
                    card.style.transition = originalTransition;
                    workshopCardAnimations.delete(card);
                };
            }
            return;
        }

        if (card.hidden) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            card.hidden = true;
            return;
        }

        const originalTransition = card.style.transition;
        card.style.transition = 'none';
        const animation = card.animate(
            [
                { opacity: 1, transform: 'translateY(0) scale(1)' },
                { opacity: 0, transform: 'translateY(0.5rem) scale(0.98)' },
            ],
            { duration: 250, easing: 'ease-in' },
        );
        workshopCardAnimations.set(card, { animation, originalTransition });
        animation.onfinish = () => {
            if (workshopCardAnimations.get(card)?.animation !== animation) return;
            card.hidden = true;
            card.style.transition = originalTransition;
            workshopCardAnimations.delete(card);
        };
    });
}

function closeWorkshopDetails() {
    if (!workshopDetailsModal || !workshopDetailsContent) return;

    workshopDetailsModal.classList.add('hidden');
    workshopDetailsModal.classList.remove('flex');
    workshopDetailsModal.setAttribute('aria-hidden', 'true');
    workshopDetailsContent.replaceChildren();
    document.body.style.overflow = '';
    workshopDetailsTrigger?.focus(); 
}

closeWorkshopDetailsButton?.addEventListener('click', closeWorkshopDetails);
workshopDetailsBackdrop?.addEventListener('click', closeWorkshopDetails);

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && workshopDetailsModal && !workshopDetailsModal.classList.contains('hidden')) {
        closeWorkshopDetails();
    }
}); 