// Load header and footer
function loadCommonComponents() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const header = document.getElementById('header');
            if (header) header.innerHTML = data;
        });
    
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footer = document.getElementById('footer');
            if (footer) footer.innerHTML = data;
        });
}

// DOM Elements
const searchForm = document.querySelector('.search-box form');
const offerRideBtn = document.querySelector('.btn-success');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadCommonComponents();
    // Initialize any necessary components
    console.log('Caronas Solidárias - Página carregada');
    
    // Search form submission
    if(searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const origin = e.target.querySelector('input:nth-of-type(1)').value;
            const destination = e.target.querySelector('input:nth-of-type(2)').value;
            console.log(`Buscando caronas de ${origin} para ${destination}`);
            // In a real app, this would redirect to search results page
            window.location.href = `buscar.html?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
        });
    }

    // Offer ride button click
    if(offerRideBtn) {
        offerRideBtn.addEventListener('click', () => {
            console.log('Redirecionando para página de oferta de carona');
            window.location.href = 'oferecer.html';
        });
    }
});

// Mock data for featured rides (will be replaced with API calls)
const featuredRides = [
    {
        driver: 'Maria Silva',
        rating: 4.8,
        from: 'São Paulo',
        to: 'Rio de Janeiro',
        date: '15/10/2023',
        time: '08:00',
        seats: 3,
        price: 'R$ 50,00'
    },
    {
        driver: 'João Santos',
        rating: 4.5,
        from: 'Belo Horizonte',
        to: 'Vitória',
        date: '16/10/2023',
        time: '14:00',
        seats: 2,
        price: 'R$ 40,00'
    },
    {
        driver: 'Ana Oliveira',
        rating: 4.9,
        from: 'Curitiba',
        to: 'Florianópolis',
        date: '17/10/2023',
        time: '10:00',
        seats: 4,
        price: 'R$ 60,00'
    }
];

// Function to render featured rides
function renderFeaturedRides() {
    const ridesGrid = document.querySelector('.rides-grid');
    if(!ridesGrid) return;

    ridesGrid.innerHTML = featuredRides.map(ride => `
        <div class="ride-card">
            <div class="ride-driver">
                <img src="images/user-placeholder.jpg" alt="${ride.driver}">
                <div>
                    <h3>${ride.driver}</h3>
                    <div class="rating">
                        ${'★'.repeat(Math.floor(ride.rating))}${'☆'.repeat(5 - Math.floor(ride.rating))}
                        <span>${ride.rating}</span>
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
                <button class="btn btn-sm btn-primary">Solicitar</button>
            </div>
        </div>
    `).join('');
}

// Initialize featured rides when page loads
document.addEventListener('DOMContentLoaded', renderFeaturedRides);