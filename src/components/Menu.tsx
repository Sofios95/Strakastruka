// 1. Ορίζουμε τον τύπο για τα αντικείμενα του menu
interface MenuItem {
  name: string;
  price: string;
  info?: string; // Το ερωτηματικό σημαίνει ότι είναι προαιρετικό
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "COCKTAILS",
    items: [
      { name: "MARGARITA", price: "9€", info: "TEQUILA, TRIPLE SEC, LIME JUICE, AGAVE SYRUP, SALTED RIM, SLICE LIME" },
      { name: "PALOMA", price: "9€", info: "TEQUILA, LIME JUICE, GRAPEFRUIT SODA, SLICE LIME, SALTED RIM" },
      { name: "MOHITO", price: "9€", info: "RUM, LIME (HALF), MINT LEAVES, DARK SUGAR, SODA, SLICE LIME, BITTER DROPS" },
      { name: "CAIPIRINHA", price: "9€", info: "CACHACA, LIME (HALF), DARK SUGAR, SLICE LIME, BITTER DROPS" },
      { name: "CAIPIROSKA", price: "9€", info: "VODKA, HALF A LIME, DARK SYRUP, SLICE LIME" },
      { name: "PINK APEROL", price: "9€", info: "APEROL, LIME JUICE, GRAPEFRUIT SODA, SLICE ORANGE, BITTER DROP" },
      { name: "OLD FASHIONED", price: "9€", info: "BOURBON, SUGAR CUBE, BITTER DROPS, ORANGE PEEL" },
      { name: "MAI TAI", price: "9€", info: "LIGHT RUM, DARK RUM, TRIPLE SEC, ALMOND SYRUP, LIME JUICE, LIME+LEMON PEEL, BITTER DROPS" },
      { name: "NEGRONI", price: "9€", info: "GIN, CAMPARI, VERMOUTH, ORANGE PEEL, BITTER DROPS" },
    ]
  },
  {
    category: "ΠOΤΑ (SPIRITS)",
    items: [
      { name: "GIN (ΑΠΛΟ / SPECIAL)", price: "7€ / 8€" },
      { name: "ΡΟΥΜΙ (ΑΠΛΟ / SPECIAL)", price: "7€ / 8€" },
      { name: "ΤΕΚΙΛΑ (ΑΠΛΟ / SPECIAL)", price: "7€ / 8€" },
      { name: "ΟΥΙΣΚΙ SINGLE MALT", price: "7€" },
      { name: "ΟΥΙΣΚΙ BOURBON", price: "8€" },
      { name: "ΟΥΙΣΚΙ BLENDED", price: "7€" },
      { name: "ΟΥΙΣΚΙ SPECIAL", price: "10€" },
      { name: "APEROL / CAMPARI / DISARONNO / MARTINI", price: "7€" },
    ]
  },
  {
    category: "ΚΡΑΣΙΑ (WINES 187ml)",
    items: [
      { name: "ΛΕΥΚΟ (ΜΟΣΧΟΦΙΛΕΡΟ)", price: "5€" },
      { name: "ΚΟΚΚΙΝΟ (ΑΓΙΩΡΓΙΤΙΚΟ)", price: "5€" },
    ]
  },
  {
    category: "ΑΛΛΑ (OTHERS)",
    items: [
      { name: "COCA COLA", price: "3€" },
      { name: "CARBONATED WATER 'SOUROTI'", price: "3€" },
    ]
  }
];

export default function Menu() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 bg-white text-black font-sans">
      {menuData.map((section, idx) => (
        <div key={idx} className="mb-20">
          <h2 className="font-industrial text-5xl uppercase italic tracking-tighter border-b-8 border-black mb-10 pb-2">
            {section.category}
          </h2>
          
          <div className="space-y-10">
            {section.items.map((item, i) => (
              <div key={i} className="flex flex-col border-b border-black/10 pb-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-black text-xl md:text-2xl uppercase italic tracking-tight leading-tight">
                    {item.name}
                  </span>
                  <span className="font-industrial text-2xl md:text-3xl ml-4 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                {item.info && (
                  <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold mt-2 text-zinc-500 leading-relaxed max-w-[85%]">
                    ({item.info})
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Footer του Menu */}
      <div className="text-center mt-32 border-t-4 border-black pt-10 flex flex-col items-center">
        <img 
          src="/strakastuka-logo.jpg" 
          alt="strakastrüka logo" 
          className="h-20 object-contain mb-4" 
        />
        <p className="font-industrial text-xl uppercase italic tracking-widest">
          strakastrüka
        </p>
        <p className="text-[9px] uppercase tracking-[0.4em] mt-2 opacity-40 font-bold">
          Exarcheia • Athens
        </p>
      </div>
    </div>
  );
}