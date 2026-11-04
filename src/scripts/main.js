const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
    }

    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target) return;

    event.preventDefault();
    history.pushState(null, '', link.hash);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function toggleMobileMenu() {
    mobileMenu?.classList.toggle('hidden');
}

mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

document.querySelectorAll('[data-mobile-menu-link]').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
    });
});

function filterWorkshops(category) {
    document.querySelectorAll('.filter-btn').forEach(button => {
        const isActive = button.dataset.filterCategory === category;
        button.classList.toggle('bg-slate-900', isActive);
        button.classList.toggle('text-white', isActive);
        button.classList.toggle('bg-white', !isActive);
        button.classList.toggle('text-slate-700', !isActive);
    });

    document.querySelectorAll('.workshop-card').forEach(card => {
        card.style.display = category === 'all' || card.dataset.category === category
            ? 'flex'
            : 'none';
    });
}

document.querySelectorAll('[data-filter-category]').forEach(button => {
    button.addEventListener('click', () => {
        filterWorkshops(button.dataset.filterCategory);
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

document.querySelectorAll('[data-workshop-details]').forEach(button => {
    button.addEventListener('click', () => {
        openWorkshopDetails(button.dataset.workshopDetails, button);
    });
});

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

document.getElementById('contactForm')?.addEventListener('submit', event => {
    event.preventDefault();
    event.currentTarget.reset();

    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl z-50 text-sm font-bold flex items-center gap-2';

    const icon = document.createElement('i');
    icon.className = 'fa fa-check-circle text-gp-sage';
    toast.append(icon, document.createTextNode(' ¡Mensaje enviado con éxito!'));
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
});
