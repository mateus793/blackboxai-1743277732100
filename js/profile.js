// Profile Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Edit profile button
    const editProfileBtn = document.getElementById('editProfileBtn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            // In a real app, this would open a profile editor
            console.log('Edit profile clicked');
            alert('Funcionalidade de edição de perfil será implementada aqui');
        });
    }

    // Settings form submission
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Settings saved');
            alert('Configurações salvas com sucesso!');
        });
    }

    // Tab functionality
    const profileTabs = new bootstrap.Tab(document.getElementById('rides-tab'));
    const ridesTabs = new bootstrap.Tab(document.getElementById('given-tab'));

    // Mock data for rides
    const mockGivenRides = [
        {
            date: '15/10/2023',
            from: 'São Paulo',
            to: 'Rio de Janeiro',
            passengers: 2,
            price: 'R$ 50,00'
        },
        {
            date: '20/10/2023',
            from: 'São Paulo',
            to: 'Campinas',
            passengers: 1,
            price: 'R$ 30,00'
        }
    ];

    const mockTakenRides = [
        {
            date: '10/10/2023',
            from: 'São Paulo',
            to: 'Santos',
            driver: 'Maria Silva',
            price: 'R$ 25,00'
        }
    ];

    // Render rides
    function renderRides(rides, type) {
        const container = type === 'given' 
            ? document.querySelector('#given .rides-list')
            : document.querySelector('#taken .rides-list');

        if (!container) return;

        if (rides.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-${type === 'given' ? 'car' : 'users'}"></i>
                    <p>Você ainda não ${type === 'given' ? 'ofereceu' : 'pegou'} nenhuma carona</p>
                    <a href="${type === 'given' ? 'oferecer.html' : 'buscar.html'}" class="btn btn-primary">
                        ${type === 'given' ? 'Oferecer Carona' : 'Buscar Caronas'}
                    </a>
                </div>
            `;
            return;
        }

        container.innerHTML = rides.map(ride => `
            <div class="profile-ride-card">
                <div class="ride-date">${ride.date}</div>
                <div class="ride-route">
                    <span>${ride.from} → ${ride.to}</span>
                    ${type === 'given' 
                        ? `<span>${ride.passengers} passageiro(s)</span>`
                        : `<span>Motorista: ${ride.driver}</span>`}
                </div>
                <div class="ride-price">${ride.price}</div>
            </div>
        `).join('');
    }

    // Initial render
    renderRides(mockGivenRides, 'given');
    renderRides(mockTakenRides, 'taken');
});