import type { Plan, Channel, CoverageArea } from './types';

export const PLANS: Plan[] = [
  {
    id: 'plan-100',
    name: 'Starter Fiber',
    speed: 'Up to 100 Mbps',
    price: '1,000',
    isInternetOnly: true,
    features: ['Unlimited data', 'No data caps', 'Ideal for browsing & streaming']
  },
  {
    id: 'plan-150',
    name: 'Family Fiber',
    speed: 'Up to 150 Mbps',
    price: '1,200',
    isInternetOnly: true,
    features: ['Unlimited data', 'No data caps', 'Perfect for families']
  },
  {
    id: 'plan-200',
    name: 'Home Fiber',
    speed: 'Up to 200 Mbps',
    price: '1,400',
    isInternetOnly: true,
    features: ['Unlimited data', 'No data caps', 'Great for multiple devices']
  },
  {
    id: 'plan-250',
    name: 'Elite Fiber + IPTV',
    speed: 'Up to 250 Mbps',
    price: '1,700',
    isInternetOnly: false,
    features: ['Unlimited data', 'Free IPTV included', '48+ TV channels', 'HD streaming']
  },
  {
    id: 'plan-300',
    name: 'Ultra Fiber + IPTV',
    speed: 'Up to 300 Mbps',
    price: '1,900',
    isInternetOnly: false,
    features: ['Unlimited data', 'Free IPTV included', '48+ TV channels', '4K streaming']
  }
];

export const CHANNELS: Channel[] = [
  { name: 'ABS-CBN', color: 'bg-[#E12B26]', image: 'assets/abs-cbn.png' },
  { name: 'GMA', color: 'bg-[#2168D1]', image: '/assets/gma.png' },
  { name: 'CNN PH', color: 'bg-[#B12024]', image: '/assets/cnn-ph.png' },
  { name: 'TV5', color: 'bg-[#28A745]', image: '/assets/tv5.png' },
  { name: 'PTV', color: 'bg-[#1D4ED8]', image: '/assets/ptv.png' },
  { name: 'One Sports', color: 'bg-[#F26522]', image: '/assets/onesports.png' },
  { name: 'GMA News TV', color: 'bg-[#3B82F6]', image: '/assets/gmanewstv.png' },
  { name: 'DZMM', color: 'bg-[#D97706]', image: '/assets/dzmm.png' },
  { name: 'Kapamilya Channel', color: 'bg-[#EF4444]', image: '/assets/kapamilya.png' },
  { name: 'A2Z', color: 'bg-[#9333EA]', image: '/assets/a2z.png' },
  { name: 'Cinema One', color: 'bg-[#1E293B]', image: '/assets/c1.png' },
  { name: 'Jeepney TV', color: 'bg-[#B45309]', image: '/assets/jeepney.png' },
  { name: 'Knowledge Channel', color: 'bg-[#0D9488]', image: '/assets/knowledge.png' },
  { name: 'CNN International', color: 'bg-[#991B1B]', image: '/assets/cnn-international.png' },
  { name: 'BBC World News', color: 'bg-[#334155]', image: '/assets/bbc.png' },
  { name: 'Al Jazeera', color: 'bg-[#C2410C]', image: '/assets/aljazeera.png' },
  { name: 'NHK World', color: 'bg-[#1E40AF]', image: '/assets/nhk.png' },
  { name: 'Animal Planet', color: 'bg-[#15803D]', image: '/assets/animalplanet.png' },
  { name: 'Discovery', color: 'bg-[#2563EB]', image: '/assets/disco.png' },
  { name: 'National Geographic', color: 'bg-[#CA8A04]', image: '/assets/natgeo.png' },
  { name: 'History Channel', color: 'bg-[#475569]', image: '/assets/history.png' },
  { name: 'Tap Sports', color: 'bg-[#1E293B]', image: '/assets/tap.png' },
  { name: 'ESPN', color: 'bg-[#DC2626]', image: '/assets/espn.png' },
  { name: 'NBA PH', color: 'bg-[#0F172A]', image: '/assets/nbaph.png' }
];

export const COVERAGE: CoverageArea[] = [
  {
    city: 'SANTIAGO CITY',
    barangays: ['Balintocatoc','Baluarte','Bannawag Norte','Bannawag Sur','Baptista','Batal','Buenavista','Calao East','Calaocan P1','Centro East','Centro West','Divisoria','Dubinan East','Duninan West','Luna','Mabini','Malvar','Nagassican','Nabuan','Patul','Plaridel','Rizal','Rosario','Sagana','San Andres','San Jose','Sinsayon','Sta. Rosa','Victory Norte','Victory Sur','Villasis']
  },
  {
    city: 'CORDON',
    barangays: ['Bimmangon','Calimaturod','Capirpirwan','Caquilingan','Gayong','Ilot','Laurel','Osmena','Quirino','Roxas','Sagat','San Antonio','Tanggal','Taringsing','Turod Norte','Turod Sur','Villamarso','Wigan']
  },
  {
    city: 'TALAVERA',
    barangays: ['Andal Alino','Bagong Sikat','Baluga','Bantug Hacienda','Bantug La Torre','Bugtong na Buli','Burnay','Caaninaplahan','Cabubulaunan','Calipahan','Campos','Caputican','Collado','Dimasalang Norte','Dinarayat','Edmar Village','Esguerra','Gulod','Homestead I','Homestead II','Kinalanguyan','La torre','Lomboy','Mabuhay','Maestrang Kikay','Mamandil','Marcos','Matias','Minabuyok','Pag-Asa','Paludpod','Pinagpanaan','Poblacion','Pula','Pulong San Miguel','Sampaloc','San Miguel na Munti','San Pascual','San Ricardo','Sibul','Valle']
  },
  {
    city: 'GUIMBA',
    barangays: ['Bacayao','Bantug','Bunol','Cabaruan','Casongsong','Cavite','Cawayan Bugtong','Ilong Baliwag','Lennec','Maturanoc','Narvacan','Pacac','Pasong Inchik','San Rafael','San Roque','Saranay','St. John','Sta. Veronica','Sto. Cristo','Triala']
  },
  {
    city: 'STO. DOMINGO',
    barangays: ['Baloc','Cabugao','Hulo','Malaya','Malayantoc','Malasin','Poblacion','Pulong Buli','Sagaba','San Agustin','San Fabian','San Francisco','San Pascual','Sto. Rosario']
  },
  {
    city: 'SAGUDAY',
    barangays: ['Dibul','Gamis','Magsaysay','Mangandingay','Rizal','Salvacion','Santo Tomas','Tres Reyes']
  },
  {
    city: 'CABARROGUIS',
    barangays: ['Balagbag','Burgos','Del Pilar','Gundaway','San Marcos','Sto. Domingo','Villamor','Zamora']
  }
];
