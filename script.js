// Interactive India Map with All States and Union Territories

// State data with information
const statesData = {
    "Jammu and Kashmir": {
        capital: "Srinagar (Summer), Jammu (Winter)",
        population: "12.5 Million",
        area: "42,241 km²",
        language: "Urdu, Kashmiri, Hindi, Dogri",
        type: "Union Territory"
    },
    "Ladakh": {
        capital: "Leh, Kargil",
        population: "0.3 Million",
        area: "59,146 km²",
        language: "Ladakhi, Hindi, Urdu",
        type: "Union Territory"
    },
    "Himachal Pradesh": {
        capital: "Shimla",
        population: "6.9 Million",
        area: "55,673 km²",
        language: "Hindi, Punjabi",
        type: "State"
    },
    "Punjab": {
        capital: "Chandigarh",
        population: "27.7 Million",
        area: "50,362 km²",
        language: "Punjabi",
        type: "State"
    },
    "Uttarakhand": {
        capital: "Dehradun (Winter), Gairsain (Summer)",
        population: "10.1 Million",
        area: "53,483 km²",
        language: "Hindi",
        type: "State"
    },
    "Haryana": {
        capital: "Chandigarh",
        population: "25.4 Million",
        area: "44,212 km²",
        language: "Hindi",
        type: "State"
    },
    "Delhi": {
        capital: "New Delhi",
        population: "16.8 Million",
        area: "1,484 km²",
        language: "Hindi, English",
        type: "Union Territory"
    },
    "Rajasthan": {
        capital: "Jaipur",
        population: "68.5 Million",
        area: "342,239 km²",
        language: "Hindi, Rajasthani",
        type: "State"
    },
    "Uttar Pradesh": {
        capital: "Lucknow",
        population: "199.8 Million",
        area: "240,928 km²",
        language: "Hindi, Urdu",
        type: "State"
    },
    "Bihar": {
        capital: "Patna",
        population: "104.1 Million",
        area: "94,163 km²",
        language: "Hindi, Urdu",
        type: "State"
    },
    "Sikkim": {
        capital: "Gangtok",
        population: "0.6 Million",
        area: "7,096 km²",
        language: "Nepali, Hindi, English",
        type: "State"
    },
    "Arunachal Pradesh": {
        capital: "Itanagar",
        population: "1.4 Million",
        area: "83,743 km²",
        language: "English, Hindi",
        type: "State"
    },
    "Nagaland": {
        capital: "Kohima",
        population: "2.0 Million",
        area: "16,579 km²",
        language: "English",
        type: "State"
    },
    "Manipur": {
        capital: "Imphal",
        population: "2.9 Million",
        area: "22,327 km²",
        language: "Meitei, English",
        type: "State"
    },
    "Mizoram": {
        capital: "Aizawl",
        population: "1.1 Million",
        area: "21,081 km²",
        language: "Mizo, English",
        type: "State"
    },
    "Tripura": {
        capital: "Agartala",
        population: "3.7 Million",
        area: "10,486 km²",
        language: "Bengali, Kokborok",
        type: "State"
    },
    "Meghalaya": {
        capital: "Shillong",
        population: "3.0 Million",
        area: "22,429 km²",
        language: "English, Khasi, Garo",
        type: "State"
    },
    "Assam": {
        capital: "Dispur",
        population: "31.2 Million",
        area: "78,438 km²",
        language: "Assamese",
        type: "State"
    },
    "West Bengal": {
        capital: "Kolkata",
        population: "91.3 Million",
        area: "88,752 km²",
        language: "Bengali",
        type: "State"
    },
    "Jharkhand": {
        capital: "Ranchi",
        population: "33.0 Million",
        area: "79,714 km²",
        language: "Hindi",
        type: "State"
    },
    "Odisha": {
        capital: "Bhubaneswar",
        population: "42.0 Million",
        area: "155,707 km²",
        language: "Odia",
        type: "State"
    },
    "Chhattisgarh": {
        capital: "Raipur",
        population: "25.5 Million",
        area: "135,192 km²",
        language: "Hindi, Chhattisgarhi",
        type: "State"
    },
    "Madhya Pradesh": {
        capital: "Bhopal",
        population: "72.6 Million",
        area: "308,245 km²",
        language: "Hindi",
        type: "State"
    },
    "Gujarat": {
        capital: "Gandhinagar",
        population: "60.4 Million",
        area: "196,244 km²",
        language: "Gujarati",
        type: "State"
    },
    "Maharashtra": {
        capital: "Mumbai",
        population: "112.4 Million",
        area: "307,713 km²",
        language: "Marathi",
        type: "State"
    },
    "Goa": {
        capital: "Panaji",
        population: "1.5 Million",
        area: "3,702 km²",
        language: "Konkani",
        type: "State"
    },
    "Karnataka": {
        capital: "Bengaluru",
        population: "61.1 Million",
        area: "191,791 km²",
        language: "Kannada",
        type: "State"
    },
    "Telangana": {
        capital: "Hyderabad",
        population: "35.2 Million",
        area: "112,077 km²",
        language: "Telugu, Urdu",
        type: "State"
    },
    "Andhra Pradesh": {
        capital: "Amaravati",
        population: "49.5 Million",
        area: "160,205 km²",
        language: "Telugu",
        type: "State"
    },
    "Tamil Nadu": {
        capital: "Chennai",
        population: "72.1 Million",
        area: "130,060 km²",
        language: "Tamil",
        type: "State"
    },
    "Kerala": {
        capital: "Thiruvananthapuram",
        population: "33.4 Million",
        area: "38,852 km²",
        language: "Malayalam",
        type: "State"
    },
    "Puducherry": {
        capital: "Puducherry",
        population: "1.2 Million",
        area: "492 km²",
        language: "Tamil, French",
        type: "Union Territory"
    },
    "Andaman and Nicobar": {
        capital: "Port Blair",
        population: "0.4 Million",
        area: "8,249 km²",
        language: "Hindi, English",
        type: "Union Territory"
    },
    "Lakshadweep": {
        capital: "Kavaratti",
        population: "0.06 Million",
        area: "32 km²",
        language: "Malayalam",
        type: "Union Territory"
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        capital: "Daman",
        population: "0.6 Million",
        area: "603 km²",
        language: "Gujarati, Hindi",
        type: "Union Territory"
    },
    "Chandigarh": {
        capital: "Chandigarh",
        population: "1.1 Million",
        area: "114 km²",
        language: "Hindi, Punjabi, English",
        type: "Union Territory"
    }
};

