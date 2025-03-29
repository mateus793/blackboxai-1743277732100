// Offer Ride Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('offerRideForm');
    if (!form) return;

    const steps = Array.from(document.querySelectorAll('.form-step'));
    let currentStep = 0;

    // Show current step and hide others
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
    }

    // Next button click handler
    document.querySelectorAll('.btn-next').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const nextStep = e.target.dataset.next;
            if (nextStep) {
                currentStep = steps.findIndex(step => step.id === nextStep);
                showStep(currentStep);
            }
        });
    });

    // Previous button click handler
    document.querySelectorAll('.btn-prev').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const prevStep = e.target.dataset.prev;
            if (prevStep) {
                currentStep = steps.findIndex(step => step.id === prevStep);
                showStep(currentStep);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            origin: document.getElementById('origin').value,
            destination: document.getElementById('destination').value,
            waypoints: document.getElementById('waypoints').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            vehicleType: document.getElementById('vehicleType').value,
            seats: document.getElementById('seats').value,
            price: document.getElementById('price').value,
            allowPets: document.getElementById('allowPets').checked,
            allowSmoking: document.getElementById('allowSmoking').checked,
            allowLuggage: document.getElementById('allowLuggage').checked,
            notes: document.getElementById('notes').value
        };

        console.log('Form submitted:', formData);
        alert('Carona publicada com sucesso!');
        form.reset();
        showStep(0); // Reset to first step
    });

    // Initialize
    showStep(0);
});