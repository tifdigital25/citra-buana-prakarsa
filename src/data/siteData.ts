export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Mixed-Use' | 'Commercial' | 'Hospitality' | 'Residential' | 'Industrial' | 'Eco-Luxury';
  location: string;
  status: 'Completed' | 'Under Development' | 'Now Selling';
  heroImage: string;
  gallery: string[];
  excerpt: string;
  description: string[];
  specs: { label: string; value: string }[];
  features: string[];
  featured?: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const COMPANY_INFO = {
  name: 'PT Citra Buana Prakarsa',
  shortName: 'CBP Group',
  tagline: 'The Pioneer of Master-Planned Communities in Batam',
  established: 1988,
  address: 'Menara Aria #17-01, Harbour Bay Downtown, Jl. Duyung, Batu Ampar – Batam 29453, Kepulauan Riau, Indonesia',
  phone: '+62 (778) 428500',
  fax: '+62 (778) 430005',
  email: 'info@citrabuanaprakarsa.com',
  marketingGallery: 'Harbour Bay Downtown, Batam, Indonesia',
  socials: {
    instagram: 'https://www.instagram.com/cbpmarketinggallery/',
    facebook: 'https://www.facebook.com/CitraBuanaPrakarsa/',
    linkedin: 'https://www.linkedin.com/company/citra-buana-prakarsa/',
    youtube: 'https://www.youtube.com/@citrabuanaprakarsagroup',
  },
  stats: [
    { value: '35+', label: 'Years of Excellence', suffix: 'Years' },
    { value: '80', label: 'Hectares of Modern Infrastructure', suffix: 'Ha' },
    { value: '37', label: 'Storey Landmark Twin Tower', suffix: 'Floors' },
    { value: '4.5k+', label: 'Daily International Ferry Passengers', suffix: '/day' },
  ]
};