// Simplified SVG paths for Indian states (approximate representations)
const statePaths = {
    "Jammu and Kashmir": "M 220,30 L 280,25 L 295,35 L 290,55 L 275,65 L 250,60 L 225,50 Z",
    "Ladakh": "M 285,25 L 330,20 L 350,35 L 345,50 L 320,55 L 295,45 L 290,35 Z",
    "Himachal Pradesh": "M 240,65 L 280,60 L 295,75 L 285,90 L 255,85 L 240,75 Z",
    "Punjab": "M 210,75 L 245,70 L 255,85 L 245,95 L 220,90 Z",
    "Uttarakhand": "M 285,80 L 325,75 L 340,90 L 330,105 L 300,100 Z",
    "Haryana": "M 220,95 L 255,90 L 265,105 L 250,120 L 225,115 Z",
    "Delhi": "M 245,105 L 255,105 L 255,115 L 245,115 Z",
    "Rajasthan": "M 140,120 L 230,115 L 260,140 L 255,195 L 210,210 L 165,205 L 135,180 Z",
    "Uttar Pradesh": "M 260,115 L 400,110 L 425,140 L 420,170 L 390,175 L 340,165 L 290,160 L 265,145 Z",
    "Bihar": "M 390,175 L 450,172 L 470,185 L 465,205 L 435,210 L 405,200 Z",
    "Sikkim": "M 455,145 L 475,142 L 485,155 L 475,165 L 460,162 Z",
    "Arunachal Pradesh": "M 480,125 L 560,115 L 575,145 L 565,165 L 530,168 L 485,160 Z",
    "Nagaland": "M 535,168 L 560,165 L 570,180 L 560,192 L 540,190 Z",
    "Manipur": "M 540,192 L 560,190 L 565,205 L 552,215 L 537,210 Z",
    "Mizoram": "M 525,215 L 545,212 L 550,230 L 537,238 L 522,232 Z",
    "Tripura": "M 510,205 L 530,203 L 535,218 L 523,226 L 510,220 Z",
    "Meghalaya": "M 495,182 L 525,180 L 535,195 L 520,205 L 500,200 Z",
    "Assam": "M 475,165 L 545,162 L 555,175 L 540,190 L 500,195 L 470,185 Z",
    "West Bengal": "M 425,205 L 475,202 L 490,220 L 485,250 L 460,265 L 430,255 L 410,235 Z",
    "Jharkhand": "M 380,210 L 425,208 L 435,235 L 420,260 L 390,258 L 370,240 Z",
    "Odisha": "M 390,260 L 440,258 L 465,285 L 460,325 L 430,340 L 400,330 L 380,305 Z",
    "Chhattisgarh": "M 320,230 L 380,228 L 395,260 L 385,295 L 350,300 L 315,280 Z",
    "Madhya Pradesh": "M 210,180 L 340,175 L 380,210 L 375,245 L 340,260 L 280,255 L 235,240 L 205,215 Z",
    "Gujarat": "M 80,205 L 170,200 L 210,230 L 215,270 L 195,310 L 145,320 L 95,300 L 70,260 Z",
    "Maharashtra": "M 170,260 L 280,258 L 320,285 L 330,340 L 300,375 L 250,380 L 200,365 L 160,330 L 155,290 Z",
    "Goa": "M 160,360 L 185,358 L 190,375 L 180,385 L 165,380 Z",
    "Karnataka": "M 185,360 L 280,355 L 305,390 L 300,445 L 255,465 L 205,455 L 175,420 L 170,385 Z",
    "Telangana": "M 280,310 L 340,308 L 360,340 L 350,370 L 315,375 L 285,355 Z",
    "Andhra Pradesh": "M 310,375 L 375,370 L 400,395 L 405,440 L 380,470 L 340,475 L 305,455 L 295,420 Z",
    "Tamil Nadu": "M 255,470 L 335,465 L 365,495 L 370,550 L 340,585 L 290,595 L 245,575 L 230,535 L 235,500 Z",
    "Kerala": "M 200,460 L 245,458 L 260,490 L 265,540 L 255,585 L 225,595 L 195,575 L 185,525 L 190,485 Z",
    "Puducherry": "M 330,520 L 340,518 L 342,528 L 333,530 Z",
    "Andaman and Nicobar": "M 520,480 L 535,478 L 545,520 L 550,565 L 545,610 L 535,615 L 525,595 L 515,545 Z",
    "Lakshadweep": "M 140,510 L 150,508 L 152,518 L 143,520 Z",
    "Dadra and Nagar Haveli and Daman and Diu": "M 125,245 L 140,243 L 142,253 L 128,255 Z",
    "Chandigarh": "M 232,92 L 240,90 L 242,98 L 234,100 Z"
};

