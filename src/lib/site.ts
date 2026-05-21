export const SITE = {
  name: "SRI TULASI AGRITECH",
  short: "Sri Tulasi",
  tagline: "Empowering Indian Agriculture with Premium Seeds",
  established: 2017,
  owner: "Thammaneni Veere Nagi Reddy",
  phone: "7036609999",
  address: {
    line1: "SRI TULASI PVT. LTD",
    line2: "802 Pet Baseerabad, Jeedimatla",
    line3: "Quthbullapur, Hyderabad – 500072",
  },
  states: ["Andhra Pradesh", "Telangana", "Madhya Pradesh", "Haryana", "Karnataka", "Uttar Pradesh"],
  stats: {
    tons: 8000,
    states: 6,
    since: 2017,
    farmers: 12000,
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/catalog", label: "Catalog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