export const PROPERTIES: Property[] = [
  {
    id: 'union-square',
    slug: 'union-square',
    title: 'Union Square Batam',
    subtitle: 'Work Life Harmony in Batam’s Iconic Twin Tower',
    category: 'Mixed-Use',
    location: 'Harbour Bay Downtown, Batu Ampar, Batam',
    status: 'Now Selling',
    featured: true,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2022/08/facde-union-1024x576.jpg',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2022/08/facde-union-1024x576.jpg',
      'https://citrabuanaprakarsa.com/wp-content/uploads/2022/08/F2.jpg',
      'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-3-1024x494.jpg',
    ],
    excerpt: 'The Union Square is an office and condominium twin tower in the heart of Harbour Bay Downtown, steps away from world-class hotels and international ferry terminal.',
    description: [
      'The Union Square is an iconic office and condominium twin tower rising 37 floors in the heart of Harbour Bay Downtown. Just steps away from world-class hotels, international ferry terminals, seaside promenade dining, and vibrant nightlife.',
      'Each 37-floor tower peaks over the Batam skyline, commanding panoramic vistas of Batam City and the glittering Singapore marina skyline. Offering Grade A premium office suites alongside exclusive high-end condominium residences.',
      'Features include 12,000 m² of flexible Grade A office space, private infinity sky pool, high-tech access control, and the signature rooftop Sky Lounge & Café.'
    ],
    specs: [
      { label: 'Tower Height', value: '37 Storeys Twin Tower' },
      { label: 'Office Area', value: '12,000 m² Grade A Office Space' },
      { label: 'Views', value: 'Singapore Skyline & Oceanfront' },
      { label: 'Facilities', value: 'Sky Lounge, Infinity Pool, Smart Access' },
    ],
    features: [
      'Grade A Premium Office Tower',
      'Luxury Condominium Residences',
      'Sky Lounge Café on the top floor',
      'Direct connectivity to Bayfront Promenade',
      'Underground Multi-level Parking',
      'Advanced 24/7 Security & High-speed Elevators'
    ]
  },
  {
    id: 'harbour-bay-integrated-city',
    slug: 'harbour-bay-integrated-city',
    title: 'Harbour Bay Downtown',
    subtitle: 'Batam’s Premier Integrated Waterfront City',
    category: 'Mixed-Use',
    location: 'Batu Ampar Waterfront, Batam',
    status: 'Completed',
    featured: true,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/hbdt-sea-.jpg',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/hbdt-sea-.jpg',
      'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/Harbour-Bay-Batam-Ferry-Terminal-1024x768.jpg',
      'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/DJI_0056-scaled.jpg',
    ],
    excerpt: 'Self-sufficient integrated waterfront city with modern International Ferry Terminal, luxury hotels, mall, entertainment, and Grade A business offices.',
    description: [
      'Developed as a self-sufficient integrated coastal city, Harbour Bay Downtown caters to international tourism and regional commerce between Singapore, Malaysia, and Indonesia.',
      'At its core is the Harbour Bay International Ferry Terminal (operational since 2006), whisking travelers to and from Singapore in just 40 minutes with 38 daily scheduled trips carrying over 4,500 passengers per day.',
      'Integrated with Bayfront Mall, Batam Marriott Hotel Harbour Bay, Swiss-Belhotel, Zest Hotel, Menara Aria, and seaside seafood culinary strips.'
    ],
    specs: [
      { label: 'Transit Time', value: '40 Mins to Singapore' },
      { label: 'Passenger Flow', value: '4,500+ Daily International Travelers' },
      { label: 'Components', value: 'Ferry Terminal, Mall, Hotels, Office Towers' },
      { label: 'Ferry Routes', value: '38 Daily Trips to Singapore & Malaysia' },
    ],
    features: [
      'Modern International Ferry Terminal with Autogate',
      'Bayfront Mall & Waterfront Dining Strip',
      '5-Star Marriott Hotel & 4-Star Swiss-Belhotel',
      'Grade A Corporate Office Towers',
      'Marina & Seaside Promenade'
    ]
  },
  {
    id: 'menara-aria',
    slug: 'menara-aria',
    title: 'Menara Aria Office Tower',
    subtitle: '18-Storey Sea-Facing Grade A Corporate Address',
    category: 'Commercial',
    location: 'Harbour Bay Downtown, Batu Ampar, Batam',
    status: 'Completed',
    featured: true,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/menara-drone-1024x576.jpg',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/menara-drone-1024x576.jpg',
      'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-1-1024x494.jpg',
    ],
    excerpt: 'Located in the middle of Batu Ampar business district next to Harbour Bay Residences and Marriott Hotel, 40 minutes from Singapore.',
    description: [
      'Menara Aria combines contemporary architectural design with stylish, high-efficiency corporate interiors. Dominated by premium natural granite, marble entrance lobbies, and energy-efficient curtain glass façades.',
      'Designed to satisfy multinational corporations, financial institutions, and logistics leaders demanding prestigious corporate identity in the Batam Free Trade Zone.',
      'Features ample underground parking, 24-hour security, high-capacity fiber broadband, and direct covered access to Bayfront Mall and Harbour Bay Ferry Terminal.'
    ],
    specs: [
      { label: 'Height', value: '18 Storeys' },
      { label: 'Architecture', value: 'Modern Granite & Glass Curtain Wall' },
      { label: 'Accessibility', value: 'Direct Bridge to Mall & Ferry Terminal' },
      { label: 'Parking', value: 'Multi-level Underground Parking' },
    ],
    features: [
      'Sea-facing unobstructed ocean views',
      'Premium granite & marble grand reception',
      'High-speed destination-control elevators',
      'Batam FTZ strategic investment zone',
      'Covered walkway to international ferry terminal'
    ]
  },
  {
    id: 'nirup-island',
    slug: 'nirup-island',
    title: 'Nirup Island Private Luxury Resort',
    subtitle: 'Eco-Luxury Island Sanctuary Just 30 Mins from Singapore',
    category: 'Eco-Luxury',
    location: 'Riau Archipelago, Batam',
    status: 'Completed',
    featured: true,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2026/02/DJI_0746-copy-scaled-e1770095219417.jpg',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2026/02/DJI_0746-copy-scaled-e1770095219417.jpg',
    ],
    excerpt: 'Private eco-luxury destination offering world-class resort by The Westin, pristine beaches, private marina, and sustainable island living.',
    description: [
      'Nirup Island is an exclusive, private eco-luxury destination nestled in Indonesia’s Riau Archipelago, situated only 30 minutes by luxury catamaran from Singapore’s Sentosa / HarbourFront.',
      'Managed in partnership with The Westin, the island combines sustainable architecture, solar integration, coral conservation, and pristine private white-sand coves.',
      'Equipped with a state-of-the-art international yacht marina, private overwater villas, ocean wellness spa, and bespoke nautical concierge.'
    ],
    specs: [
      { label: 'Location', value: '30 Mins by Boat from Singapore' },
      { label: 'Operator', value: 'The Westin Resort & Marina' },
      { label: 'Concept', value: 'Zero-Carbon Eco-Luxury Island' },
      { label: 'Amenities', value: 'Private Marina, Overwater Villas, Coral Reef Sanctuary' },
    ],
    features: [
      'Private Yacht Marina & Customs Clearance',
      'Overwater and Beachfront Luxury Villas',
      'World-class Spa & Wellness Sanctuary',
      'Direct private boat transfer from Singapore & Batam',
      'Sustainable water desalination & green energy systems'
    ]
  },
  {
    id: 'swiss-belhotel-harbour-bay',
    slug: 'swiss-belhotel-harbour-bay',
    title: 'Swiss-Belhotel Harbour Bay',
    subtitle: '4-Star International Hotel & Grand Convention Centre',
    category: 'Hospitality',
    location: 'Harbour Bay Downtown, Batu Ampar, Batam',
    status: 'Completed',
    featured: false,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-3-1024x494.jpg',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-3-1024x494.jpg',
      'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/f-5-1024x597.png',
    ],
    excerpt: '4-star international hotel providing high standard hospitality, grand ballroom, and seamless connection to ferry terminal and shopping centers.',
    description: [
      'Swiss-Belhotel Harbour Bay is an acclaimed 4-star international business and leisure hotel strategically situated adjacent to Harbour Bay Ferry Terminal.',
      'Features 179 elegantly appointed guestrooms and suites, extensive conference and banquet facilities including one of Batam’s largest pillarless ballrooms, swimming pool, and fine dining outlets.',
      'The ideal base for multinational business delegates and regional tourists seeking luxury convenience.'
    ],
    specs: [
      { label: 'Star Rating', value: '4-Star International' },
      { label: 'Rooms', value: '179 Deluxe Rooms & Suites' },
      { label: 'MICE Capacity', value: 'Grand Ballroom up to 1,500 Guests' },
      { label: 'Airport / Ferry', value: 'Adjacent to Terminal / 30 mins to Airport' },
    ],
    features: [
      'Grand Pillarless Ballroom & Meeting Suites',
      'Swiss-Café Restaurant & Lounge Bar',
      'Outdoor Swimming Pool & Fitness Club',
      'Direct indoor passage to Harbour Bay Mall'
    ]
  },
  {
    id: 'horizon-industrial-park',
    slug: 'horizon-industrial-park',
    title: 'Horizon Industrial Park',
    subtitle: '80 Hectares of High-Spec Industrial Infrastructure',
    category: 'Industrial',
    location: 'Batu Ampar & Sei Lekop, Batam',
    status: 'Completed',
    featured: false,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/DJI_0056-scaled.jpg',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/DJI_0056-scaled.jpg',
    ],
    excerpt: 'Strategic 80-hectare modern industrial park with high-capacity electrical grids, logistics staging, and bonded free-trade benefits.',
    description: [
      'Horizon Industrial Park represents 80 hectares of premier industrial real estate designed for international manufacturers, marine engineering firms, and clean tech facilities.',
      'Situated within easy reach of Batam’s major deep-sea ports and international freight routes, providing turn-key standard factory buildings and custom-built industrial plots.'
    ],
    specs: [
      { label: 'Total Land Size', value: '80 Hectares' },
      { label: 'Zoning', value: 'Heavy / Light Industry & Logistics' },
      { label: 'Power & Water', value: 'Redundant High-Voltage Grid & Water Treatment' },
    ],
    features: [
      'Ready-built factories & customized land plots',
      'Direct container access to cargo ports',
      'Free Trade Zone tax incentives & bonded warehouse status',
      'Internal wide road corridors & 24/7 industrial estate security'
    ]
  },
  {
    id: 'zest-hotel-batam',
    slug: 'zest-hotel-batam',
    title: 'Zest Harbour Bay Hotel',
    subtitle: 'Vibrant, Efficient Modern Business Hospitality',
    category: 'Hospitality',
    location: 'Harbour Bay Downtown, Batam',
    status: 'Completed',
    featured: false,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/f-5-1024x597.png',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/f-5-1024x597.png',
    ],
    excerpt: 'Smart and stylish hotel located just 5 minutes walk from Harbour Bay Ferry Terminal, offering Citrus Café and fast Wi-Fi.',
    description: [
      'Zest Hotel Harbour Bay Batam delivers smart, clean, and energetic hospitality for modern travelers and short-stay business executives.',
      'Just a 5-minute stroll from the ferry berths, featuring modern minimalist rooms, high-speed Wi-Fi, compact meeting rooms, and all-day dining at Citrus Café.'
    ],
    specs: [
      { label: 'Category', value: 'Modern Lifestyle Business Hotel' },
      { label: 'Location', value: '5-Minute Walk to Ferry Terminal' },
      { label: 'Dining', value: 'Citrus Café All-Day Dining' },
    ],
    features: [
      'High-speed complimentary fiber Wi-Fi',
      'Workstations & compact conference rooms',
      'Immediate access to Harbour Bay nightlife and shopping'
    ]
  },
  {
    id: 'k-square-batam',
    slug: 'k-square-batam',
    title: 'K Square Batam',
    subtitle: 'Integrated Commercial & Lifestyle Center',
    category: 'Commercial',
    location: 'Mukakuning Intersection, Batam',
    status: 'Completed',
    featured: false,
    heroImage: 'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-1-1024x494.jpg',
    gallery: [
      'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-1-1024x494.jpg',
    ],
    excerpt: 'Strategically located at the 4-way intersection of Mukakuning connecting Nagoya, Batam Center, and Hang Nadim Airport.',
    description: [
      'K Square is a vibrant retail, commercial, and culinary center located at the critical transit intersection connecting Mukakuning industrial zones, Nagoya commerce, Batam Center government district, and Hang Nadim Airport.',
      'Features high-traffic shophouse complexes, culinary plazas, and retail outlets catering to thousands of working professionals daily.'
    ],
    specs: [
      { label: 'Concept', value: 'Commercial Hub & Lifestyle Square' },
      { label: 'Strategic Position', value: 'Intersection of 4 Main Batam Arteries' },
    ],
    features: [
      'High footfall retail shophouses',
      'Food & beverage open-air lifestyle plaza',
      'Spacious parking & vehicular accessibility'
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'open-house-imlek-2026',
    slug: 'open-house-imlek-2026',
    title: 'PT Citra Buana Prakarsa Gelar Open House Imlek 2026, Meriah dan Sarat Kebersamaan',
    date: '19 Februari 2026',
    category: 'Corporate Events',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-3-1024x494.jpg',
    excerpt: 'PT Citra Buana Prakarsa kembali menggelar Open House Tahun Baru Imlek 2026 bersama seluruh karyawan dalam suasana yang hangat, meriah, dan penuh kebersamaan.',
    content: [
      'Batam – PT Citra Buana Prakarsa (PT CBP) kembali menggelar Open House Tahun Baru Imlek 2026 bersama seluruh jajaran manajemen dan karyawan dalam suasana yang hangat, meriah, dan penuh kekeluargaan.',
      'Acara ini berlangsung di Grand Ballroom Swiss-Belhotel Harbour Bay, Batam, dihadiri oleh pimpinan eksekutif, mitra bisnis perbankan, dan rekanan kontraktor yang telah mendukung perjalanan PT CBP selama lebih dari 3 dekade.',
      'Manajemen menyampaikan apresiasi tinggi atas dedikasi insan CBP Group dalam mengawal penyelesaian proyek-proyek strategis seperti Union Square dan Nirup Island, serta optimisme tinggi dalam menyambut pertumbuhan ekonomi kawasan Batam.'
    ]
  },
  {
    id: 'csr-sembako-tanjung-uma',
    slug: 'csr-sembako-tanjung-uma',
    title: 'PT Citra Tritunas Salurkan 1.000 Paket Sembako untuk Warga Tanjung Uma',
    date: '31 Januari 2026',
    category: 'CSR & Community',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/hbdt-sea-.jpg',
    excerpt: 'Sebagai bentuk kepedulian sosial berkelanjutan, PT Citra Tritunas (anak usaha CBP Group) menyalurkan 1.000 paket sembako kepada warga Kelurahan Tanjung Uma.',
    content: [
      'Sebagai komitmen Corporate Social Responsibility (CSR) dan kepedulian terhadap masyarakat pesisir sekitar kawasan Harbour Bay, PT Citra Tritunas menyalurkan 1.000 paket sembako secara langsung kepada warga Tanjung Uma, Batam.',
      'Inisiatif ini merupakan agenda tahunan perusahaan sekaligus memperingati ulang tahun kawasan Harbour Bay Downtown. Program ini disambut hangat oleh tokoh masyarakat setempat.',
      'CBP Group senantiasa memastikan bahwa pertumbuhan pesat properti dan pariwisata berjalan beriringan dengan kesejahteraan masyarakat lokal di sekitar proyek.'
    ]
  },
  {
    id: 'union-square-maserati-lucky-draw',
    slug: 'union-square-maserati-lucky-draw',
    title: 'Union Square Batam Holds Lucky Draw Celebration, Maserati Grand Prize Testifies to Trust',
    date: '15 Desember 2025',
    category: 'Project Milestones',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2022/08/facde-union-1024x576.jpg',
    excerpt: 'Union Square Batam successfully hosted a spectacular customer appreciation gala featuring a brand-new Maserati luxury car as the grand prize.',
    content: [
      'As a testament to customer trust and loyalty, Union Square Batam hosted a gala appreciation night for buyers and institutional investors, culminating in a grand draw for a brand-new Maserati.',
      'Sales performance for Union Square’s premium residential and office suites reached a new record high, driven by unprecedented interest from Singaporean, Malaysian, and domestic Indonesian high-net-worth buyers.',
      'The event highlighted the distinctive prestige of being an owner in Batam’s tallest twin tower landmark.'
    ]
  },
  {
    id: 'union-square-topping-off',
    slug: 'union-square-topping-off',
    title: 'Union Square Holds Topping-Off Ceremony, Presenting Modern Residences in Heart of Batam',
    date: '28 Oktober 2025',
    category: 'Construction Updates',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2022/08/F2.jpg',
    excerpt: 'The 37-storey twin tower marks its official structural completion with a grand topping-off ceremony at Harbour Bay Downtown.',
    content: [
      'PT Citra Buana Prakarsa celebrated the structural completion of Union Square with an official topping-off ceremony at the 37th floor rooftop.',
      'The milestone represents on-time construction progress and commitment to world-class engineering standards. Interior fit-outs and curtain wall glazing are progressing ahead of target.'
    ]
  }
];