let selectedState = null;
let customColors = {
    default: '#4CAF50',
    hover: '#FF9800',
    selected: '#2196F3'
};

// Initialize the map
function initMap() {
    const svg = document.getElementById('indiaMap');
    
    // Create state paths
    Object.keys(statePaths).forEach(stateName => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', statePaths[stateName]);
        path.setAttribute('class', 'state-path');
        path.setAttribute('data-state', stateName);
        path.style.fill = customColors.default;
        
        // Add click event
        path.addEventListener('click', () => selectState(stateName, path));
        
        // Add hover events
        path.addEventListener('mouseenter', (e) => {
            if (!path.classList.contains('selected')) {
                path.style.fill = customColors.hover;
            }
            showTooltip(stateName, e);
        });
        
        path.addEventListener('mouseleave', () => {
            if (!path.classList.contains('selected')) {
                path.style.fill = customColors.default;
            }
            hideTooltip();
        });
        
        svg.appendChild(path);
    });
}

function selectState(stateName, pathElement) {
    // Remove previous selection
    if (selectedState) {
        const prevPath = document.querySelector(`[data-state="${selectedState}"]`);
        if (prevPath) {
            prevPath.classList.remove('selected');
            prevPath.style.fill = customColors.default;
        }
    }
    
    // Set new selection
    selectedState = stateName;
    pathElement.classList.add('selected');
    pathElement.style.fill = customColors.selected;
    
    // Show state information
    showStateInfo(stateName);
}

function showStateInfo(stateName) {
    const stateData = statesData[stateName];
    const detailsDiv = document.getElementById('stateDetails');
    
    if (stateData) {
        detailsDiv.innerHTML = `
            <div class="state-info active">
                <h3 style="color: #667eea; margin-bottom: 15px; font-size: 1.5em;">${stateName}</h3>
                <div class="info-item">
                    <strong>Type:</strong>
                    ${stateData.type}
                </div>
                <div class="info-item">
                    <strong>Capital:</strong>
                    ${stateData.capital}
                </div>
                <div class="info-item">
                    <strong>Population:</strong>
                    ${stateData.population}
                </div>
                <div class="info-item">
                    <strong>Area:</strong>
                    ${stateData.area}
                </div>
                <div class="info-item">
                    <strong>Official Language(s):</strong>
                    ${stateData.language}
                </div>
            </div>
        `;
    }
}

function showTooltip(stateName, event) {
    // Simple tooltip implementation (optional enhancement)
}

function hideTooltip() {
    // Hide tooltip (optional enhancement)
}

function applyColors() {
    customColors.default = document.getElementById('defaultColor').value;
    customColors.hover = document.getElementById('hoverColor').value;
    customColors.selected = document.getElementById('selectedColor').value;
    
    // Update all state colors
    document.querySelectorAll('.state-path').forEach(path => {
        if (path.classList.contains('selected')) {
            path.style.fill = customColors.selected;
        } else {
            path.style.fill = customColors.default;
        }
    });
    
    // Update CSS variables for hover
    const style = document.createElement('style');
    style.textContent = `
        .state-path:hover {
            fill: ${customColors.hover} !important;
        }
    `;
    document.head.appendChild(style);
}

function resetColors() {
    document.getElementById('defaultColor').value = '#4CAF50';
    document.getElementById('hoverColor').value = '#FF9800';
    document.getElementById('selectedColor').value = '#2196F3';
    
    customColors = {
        default: '#4CAF50',
        hover: '#FF9800',
        selected: '#2196F3'
    };
    
    applyColors();
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', initMap);

