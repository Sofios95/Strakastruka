interface MenuItem {
  name: string;
  price: string;
  info?: string;
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
    category: "ΚΡΑΣΙΑ (WINES)",
    items: [
      { name: "ΛΕΥΚΟ (ΜΟΣΧΟΦΙΛΕΡΟ)", price: "5€" },
      { name: "ΚΟΚΚΙΝΟ (ΑΓΙΩΡΓΙΤΙΚΟ)", price: "5€" },
    ]
  },
  {
    category: "ΑΛΛΑ (OTHERS)",
    items: [
      { name: "COCA COLA", price: "3€" },
      { name: "SOUROTI", price: "3€" },
    ]
  }
];

export default function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white text-black font-sans min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
        {menuData.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="font-industrial text-5xl md:text-6xl uppercase italic tracking-tighter border-b-[12px] border-black mb-10 pb-2">
              {section.category}
            </h2>
            
            <div className="space-y-8">
              {section.items.map((item, i) => (
                <div key={i} className="flex flex-col border-b border-black/5 pb-4 group">
                  <div className="flex justify-between items-baseline">
                    <span className="font-black text-xl md:text-2xl uppercase italic tracking-tight leading-tight group-hover:bg-black group-hover:text-white transition-colors duration-200">
                      {item.name}
                    </span>
                    <span className="font-industrial text-2xl md:text-3xl ml-4 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.info && (
                    <p className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold mt-2 text-zinc-500 leading-relaxed max-w-[90%]">
                      {item.info}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer του Menu */}
      <div className="text-center mt-20 border-t-4 border-black pt-12 flex flex-col items-center">
        <img 
          src="/strakastuka-logo.jpg" 
          alt="logo" 
          className="h-16 object-contain mb-4 grayscale" 
        />
        <p className="font-industrial text-2xl uppercase italic tracking-[0.2em]">
          strakastrüka
        </p>
        <p className="text-[10px] uppercase tracking-[0.5em] mt-2 font-black opacity-30 italic">
          Music Joint / Athens
        </p>
      </div>
    </div>
  );
}