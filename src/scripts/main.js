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

    initGalleryCarousel();
    initGalleryLightbox();

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

function initGalleryCarousel() {
    const track = document.querySelector('[data-gallery-track]');
    const dots = Array.from(document.querySelectorAll('[data-gallery-dot]'));
    const slides = track ? Array.from(track.querySelectorAll('[data-gallery-slide]')) : [];

    if (!track || dots.length === 0 || slides.length === 0) return;

    let frameRequested = false;

    const setActive = activeIndex => {
        dots.forEach((dot, index) => {
            const isActive = index === activeIndex;
            const indicator = dot.querySelector('[data-gallery-dot-indicator]');

            dot.setAttribute('aria-current', isActive ? 'true' : 'false');

            if (!indicator) return;
            indicator.classList.toggle('w-6', isActive);
            indicator.classList.toggle('bg-slate-900', isActive);
            indicator.classList.toggle('w-2.5', !isActive);
            indicator.classList.toggle('bg-slate-300', !isActive);
        });
    };

    const updateActive = () => {
        frameRequested = false;

        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;

        slides.forEach((slide, index) => {
            const rect = slide.getBoundingClientRect();
            const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActive(closestIndex);
    };

    const requestUpdate = () => {
        if (frameRequested) return;
        frameRequested = true;
        requestAnimationFrame(updateActive);
    };

    track.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const slide = slides[index];
            if (!slide) return;

            const delta = slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
            track.scrollTo({ left: track.scrollLeft + delta, behavior: 'smooth' });
        });
    });

    const isScrollable = () => track.scrollWidth > track.clientWidth + 1;
    const updateDraggableState = () => {
        track.classList.toggle('is-draggable', isScrollable());
    };

    let isDragging = false;
    let hasDragged = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    const onDragMove = event => {
        if (!isDragging) return;

        const delta = event.clientX - dragStartX;
        if (Math.abs(delta) > 5) hasDragged = true;
        track.scrollLeft = dragStartScroll - delta;
    };

    const stopDragging = () => {
        if (!isDragging) return;

        isDragging = false;
        track.classList.remove('is-dragging');
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', stopDragging);
    };

    track.addEventListener('mousedown', event => {
        if (event.button !== 0 || !isScrollable()) return;

        isDragging = true;
        hasDragged = false;
        dragStartX = event.clientX;
        dragStartScroll = track.scrollLeft;
        track.classList.add('is-dragging');
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', stopDragging);
        event.preventDefault();
    });

    track.addEventListener('dragstart', event => event.preventDefault());

    track.addEventListener('click', event => {
        if (!hasDragged) return;

        hasDragged = false;
        event.preventDefault();
        event.stopPropagation();
    }, true);

    window.addEventListener('resize', updateDraggableState);
    updateDraggableState();

    updateActive();
}

function initGalleryLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    const image = lightbox?.querySelector('[data-gallery-lightbox-image]');
    const caption = lightbox?.querySelector('[data-gallery-lightbox-caption]');
    const counter = lightbox?.querySelector('[data-gallery-lightbox-counter]');
    const closeButton = lightbox?.querySelector('[data-gallery-close-button]');
    const prevButton = lightbox?.querySelector('[data-gallery-prev]');
    const nextButton = lightbox?.querySelector('[data-gallery-next]');
    const triggers = Array.from(document.querySelectorAll('[data-gallery-open]'));

    if (!lightbox || !image || triggers.length === 0) return;

    let currentIndex = 0;
    let lastTrigger = null;

    const show = index => {
        currentIndex = (index + triggers.length) % triggers.length;

        const slide = triggers[currentIndex].closest('[data-gallery-slide]');
        const slideImage = slide?.querySelector('img');
        if (!slideImage) return;

        image.src = slideImage.currentSrc || slideImage.src;
        image.alt = slideImage.alt;

        if (caption) {
            const slideCaption = slide.querySelector('figcaption')?.textContent?.trim();
            caption.textContent = slideCaption || slideImage.alt;
        }

        if (counter) {
            counter.textContent = `${currentIndex + 1} / ${triggers.length}`;
        }
    };

    const open = index => {
        lastTrigger = triggers[index] || null;
        show(index);
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeButton?.focus();
    };

    const close = () => {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lastTrigger?.focus();
    };

    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', () => open(index));
    });

    prevButton?.addEventListener('click', () => show(currentIndex - 1));
    nextButton?.addEventListener('click', () => show(currentIndex + 1));

    lightbox.querySelectorAll('[data-gallery-close]').forEach(element => {
        element.addEventListener('click', close);
    });

    document.addEventListener('keydown', event => {
        if (lightbox.classList.contains('hidden')) return;

        if (event.key === 'Escape') {
            close();
        } else if (event.key === 'ArrowLeft') {
            show(currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            show(currentIndex + 1);
        }
    });

    let swipeStart = null;

    lightbox.addEventListener('pointerdown', event => {
        swipeStart = { x: event.clientX, y: event.clientY };
    });

    lightbox.addEventListener('pointerup', event => {
        if (!swipeStart) return;

        const deltaX = event.clientX - swipeStart.x;
        const deltaY = event.clientY - swipeStart.y;
        swipeStart = null;

        if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
        show(currentIndex + (deltaX < 0 ? 1 : -1));
    });

    lightbox.addEventListener('pointercancel', () => {
        swipeStart = null;
    });
}

