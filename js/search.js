// Search Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Price range slider
    const priceSlider = document.querySelector('.price-range input');
    const priceValue = document.querySelector('.price-value');
    
    if (priceSlider && priceValue) {
        priceSlider.addEventListener('input', () => {
            priceValue.textContent = `Até R$ ${priceSlider.value},00`;
        });
    }

    // Mock search results
    const mockRides = [
        {
            driver: 'Carlos Oliveira',
            rating: 4.7,
            from: 'São Paulo',
            to: 'Campinas',
            date: '18/10/2023',
            time: '09:30',
            seats: 2,
            price: 'R$ 35,00',
            vehicle: 'Toyota Corolla'
        },
        {
            driver: 'Ana Beatriz',
            rating: 4.9,
            from: 'São Paulo',
            to: 'Santos',
            date: '19/10/2023',
            time: '15:00',
            seats: 3,
            price: 'R$ 25,00',
            vehicle: 'Honda Civic'
        },
        {
            driver: 'Roberto Almeida',
            rating: 4.5,
            from: 'São Paulo',
            to: 'São José dos Campos',
            date: '20/10/2023',
            time: '08:00',
            seats: 1,
            price: 'R$ 40,00',
            vehicle: 'Volkswagen Golf'
        }
    ];

    // Render search results
    function renderSearchResults(rides) {
        const ridesList = document.querySelector('.rides-list');
        if (!ridesList) return;

        ridesList.innerHTML = rides.map(ride => `
            <div class="ride-card">
                <div class="ride-driver">
                    <img src="images/user-placeholder.jpg" alt="${ride.driver}">
                    <div>
                        <h3>${ride.driver}</h3>
                        <div class="rating">
                            ${'★'.repeat(Math.floor(ride.rating))}${'☆'.repeat(5 - Math.floor(ride.rating))}
                            <span>${ride.rating}</span>
                        </div>
                        <div class="vehicle">
                            <i class="fas fa-car"></i> ${ride.vehicle}
                        </div>
                    </div>
                </div>
                <div class="ride-route">
                    <p><i class="fas fa-map-marker-alt"></i> ${ride.from} → ${ride.to}</p>
                    <p><i class="far fa-calendar-alt"></i> ${ride.date} às ${ride.time}</p>
                    <p><i class="fas fa-user-friends"></i> ${ride.seats} vaga(s) disponível(is)</p>
                </div>
                <div class="ride-price">
                    <span>${ride.price}</span>
                    <button class="btn btn-primary">Solicitar</button>
                </div>
            </div>
        `).join('');
    }

    // Initial render
    renderSearchResults(mockRides);

    // Filter functionality
    const applyFiltersBtn = document.querySelector('.filters button');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            // In a real app, this would filter the results
            console.log('Filters applied');
        });
    }
});