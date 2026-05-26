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
      { name: "MARGARITA", price: "9€", info: "(TEQUILA, TRIPLE SEC, LIME JUICE, AGAVE SYRUP, SALTED RIM, SLICE LIME)" },
      { name: "PALOMA", price: "9€", info: "(TEQUILA, LIME JUICE, GRAPEFRUIT SODA, SLICE LIME, SALTED RIM)" },
      { name: "MOJITO", price: "9€", info: "(RUM, HALF A LIME, MINT LEAVES, DARK SUGAR, SODA, SLICE LIME, BITTER DROPS)" },
      { name: "CAIPIRINHA", price: "9€", info: "(CACHACA, HALF A LIME, DARK SUGAR, SLICE LIME, BITTER DROPS)" },
      { name: "CAIPIROSKA", price: "9€", info: "(VODKA, HALF A LIME, DARK SYRUP, SLICE LIME)" },
      { name: "PINK APEROL", price: "9€", info: "(APEROL, LIME JUICE, GRAPEFRUIT SODA, SLICE ORANGE, BITTER DROPS)" },
      { name: "OLD FASHIONED", price: "9€", info: "(BOURBON, SUGAR CUBE, BITTER DROPS, ORANGE PEEL)" },
      { name: "MAI TAI", price: "9€", info: "(LIGHT RUM, DARK RUM, TRIPLE SEC, ALMOND SYRUP, LIME JUICE, LIME, LEMON PEEL, BITTER DROPS)" },
      { name: "NEGRONI", price: "9€", info: "(GIN, CAMPARI, VERMOUTH, ORANGE PEEL, BITTER DROPS)" },
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
    category: "ΑΛΛΑ (REST)",
    items: [
      { name: "SOFT DRINKS", price: "3€" },
      { name: "SOUROTI", price: "3€" },
    ]
  }
];

export default function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 bg-white text-black font-inter min-h-screen antialiased">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
        {menuData.map((section, idx) => (
          <div key={idx} className="mb-24">
            {/* Category Header: Τεράστιο και Bold */}
            <h2 className="font-black text-7xl md:text-8xl uppercase tracking-tighter border-b-[20px] border-black mb-16 pb-6 leading-none">
              <p>{section.category}</p>
            </h2>
            
            <div className="space-y-14">
              {section.items.map((item, i) => (
                <div key={i} className="flex flex-col border-b-2 border-black/10 pb-8 group">
                  <div className="flex justify-between items-start gap-4">
                    {/* Item Name: Μεγαλύτερο (text-3xl) */}
                    <p className="font-black text-2xl md:text-4xl uppercase tracking-tight leading-tight group-hover:bg-black group-hover:text-white transition-colors duration-200 px-1">
                      {item.name}
                    </p>
                    {/* Price: Πολύ μεγάλο για να μη ρωτάνε "πόσο κάνει;" */}
                    <p className="font-black text-3xl md:text-5xl whitespace-nowrap leading-none">
                      {item.price}
                    </p>
                  </div>
                  
                  {item.info && (
                    /* Info: Μεγαλύτερο και πιο σκούρο (zinc-700) για ανάγνωση */
                    <p className="font-bold text-sm md:text-base uppercase tracking-wider mt-7 text-zinc-750 leading-relaxed max-w-[95%]">
                      {item.info}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer: Επιβλητικό */}
      <div className="text-center mt-40 border-t-[12px] border-black pt-20 flex flex-col items-center">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-8">
           <img 
            src="/strakastruka-logo.jpg" 
            alt="logo" 
            className="h-14 w-14 object-contain grayscale invert" 
          />
        </div>
        
        <p className="font-brand text-5xl md:text-8xl lowercase tracking-widest text-black">
          strakastrüka
        </p>
        
        <div className="flex items-center gap-6 mt-8">
          <div className="h-[4px] w-16 bg-[#f15a24]"></div>
          <p className="font-brand text-lg md:text-xl uppercase tracking-[0.4em] opacity-40">
            Music Joint / Athens
          </p>
          <div className="h-[4px] w-16 bg-[#f15a24]"></div>
        </div>
      </div>
    </div>
  );
}