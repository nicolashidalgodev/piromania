
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Workshop Category Filtering Logic
function filterWorkshops(category) {
    const cards = document.querySelectorAll('.workshop-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active state on filter buttons
    buttons.forEach(btn => {
        if (btn.getAttribute('data-cat') === category) {
            btn.classList.add('bg-slate-900', 'text-white');
            btn.classList.remove('bg-white', 'text-slate-700');
        } else {
            btn.classList.remove('bg-slate-900', 'text-white');
            btn.classList.add('bg-white', 'text-slate-700');
        }
    });

    // Filter cards
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Workshop details modal
const workshopDetailsModal = document.getElementById('workshopDetailsModal');
const workshopDetailsTitle = document.getElementById('workshopDetailsTitle');
const workshopDetailsContent = document.getElementById('workshopDetailsContent');
const closeWorkshopDetailsButton = document.getElementById('closeWorkshopDetails');
const workshopDetailsBackdrop = workshopDetailsModal?.querySelector('.modal-backdrop');
let workshopDetailsTrigger = null;

function openWorkshopDetails(templateId) {
    const detailsTemplate = document.getElementById(templateId);
    const workshopCard = document.activeElement.closest('.workshop-card');

    if (!detailsTemplate || !workshopDetailsModal || !workshopDetailsTitle || !workshopDetailsContent || !workshopCard) {
        console.error(`No se pudieron cargar los detalles del taller "${templateId}".`);
        return;
    }

    workshopDetailsTrigger = document.activeElement;
    workshopDetailsTitle.textContent = workshopCard.dataset.modalTitle || workshopCard.querySelector('h3').textContent;
    workshopDetailsContent.replaceChildren(detailsTemplate.content.cloneNode(true));
    workshopDetailsModal.classList.remove('hidden');
    workshopDetailsModal.classList.add('flex');
    workshopDetailsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeWorkshopDetailsButton.focus();
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

if (closeWorkshopDetailsButton) {
    closeWorkshopDetailsButton.addEventListener('click', closeWorkshopDetails);
}

if (workshopDetailsBackdrop) {
    workshopDetailsBackdrop.addEventListener('click', closeWorkshopDetails);
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && workshopDetailsModal && !workshopDetailsModal.classList.contains('hidden')) {
        closeWorkshopDetails();
    }
});

// Registration Modal Controller
const modal = document.getElementById('registrationModal');
const modalTitle = document.getElementById('modalWorkshopTitle');
const modalSelect = document.getElementById('modalWorkshopSelect');
const modalForm = document.getElementById('modalForm');
const modalSuccess = document.getElementById('modalSuccess');

function openModal(workshopName) {
    if (workshopName) {
        modalTitle.textContent = workshopName;
        // Preselect matching option if exists
        for (let option of modalSelect.options) {
            if (workshopName.includes(option.value)) {
                option.selected = true;
                break;
            }
        }
    }
    modalForm.classList.remove('hidden');
    modalSuccess.classList.add('hidden');
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

function handleRegistrationSubmit(event) {
    event.preventDefault();
    modalForm.classList.add('hidden');
    modalSuccess.classList.remove('hidden');
}

function handleContactSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    form.reset();
    
    // Custom subtle floating toast message
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl z-50 text-sm font-bold flex items-center gap-2';
    toast.innerHTML = '<i class="fa-solid fa-circle-check text-gp-sage"></i> ¡Mensaje enviado con éxito!';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}