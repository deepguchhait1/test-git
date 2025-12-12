/**
 * Complete Data of All Indian States and Union Territories
 * Updated: December 2025
 * Total: 28 States + 8 Union Territories = 36 Regions
 */

const ALL_STATES_DATA = {
  // ==================== STATES (28) ====================
  
  "Andhra Pradesh": {
    code: "IN-AP",
    type: "State",
    capital: "Amaravati",
    largestCity: "Visakhapatnam",
    population: "49.5 Million",
    area: "160,205 km²",
    language: "Telugu",
    literacy: "67.7%",
    governor: "S. Abdul Nazeer",
    chiefMinister: "Y. S. Jagan Mohan Reddy",
    formation: "1 November 1956",
    famousFor: "Tirupati Temple, Araku Valley, Beaches",
    districts: 26,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tirupati_temple.jpg"
  },

  "Arunachal Pradesh": {
    code: "IN-AR",
    type: "State",
    capital: "Itanagar",
    largestCity: "Itanagar",
    population: "1.4 Million",
    area: "83,743 km²",
    language: "English, Hindi",
    literacy: "66.9%",
    governor: "Brig. (Dr.) B. D. Mishra",
    chiefMinister: "Pema Khandu",
    formation: "20 February 1987",
    famousFor: "Tawang Monastery, Ziro Valley, Eastern Himalayas",
    districts: 26,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tawang_Monastery.jpg"
  },

  "Assam": {
    code: "IN-AS",
    type: "State",
    capital: "Dispur",
    largestCity: "Guwahati",
    population: "31.2 Million",
    area: "78,438 km²",
    language: "Assamese",
    literacy: "73.2%",
    governor: "Gulab Chand Kataria",
    chiefMinister: "Himanta Biswa Sarma",
    formation: "26 January 1950",
    famousFor: "Tea Gardens, Kaziranga National Park, Silk",
    districts: 35,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Kamakhya_Temple.jpg"
  },

  "Bihar": {
    code: "IN-BR",
    type: "State",
    capital: "Patna",
    largestCity: "Patna",
    population: "104.1 Million",
    area: "94,163 km²",
    language: "Hindi, Urdu",
    literacy: "63.8%",
    governor: "Rajendra Vishwanath Arlekar",
    chiefMinister: "Nitish Kumar",
    formation: "26 January 1950",
    famousFor: "Bodh Gaya, Nalanda University, Ancient History",
    districts: 38,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mahabodhi_temple_bodh_gaya.jpg"
  },

  "Chhattisgarh": {
    code: "IN-CT",
    type: "State",
    capital: "Raipur",
    largestCity: "Raipur",
    population: "25.5 Million",
    area: "135,192 km²",
    language: "Hindi, Chhattisgarhi",
    literacy: "71.0%",
    governor: "Biswabhusan Harichandan",
    chiefMinister: "Vishnu Deo Sai",
    formation: "1 November 2000",
    famousFor: "Waterfalls, Forests, Minerals",
    districts: 33,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chitrakoot_Falls.jpg"
  },

  "Goa": {
    code: "IN-GA",
    type: "State",
    capital: "Panaji",
    largestCity: "Vasco da Gama",
    population: "1.5 Million",
    area: "3,702 km²",
    language: "Konkani",
    literacy: "87.4%",
    governor: "P. S. Sreedharan Pillai",
    chiefMinister: "Pramod Sawant",
    formation: "30 May 1987",
    famousFor: "Beaches, Portuguese Heritage, Tourism",
    districts: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Basilica_of_Bom_Jesus.jpg"
  },

  "Gujarat": {
    code: "IN-GJ",
    type: "State",
    capital: "Gandhinagar",
    largestCity: "Ahmedabad",
    population: "60.4 Million",
    area: "196,244 km²",
    language: "Gujarati",
    literacy: "79.3%",
    governor: "Acharya Devvrat",
    chiefMinister: "Bhupendra Patel",
    formation: "1 May 1960",
    famousFor: "Statue of Unity, Gir Forest, Business Hub",
    districts: 33,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Statue_of_Unity.jpg"
  },

  "Haryana": {
    code: "IN-HR",
    type: "State",
    capital: "Chandigarh",
    largestCity: "Faridabad",
    population: "25.4 Million",
    area: "44,212 km²",
    language: "Hindi",
    literacy: "76.6%",
    governor: "Bandaru Dattatreya",
    chiefMinister: "Nayab Singh Saini",
    formation: "1 November 1966",
    famousFor: "NCR Region, Agriculture, Industries",
    districts: 22,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kurukshetra_Panorama_Science_Museum.jpg"
  },

  "Himachal Pradesh": {
    code: "IN-HP",
    type: "State",
    capital: "Shimla",
    largestCity: "Shimla",
    population: "6.9 Million",
    area: "55,673 km²",
    language: "Hindi, Punjabi",
    literacy: "83.8%",
    governor: "Shiv Pratap Shukla",
    chiefMinister: "Sukhvinder Singh Sukhu",
    formation: "25 January 1971",
    famousFor: "Hill Stations, Himalayan Tourism, Apples",
    districts: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Shimla_India.jpg"
  },

  "Jharkhand": {
    code: "IN-JH",
    type: "State",
    capital: "Ranchi",
    largestCity: "Jamshedpur",
    population: "33.0 Million",
    area: "79,714 km²",
    language: "Hindi",
    literacy: "67.6%",
    governor: "C. P. Radhakrishnan",
    chiefMinister: "Hemant Soren",
    formation: "15 November 2000",
    famousFor: "Minerals, Forests, Tribal Culture",
    districts: 24,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Hundru_Falls.jpg"
  },

  "Karnataka": {
    code: "IN-KA",
    type: "State",
    capital: "Bengaluru",
    largestCity: "Bengaluru",
    population: "61.1 Million",
    area: "191,791 km²",
    language: "Kannada",
    literacy: "75.6%",
    governor: "Thawar Chand Gehlot",
    chiefMinister: "Siddaramaiah",
    formation: "1 November 1956",
    famousFor: "IT Hub, Mysore Palace, Coffee Plantations",
    districts: 31,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mysore_Palace_March_2016.jpg"
  },

  "Kerala": {
    code: "IN-KL",
    type: "State",
    capital: "Thiruvananthapuram",
    largestCity: "Kochi",
    population: "33.4 Million",
    area: "38,852 km²",
    language: "Malayalam",
    literacy: "93.9%",
    governor: "Arif Mohammad Khan",
    chiefMinister: "Pinarayi Vijayan",
    formation: "1 November 1956",
    famousFor: "Backwaters, Ayurveda, Highest Literacy",
    districts: 14,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Houseboat_in_Kerala_backwaters.jpg"
  },

  "Madhya Pradesh": {
    code: "IN-MP",
    type: "State",
    capital: "Bhopal",
    largestCity: "Indore",
    population: "72.6 Million",
    area: "308,245 km²",
    language: "Hindi",
    literacy: "70.6%",
    governor: "Mangubhai C. Patel",
    chiefMinister: "Mohan Yadav",
    formation: "1 November 1956",
    famousFor: "Khajuraho Temples, Tigers, Diamonds",
    districts: 55,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Khajuraho_-_Kandariya_Mahadeo_Temple.jpg"
  },

  "Maharashtra": {
    code: "IN-MH",
    type: "State",
    capital: "Mumbai",
    largestCity: "Mumbai",
    population: "112.4 Million",
    area: "307,713 km²",
    language: "Marathi",
    literacy: "82.9%",
    governor: "Ramesh Bais",
    chiefMinister: "Eknath Shinde",
    formation: "1 May 1960",
    famousFor: "Bollywood, Financial Hub, Gateway of India",
    districts: 36,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gateway_of_India%2C_Mumbai.jpg"
  },

  "Manipur": {
    code: "IN-MN",
    type: "State",
    capital: "Imphal",
    largestCity: "Imphal",
    population: "2.9 Million",
    area: "22,327 km²",
    language: "Meitei, English",
    literacy: "79.8%",
    governor: "Anusuiya Uikey",
    chiefMinister: "N. Biren Singh",
    formation: "21 January 1972",
    famousFor: "Loktak Lake, Classical Dance, Natural Beauty",
    districts: 16,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Loktak_Lake.jpg"
  },

  "Meghalaya": {
    code: "IN-ML",
    type: "State",
    capital: "Shillong",
    largestCity: "Shillong",
    population: "3.0 Million",
    area: "22,429 km²",
    language: "English, Khasi, Garo",
    literacy: "75.5%",
    governor: "Phagu Chauhan",
    chiefMinister: "Conrad Sangma",
    formation: "21 January 1972",
    famousFor: "Living Root Bridges, Wettest Place on Earth, Hills",
    districts: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Living_Root_Bridge.jpg"
  },

  "Mizoram": {
    code: "IN-MZ",
    type: "State",
    capital: "Aizawl",
    largestCity: "Aizawl",
    population: "1.1 Million",
    area: "21,081 km²",
    language: "Mizo, English",
    literacy: "91.6%",
    governor: "Hari Babu Kambhampati",
    chiefMinister: "Lalduhoma",
    formation: "20 February 1987",
    famousFor: "Bamboo Forests, Tribal Culture, Hills",
    districts: 11,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Aizawl_City.jpg"
  },

  "Nagaland": {
    code: "IN-NL",
    type: "State",
    capital: "Kohima",
    largestCity: "Dimapur",
    population: "2.0 Million",
    area: "16,579 km²",
    language: "English",
    literacy: "80.1%",
    governor: "La. Ganesan",
    chiefMinister: "Neiphiu Rio",
    formation: "1 December 1963",
    famousFor: "Hornbill Festival, Tribal Diversity, WWII History",
    districts: 16,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Kohima_War_Cemetery.jpg"
  },

  "Odisha": {
    code: "IN-OR",
    type: "State",
    capital: "Bhubaneswar",
    largestCity: "Bhubaneswar",
    population: "42.0 Million",
    area: "155,707 km²",
    language: "Odia",
    literacy: "73.5%",
    governor: "Ganeshi Lal",
    chiefMinister: "Naveen Patnaik",
    formation: "26 January 1950",
    famousFor: "Jagannath Temple, Konark Temple, Beaches",
    districts: 30,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Konark_Temple.jpg"
  },

  "Punjab": {
    code: "IN-PB",
    type: "State",
    capital: "Chandigarh",
    largestCity: "Ludhiana",
    population: "27.7 Million",
    area: "50,362 km²",
    language: "Punjabi",
    literacy: "76.7%",
    governor: "Banwarilal Purohit",
    chiefMinister: "Bhagwant Mann",
    formation: "1 November 1966",
    famousFor: "Golden Temple, Agriculture, Sikhism",
    districts: 23,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Golden_Temple_Amritsar.jpg"
  },

  "Rajasthan": {
    code: "IN-RJ",
    type: "State",
    capital: "Jaipur",
    largestCity: "Jaipur",
    population: "68.5 Million",
    area: "342,239 km²",
    language: "Hindi, Rajasthani",
    literacy: "67.1%",
    governor: "Kalraj Mishra",
    chiefMinister: "Bhajan Lal Sharma",
    formation: "1 November 1956",
    famousFor: "Palaces, Deserts, Forts, Heritage",
    districts: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Hawa_Mahal.jpg"
  },

  "Sikkim": {
    code: "IN-SK",
    type: "State",
    capital: "Gangtok",
    largestCity: "Gangtok",
    population: "0.6 Million",
    area: "7,096 km²",
    language: "Nepali, Hindi, English",
    literacy: "82.2%",
    governor: "Lakshman Prasad Acharya",
    chiefMinister: "Prem Singh Tamang",
    formation: "16 May 1975",
    famousFor: "Kanchenjunga, Buddhist Monasteries, Organic State",
    districts: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Rumtek_Monastery.jpg"
  },

  "Tamil Nadu": {
    code: "IN-TN",
    type: "State",
    capital: "Chennai",
    largestCity: "Chennai",
    population: "72.1 Million",
    area: "130,060 km²",
    language: "Tamil",
    literacy: "80.3%",
    governor: "R. N. Ravi",
    chiefMinister: "M. K. Stalin",
    formation: "26 January 1950",
    famousFor: "Temples, Classical Dance, Film Industry",
    districts: 38,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Meenakshi_Amman_Temple_Gopuram.jpg"
  },

  "Telangana": {
    code: "IN-TG",
    type: "State",
    capital: "Hyderabad",
    largestCity: "Hyderabad",
    population: "35.2 Million",
    area: "112,077 km²",
    language: "Telugu, Urdu",
    literacy: "66.5%",
    governor: "Jishnu Dev Varma",
    chiefMinister: "A. Revanth Reddy",
    formation: "2 June 2014",
    famousFor: "IT Hub, Charminar, Biryani",
    districts: 33,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Charminar_Hyderabad_1.jpg"
  },

  "Tripura": {
    code: "IN-TR",
    type: "State",
    capital: "Agartala",
    largestCity: "Agartala",
    population: "3.7 Million",
    area: "10,486 km²",
    language: "Bengali, Kokborok",
    literacy: "87.8%",
    governor: "Indra Sena Reddy Nallu",
    chiefMinister: "Manik Saha",
    formation: "21 January 1972",
    famousFor: "Ujjayanta Palace, Tribal Culture, Bamboo",
    districts: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Ujjayanta_Palace.jpg"
  },

  "Uttar Pradesh": {
    code: "IN-UP",
    type: "State",
    capital: "Lucknow",
    largestCity: "Lucknow",
    population: "199.8 Million",
    area: "240,928 km²",
    language: "Hindi, Urdu",
    literacy: "69.7%",
    governor: "Anandiben Patel",
    chiefMinister: "Yogi Adityanath",
    formation: "26 January 1950",
    famousFor: "Taj Mahal, Varanasi, Most Populous State",
    districts: 75,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
  },

  "Uttarakhand": {
    code: "IN-UT",
    type: "State",
    capital: "Dehradun (Winter), Gairsain (Summer)",
    largestCity: "Dehradun",
    population: "10.1 Million",
    area: "53,483 km²",
    language: "Hindi",
    literacy: "79.6%",
    governor: "Lt. Gen. Gurmit Singh",
    chiefMinister: "Pushkar Singh Dhami",
    formation: "9 November 2000",
    famousFor: "Char Dham, Yoga Capital, Himalayas",
    districts: 13,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Badrinath_temple.jpg"
  },

  "West Bengal": {
    code: "IN-WB",
    type: "State",
    capital: "Kolkata",
    largestCity: "Kolkata",
    population: "91.3 Million",
    area: "88,752 km²",
    language: "Bengali",
    literacy: "77.1%",
    governor: "C. V. Ananda Bose",
    chiefMinister: "Mamata Banerjee",
    formation: "26 January 1950",
    famousFor: "Cultural Hub, Victoria Memorial, Darjeeling Tea",
    districts: 23,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Victoria_Memorial%2C_Kolkata.jpg"
  },

  // ==================== UNION TERRITORIES (8) ====================

  "Andaman and Nicobar Islands": {
    code: "IN-AN",
    type: "Union Territory",
    capital: "Port Blair",
    largestCity: "Port Blair",
    population: "0.4 Million",
    area: "8,249 km²",
    language: "Hindi, English",
    literacy: "86.3%",
    administrator: "Admiral D. K. Joshi",
    formation: "1 November 1956",
    famousFor: "Beaches, Cellular Jail, Marine Life",
    districts: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Radhanagar_Beach.jpg"
  },

  "Chandigarh": {
    code: "IN-CH",
    type: "Union Territory",
    capital: "Chandigarh",
    largestCity: "Chandigarh",
    population: "1.1 Million",
    area: "114 km²",
    language: "Hindi, Punjabi, English",
    literacy: "86.4%",
    administrator: "Banwarilal Purohit",
    formation: "1 November 1966",
    famousFor: "Planned City, Rock Garden, Modern Architecture",
    districts: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Rock_Garden_Chandigarh.jpg"
  },

  "Dadra and Nagar Haveli and Daman and Diu": {
    code: "IN-DN",
    type: "Union Territory",
    capital: "Daman",
    largestCity: "Daman",
    population: "0.6 Million",
    area: "603 km²",
    language: "Gujarati, Hindi",
    literacy: "87.1%",
    administrator: "Praful Khoda Patel",
    formation: "26 January 2020",
    famousFor: "Beaches, Portuguese Heritage, Tourism",
    districts: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Daman_Beach.jpg"
  },

  "Delhi": {
    code: "IN-DL",
    type: "Union Territory",
    capital: "New Delhi",
    largestCity: "Delhi",
    population: "16.8 Million",
    area: "1,484 km²",
    language: "Hindi, English",
    literacy: "86.3%",
    chiefMinister: "Arvind Kejriwal",
    lieutenantGovernor: "Vinai Kumar Saxena",
    formation: "9 May 1905",
    famousFor: "National Capital, Red Fort, India Gate, Parliament",
    districts: 11,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Red_Fort_in_Delhi_03-2016_img3.jpg"
  },

  "Jammu and Kashmir": {
    code: "IN-JK",
    type: "Union Territory",
    capital: "Srinagar (Summer), Jammu (Winter)",
    largestCity: "Srinagar",
    population: "12.5 Million",
    area: "42,241 km²",
    language: "Urdu, Kashmiri, Hindi, Dogri",
    literacy: "68.7%",
    lieutenantGovernor: "Manoj Sinha",
    formation: "31 October 2019",
    famousFor: "Dal Lake, Houseboats, Handicrafts, Paradise on Earth",
    districts: 20,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Dal_Lake_Srinagar.jpg"
  },

  "Ladakh": {
    code: "IN-LA",
    type: "Union Territory",
    capital: "Leh, Kargil",
    largestCity: "Leh",
    population: "0.3 Million",
    area: "59,146 km²",
    language: "Ladakhi, Hindi, Urdu",
    literacy: "77.7%",
    lieutenantGovernor: "Brig. (Dr.) B. D. Mishra",
    formation: "31 October 2019",
    famousFor: "Pangong Lake, Monasteries, Cold Desert, Adventure",
    districts: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pangong_Tso.jpg"
  },

  "Lakshadweep": {
    code: "IN-LD",
    type: "Union Territory",
    capital: "Kavaratti",
    largestCity: "Kavaratti",
    population: "0.06 Million",
    area: "32 km²",
    language: "Malayalam",
    literacy: "92.3%",
    administrator: "Praful Khoda Patel",
    formation: "1 November 1956",
    famousFor: "Coral Islands, Lagoons, Marine Life, Smallest UT",
    districts: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Kavaratti_Island.jpg"
  },

  "Puducherry": {
    code: "IN-PY",
    type: "Union Territory",
    capital: "Puducherry",
    largestCity: "Puducherry",
    population: "1.2 Million",
    area: "492 km²",
    language: "Tamil, French",
    literacy: "86.6%",
    chiefMinister: "N. Rangasamy",
    lieutenantGovernor: "Dr. Tamilisai Soundararajan",
    formation: "16 August 1962",
    famousFor: "French Quarter, Auroville, Beaches, Heritage",
    districts: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/French_Quarter_Puducherry.jpg"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ALL_STATES_DATA;
}

console.log("✅ Complete data loaded: 28 States + 8 Union Territories = 36 Regions");