export const LEADERSHIP = [
  {
    name: 'Board of Commissioners',
    role: 'Visionary Governance',
    desc: 'Guiding corporate strategy and long-term sustainable investments across industrial and real estate sectors since 1988.'
  },
  {
    name: 'Executive Board',
    role: 'Operational Leadership',
    desc: 'Driving master-planned community development, hospitality partnerships with global brands, and sustainable growth.'
  },
  {
    name: 'Project Development & Engineering',
    role: 'Technical Excellence',
    desc: 'Spearheading world-class high-rise construction, marine engineering, and infrastructure projects across Batam and the Riau Islands.'
  }
];

export const CORE_VALUES = [
  {
    title: 'Pioneering Vision',
    desc: 'First to create master-planned integrated coastal cities and private island eco-resorts in the Batam free-trade zone.'
  },
  {
    title: 'Uncompromising Quality',
    desc: 'Crafting Grade A corporate spaces, 4 & 5-star international hospitality, and enduring residential architecture.'
  },
  {
    title: 'Regional Synergy',
    desc: 'Bridging Indonesia, Singapore, and Malaysia with 40-minute fast sea connections and seamless borderless trade.'
  },
  {
    title: 'Sustainability & Community',
    desc: 'Balancing eco-luxury initiatives like coral preservation on Nirup Island with continuous community empowerment.'
  }
];

