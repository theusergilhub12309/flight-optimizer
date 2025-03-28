const airports = [
    // North America - United States
    { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport', city: 'Atlanta' },
    { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' },
    { code: 'EWR', name: 'Newark Liberty International Airport', city: 'Newark' },
    { code: 'LGA', name: 'LaGuardia Airport', city: 'New York' },
    { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles' },
    { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco' },
    { code: 'ORD', name: "O'Hare International Airport", city: 'Chicago' },
    { code: 'DFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas' },
    { code: 'MIA', name: 'Miami International Airport', city: 'Miami' },
    { code: 'DEN', name: 'Denver International Airport', city: 'Denver' },
    { code: 'SEA', name: 'Seattle-Tacoma International Airport', city: 'Seattle' },
    { code: 'BOS', name: 'Boston Logan International Airport', city: 'Boston' },
    { code: 'IAD', name: 'Washington Dulles International Airport', city: 'Washington DC' },
    { code: 'DCA', name: 'Ronald Reagan Washington National Airport', city: 'Washington DC' },
    { code: 'PHX', name: 'Phoenix Sky Harbor International Airport', city: 'Phoenix' },
    { code: 'IAH', name: 'George Bush Intercontinental Airport', city: 'Houston' },
    { code: 'LAS', name: 'Harry Reid International Airport', city: 'Las Vegas' },
    { code: 'MSP', name: 'Minneapolis-Saint Paul International Airport', city: 'Minneapolis' },
    { code: 'DTW', name: 'Detroit Metropolitan Wayne County Airport', city: 'Detroit' },
    { code: 'PHL', name: 'Philadelphia International Airport', city: 'Philadelphia' },
    { code: 'CLT', name: 'Charlotte Douglas International Airport', city: 'Charlotte' },

    // Canada
    { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto' },
    { code: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver' },
    { code: 'YUL', name: 'Montréal-Pierre Elliott Trudeau International Airport', city: 'Montreal' },
    { code: 'YYC', name: 'Calgary International Airport', city: 'Calgary' },

    // Europe
    { code: 'LHR', name: 'London Heathrow Airport', city: 'London' },
    { code: 'LGW', name: 'London Gatwick Airport', city: 'London' },
    { code: 'STN', name: 'London Stansted Airport', city: 'London' },
    { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris' },
    { code: 'ORY', name: 'Paris Orly Airport', city: 'Paris' },
    { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt' },
    { code: 'MUC', name: 'Munich Airport', city: 'Munich' },
    { code: 'TXL', name: 'Berlin Brandenburg Airport', city: 'Berlin' },
    { code: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam' },
    { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city: 'Madrid' },
    { code: 'BCN', name: 'Barcelona–El Prat Airport', city: 'Barcelona' },
    { code: 'FCO', name: 'Leonardo da Vinci International Airport', city: 'Rome' },
    { code: 'MXP', name: 'Milan Malpensa Airport', city: 'Milan' },
    { code: 'LIN', name: 'Milan Linate Airport', city: 'Milan' },
    { code: 'ZRH', name: 'Zurich Airport', city: 'Zurich' },
    { code: 'GVA', name: 'Geneva Airport', city: 'Geneva' },
    { code: 'VIE', name: 'Vienna International Airport', city: 'Vienna' },
    { code: 'CPH', name: 'Copenhagen Airport', city: 'Copenhagen' },
    { code: 'ARN', name: 'Stockholm Arlanda Airport', city: 'Stockholm' },
    { code: 'OSL', name: 'Oslo Airport', city: 'Oslo' },
    { code: 'HEL', name: 'Helsinki-Vantaa Airport', city: 'Helsinki' },
    { code: 'DUB', name: 'Dublin Airport', city: 'Dublin' },
    { code: 'LIS', name: 'Lisbon Airport', city: 'Lisbon' },
    { code: 'ATH', name: 'Athens International Airport', city: 'Athens' },

    // Asia
    { code: 'HND', name: 'Tokyo Haneda Airport', city: 'Tokyo' },
    { code: 'NRT', name: 'Tokyo Narita International Airport', city: 'Tokyo' },
    { code: 'KIX', name: 'Kansai International Airport', city: 'Osaka' },
    { code: 'CTS', name: 'New Chitose Airport', city: 'Sapporo' },
    { code: 'PEK', name: 'Beijing Capital International Airport', city: 'Beijing' },
    { code: 'PKX', name: 'Beijing Daxing International Airport', city: 'Beijing' },
    { code: 'PVG', name: 'Shanghai Pudong International Airport', city: 'Shanghai' },
    { code: 'SHA', name: 'Shanghai Hongqiao International Airport', city: 'Shanghai' },
    { code: 'CAN', name: 'Guangzhou Baiyun International Airport', city: 'Guangzhou' },
    { code: 'SZX', name: 'Shenzhen Bao\'an International Airport', city: 'Shenzhen' },
    { code: 'CTU', name: 'Chengdu Shuangliu International Airport', city: 'Chengdu' },
    { code: 'HKG', name: 'Hong Kong International Airport', city: 'Hong Kong' },
    { code: 'TPE', name: 'Taoyuan International Airport', city: 'Taipei' },
    { code: 'ICN', name: 'Seoul Incheon International Airport', city: 'Seoul' },
    { code: 'GMP', name: 'Gimpo International Airport', city: 'Seoul' },
    { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore' },
    { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok' },
    { code: 'DMK', name: 'Don Mueang International Airport', city: 'Bangkok' },
    { code: 'KUL', name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur' },
    { code: 'SGN', name: 'Tan Son Nhat International Airport', city: 'Ho Chi Minh City' },
    { code: 'HAN', name: 'Noi Bai International Airport', city: 'Hanoi' },
    { code: 'MNL', name: 'Ninoy Aquino International Airport', city: 'Manila' },
    { code: 'CGK', name: 'Soekarno-Hatta International Airport', city: 'Jakarta' },
    { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'Delhi' },
    { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai' },
    { code: 'MAA', name: 'Chennai International Airport', city: 'Chennai' },
    { code: 'BLR', name: 'Kempegowda International Airport', city: 'Bangalore' },

    // Middle East
    { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai' },
    { code: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi' },
    { code: 'DOH', name: 'Hamad International Airport', city: 'Doha' },
    { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul' },
    { code: 'SAW', name: 'Istanbul Sabiha Gökçen International Airport', city: 'Istanbul' },
    { code: 'TLV', name: 'Ben Gurion Airport', city: 'Tel Aviv' },
    { code: 'RUH', name: 'King Khalid International Airport', city: 'Riyadh' },
    { code: 'JED', name: 'King Abdulaziz International Airport', city: 'Jeddah' },
    { code: 'CAI', name: 'Cairo International Airport', city: 'Cairo' },
    { code: 'BAH', name: 'Bahrain International Airport', city: 'Manama' },
    { code: 'KWI', name: 'Kuwait International Airport', city: 'Kuwait City' },
    { code: 'MCT', name: 'Muscat International Airport', city: 'Muscat' },

    // Australia & New Zealand
    { code: 'SYD', name: 'Sydney Airport', city: 'Sydney' },
    { code: 'MEL', name: 'Melbourne Airport', city: 'Melbourne' },
    { code: 'BNE', name: 'Brisbane Airport', city: 'Brisbane' },
    { code: 'PER', name: 'Perth Airport', city: 'Perth' },
    { code: 'ADL', name: 'Adelaide Airport', city: 'Adelaide' },
    { code: 'OOL', name: 'Gold Coast Airport', city: 'Gold Coast' },
    { code: 'CNS', name: 'Cairns Airport', city: 'Cairns' },
    { code: 'CBR', name: 'Canberra Airport', city: 'Canberra' },
    { code: 'AKL', name: 'Auckland Airport', city: 'Auckland' },
    { code: 'CHC', name: 'Christchurch Airport', city: 'Christchurch' },
    { code: 'WLG', name: 'Wellington International Airport', city: 'Wellington' },
    { code: 'ZQN', name: 'Queenstown Airport', city: 'Queenstown' },

    // Latin America
    { code: 'MEX', name: 'Mexico City International Airport', city: 'Mexico City' },
    { code: 'CUN', name: 'Cancún International Airport', city: 'Cancún' },
    { code: 'GDL', name: 'Guadalajara International Airport', city: 'Guadalajara' },
    { code: 'MTY', name: 'Monterrey International Airport', city: 'Monterrey' },
    { code: 'GRU', name: 'São Paulo/Guarulhos International Airport', city: 'São Paulo' },
    { code: 'CGH', name: 'São Paulo/Congonhas Airport', city: 'São Paulo' },
    { code: 'GIG', name: 'Rio de Janeiro/Galeão International Airport', city: 'Rio de Janeiro' },
    { code: 'BSB', name: 'Presidente Juscelino Kubitschek International Airport', city: 'Brasília' },
    { code: 'EZE', name: 'Ministro Pistarini International Airport', city: 'Buenos Aires' },
    { code: 'AEP', name: 'Jorge Newbery Airpark', city: 'Buenos Aires' },
    { code: 'BOG', name: 'El Dorado International Airport', city: 'Bogotá' },
    { code: 'MDE', name: 'José María Córdova International Airport', city: 'Medellín' },
    { code: 'SCL', name: 'Arturo Merino Benítez International Airport', city: 'Santiago' },
    { code: 'LIM', name: 'Jorge Chávez International Airport', city: 'Lima' },
    { code: 'UIO', name: 'Mariscal Sucre International Airport', city: 'Quito' },
    { code: 'PTY', name: 'Tocumen International Airport', city: 'Panama City' },
    { code: 'MVD', name: 'Carrasco International Airport', city: 'Montevideo' }
];
