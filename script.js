document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('flightSearch');
    const results = document.getElementById('results');
    const flightResults = document.getElementById('flightResults');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        form.querySelector('button[type="submit"]').disabled = true;
        form.querySelector('button[type="submit"]').innerHTML = 'Searching...';
        
        // Simulate API call with setTimeout
        setTimeout(() => {
            // Generate mock results
            const mockFlights = generateMockFlights();
            displayResults(mockFlights);
            
            // Reset button state
            form.querySelector('button[type="submit"]').disabled = false;
            form.querySelector('button[type="submit"]').innerHTML = 'Search Flights';
        }, 1500);
    });

    function generateMockFlights() {
        const departure = document.getElementById('departure').value.toUpperCase();
        const arrival = document.getElementById('arrival').value.toUpperCase();
        const cabinClass = document.getElementById('cabinClass').value;
        const program = document.getElementById('loyaltyProgram').value;

        const flights = [
            {
                departure: departure,
                arrival: arrival,
                departureTime: '08:00',
                arrivalTime: '14:30',
                points: Math.floor(Math.random() * 50000) + 30000,
                airline: 'Sample Airlines',
                cabinClass: cabinClass,
                program: program,
                availability: 'Available'
            },
            {
                departure: departure,
                arrival: arrival,
                departureTime: '12:45',
                arrivalTime: '19:15',
                points: Math.floor(Math.random() * 50000) + 30000,
                airline: 'Sample Airways',
                cabinClass: cabinClass,
                program: program,
                availability: 'Limited'
            },
            {
                departure: departure,
                arrival: arrival,
                departureTime: '16:30',
                arrivalTime: '23:00',
                points: Math.floor(Math.random() * 50000) + 30000,
                airline: 'Sample International',
                cabinClass: cabinClass,
                program: program,
                availability: 'Available'
            }
        ];

        return flights;
    }

    function displayResults(flights) {
        results.style.display = 'block';
        flightResults.innerHTML = '';

        flights.forEach(flight => {
            const flightCard = document.createElement('div');
            flightCard.className = 'col-12';
            flightCard.innerHTML = `
                <div class="flight-card">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <h5 class="mb-0">${flight.airline}</h5>
                            <p class="text-muted mb-0">${flight.cabinClass.charAt(0).toUpperCase() + flight.cabinClass.slice(1)} Class</p>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="text-center">
                                    <h5 class="mb-0">${flight.departureTime}</h5>
                                    <small class="text-muted">${flight.departure}</small>
                                </div>
                                <div class="text-center">
                                    <i class="fas fa-plane mx-3"></i>
                                </div>
                                <div class="text-center">
                                    <h5 class="mb-0">${flight.arrivalTime}</h5>
                                    <small class="text-muted">${flight.arrival}</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-md-end">
                            <span class="points-badge">${flight.points.toLocaleString()} points</span>
                            <p class="text-muted mb-0 mt-2">Availability: ${flight.availability}</p>
                        </div>
                    </div>
                </div>
            `;
            flightResults.appendChild(flightCard);
        });
    }
});
