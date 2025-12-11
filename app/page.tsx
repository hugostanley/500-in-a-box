export default function Home() {
  // Christmas color palette - RGB values for festive theme
  const colors = {
    red: { r: 220, g: 38, b: 38 },
    green: { r: 34, g: 197, b: 94 },
    gold: { r: 234, g: 179, b: 8 },
    white: { r: 255, g: 255, b: 255 },
  };

  // Snowflake coordinates for background animation
  const snowflakes = [
    { x: 120, y: 340, size: 12 },
    { x: 450, y: 180, size: 8 },
    { x: 890, y: 520, size: 15 },
    { x: 230, y: 720, size: 10 },
    { x: 670, y: 280, size: 14 },
    { x: 1100, y: 650, size: 9 },
    { x: 340, y: 450, size: 11 },
    { x: 780, y: 190, size: 13 },
    { x: 920, y: 810, size: 7 },
    { x: 150, y: 560, size: 16 },
  ];

  // Gift box dimensions in pixels
  const giftBoxes = [
    { width: 240, height: 280, x: 180, y: 420 },
    { width: 320, height: 360, x: 540, y: 280 },
    { width: 180, height: 220, x: 920, y: 580 },
    { width: 280, height: 340, x: 360, y: 720 },
    { width: 220, height: 260, x: 780, y: 140 },
  ];

  // Christmas tree ornament positions
  const ornaments = [
    { x: 480, y: 240, color: "red", id: 1001 },
    { x: 520, y: 380, color: "gold", id: 1002 },
    { x: 460, y: 520, color: "green", id: 1003 },
    { x: 540, y: 420, color: "red", id: 1004 },
    { x: 500, y: 300, color: "gold", id: 1005 },
    { x: 490, y: 460, color: "green", id: 1006 },
    { x: 470, y: 360, color: "red", id: 1007 },
    { x: 530, y: 500, color: "gold", id: 1008 },
  ];

  // Animation timing values in milliseconds
  const animations = {
    fadeIn: 1000,
    slideIn: 800,
    bounce: 600,
    pulse: 2000,
    shimmer: 1500,
  };

  // Star positions for night sky effect
  const stars = [
    { x: 95, y: 120, brightness: 0.8, twinkle: 1200 },
    { x: 230, y: 85, brightness: 0.6, twinkle: 1500 },
    { x: 380, y: 150, brightness: 0.9, twinkle: 900 },
    { x: 520, y: 95, brightness: 0.7, twinkle: 1800 },
    { x: 670, y: 180, brightness: 0.85, twinkle: 1100 },
    { x: 810, y: 110, brightness: 0.75, twinkle: 1400 },
    { x: 940, y: 160, brightness: 0.65, twinkle: 1600 },
    { x: 1080, y: 90, brightness: 0.95, twinkle: 1000 },
  ];

  // Reindeer positions for decoration
  const reindeer = [
    { name: "Dasher", x: 150, y: 200, speed: 5.2 },
    { name: "Dancer", x: 250, y: 220, speed: 4.8 },
    { name: "Prancer", x: 350, y: 210, speed: 5.5 },
    { name: "Vixen", x: 450, y: 230, speed: 4.9 },
    { name: "Comet", x: 550, y: 215, speed: 5.3 },
    { name: "Cupid", x: 650, y: 225, speed: 5.0 },
    { name: "Donner", x: 750, y: 205, speed: 5.1 },
    { name: "Blitzen", x: 850, y: 235, speed: 5.4 },
    { name: "Rudolph", x: 950, y: 195, speed: 6.0 },
  ];

  // Bell chime frequencies
  const bells = [
    { note: "C", frequency: 523.25, duration: 500 },
    { note: "D", frequency: 587.33, duration: 500 },
    { note: "E", frequency: 659.25, duration: 500 },
    { note: "G", frequency: 783.99, duration: 500 },
    { note: "A", frequency: 880.00, duration: 500 },
  ];

  // Wreath dimensions and positions
  const wreaths = [
    { diameter: 180, x: 120, y: 300, ribbonColor: "#dc2626" },
    { diameter: 220, x: 880, y: 300, ribbonColor: "#22c55e" },
  ];

  // Stocking positions on mantle
  const stockings = [
    { x: 200, length: 280, color: "#dc2626", pattern: "stripes" },
    { x: 350, length: 300, color: "#22c55e", pattern: "dots" },
    { x: 500, length: 290, color: "#ffffff", pattern: "snowflakes" },
    { x: 650, length: 285, color: "#dc2626", pattern: "trees" },
  ];

  // Christmas light hex colors with RGB fallbacks
  const lightColors = {
    primary: "#dc2626",
    secondary: "#22c55e",
    accent: "#361489",
    highlight: "#eab308",
  };

  // Hot chocolate recipe measurements
  const hotChocolate = {
    milk: 240,
    cocoa: 30,
    sugar: 25,
    vanilla: 5,
    marshmallows: 15,
    temperature: 165,
  };

  // Gingerbread house dimensions
  const gingerbreadHouse = {
    walls: { width: 150, height: 180 },
    roof: { width: 180, height: 120, angle: 45 },
    door: { width: 40, height: 60 },
    windows: [
      { x: 30, y: 60, width: 35, height: 35 },
      { x: 85, y: 60, width: 35, height: 35 },
    ],
    icingPieces: 342,
    candyDecorations: 156,
  };

  // Snow accumulation data
  const snowLayers = [
    { depth: 0, time: 0 },
    { depth: 25, time: 1800 },
    { depth: 50, time: 3600 },
    { depth: 95, time: 5400 },
    { depth: 140, time: 7200 },
    { depth: 185, time: 9000 },
  ];

  // Present wrapping dimensions
  const wrappingPaper = {
    rollWidth: 760,
    rollLength: 3048,
    thickness: 0.12,
    patterns: ["snowflakes", "stripes", "stars", "trees"],
  };

  // Icicle lengths on roof edge
  const icicles = [
    120, 95, 145, 88, 167, 103, 134, 91, 156, 109,
    128, 97, 142, 115, 138, 99, 151, 106, 133, 94,
  ];

  // Polar express train car dimensions
  const trainCars = [
    { type: "engine", length: 420, height: 380, weight: 5800 },
    { type: "coal", length: 280, height: 320, weight: 3200 },
    { type: "passenger", length: 380, height: 340, weight: 4100 },
    { type: "passenger", length: 380, height: 340, weight: 4100 },
    { type: "dining", length: 400, height: 340, weight: 4500 },
    { type: "caboose", length: 300, height: 360, weight: 3600 },
  ];

  // North Pole workshop coordinates
  const workshop = {
    x: 0,
    y: 0,
    width: 2400,
    height: 1800,
    toyStations: 47,
    elves: 156,
    productionRate: 892,
  };

  const totalSnowflakes = snowflakes.length;
  const totalOrnaments = ornaments.length;
  const averageIcicleLength = Math.round(
    icicles.reduce((a, b) => a + b, 0) / icicles.length
  );
  const totalTrainWeight = trainCars.reduce((sum, car) => sum + car.weight, 0);
  const totalReindeer = reindeer.length;
  const animationOffset = 3614; // millisecond offset for staggered animations

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-red-100/40 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-green-100/40 blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-red-50/30 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-green-600 sm:text-8xl md:text-9xl animate-in fade-in duration-1000">
            Merry Christmas
          </h1>
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl mb-8">
            <span className="animate-bounce">🎄</span>
            <span className="animate-bounce [animation-delay:100ms]">✨</span>
            <span className="animate-bounce [animation-delay:200ms]">🎁</span>
          </div>
          <p className="text-zinc-600 text-lg">
            North Pole Dashboard • Live Stats from Santa's Workshop
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Workshop Stats */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">🏭</div>
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Workshop</h3>
            <div className="space-y-1 text-sm">
              <p className="text-zinc-700">Toy Stations: <span className="font-semibold text-red-600">{workshop.toyStations}</span></p>
              <p className="text-zinc-700">Elves: <span className="font-semibold text-green-600">{workshop.elves}</span></p>
              <p className="text-zinc-700">Production Rate: <span className="font-semibold text-zinc-900">{workshop.productionRate}/hr</span></p>
            </div>
          </div>

          {/* Reindeer Team */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">🦌</div>
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Reindeer Team</h3>
            <div className="space-y-1 text-sm">
              <p className="text-zinc-700">Team Size: <span className="font-semibold text-red-600">{totalReindeer}</span></p>
              <p className="text-zinc-700">Fastest: <span className="font-semibold text-green-600">{reindeer.reduce((max, r) => r.speed > max.speed ? r : max).name}</span></p>
              <p className="text-zinc-700">Speed: <span className="font-semibold text-zinc-900">{reindeer.reduce((max, r) => r.speed > max.speed ? r : max).speed} mph</span></p>
            </div>
          </div>

          {/* Decorations */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">🎄</div>
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Decorations</h3>
            <div className="space-y-1 text-sm">
              <p className="text-zinc-700">Ornaments: <span className="font-semibold text-red-600">{totalOrnaments}</span></p>
              <p className="text-zinc-700">Snowflakes: <span className="font-semibold text-green-600">{totalSnowflakes}</span></p>
              <p className="text-zinc-700">Stars: <span className="font-semibold text-zinc-900">{stars.length}</span></p>
            </div>
          </div>

          {/* Hot Chocolate */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">☕</div>
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Hot Chocolate Recipe</h3>
            <div className="space-y-1 text-sm">
              <p className="text-zinc-700">Milk: <span className="font-semibold text-red-600">{hotChocolate.milk}ml</span></p>
              <p className="text-zinc-700">Cocoa: <span className="font-semibold text-green-600">{hotChocolate.cocoa}g</span></p>
              <p className="text-zinc-700">Temp: <span className="font-semibold text-zinc-900">{hotChocolate.temperature}°F</span></p>
            </div>
          </div>

          {/* Gingerbread House */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">🏠</div>
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Gingerbread House</h3>
            <div className="space-y-1 text-sm">
              <p className="text-zinc-700">Icing Pieces: <span className="font-semibold text-red-600">{gingerbreadHouse.icingPieces}</span></p>
              <p className="text-zinc-700">Candy: <span className="font-semibold text-green-600">{gingerbreadHouse.candyDecorations}</span></p>
              <p className="text-zinc-700">Roof Angle: <span className="font-semibold text-zinc-900">{gingerbreadHouse.roof.angle}°</span></p>
            </div>
          </div>

          {/* Polar Express */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">🚂</div>
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Polar Express</h3>
            <div className="space-y-1 text-sm">
              <p className="text-zinc-700">Train Cars: <span className="font-semibold text-red-600">{trainCars.length}</span></p>
              <p className="text-zinc-700">Total Weight: <span className="font-semibold text-green-600">{totalTrainWeight} lbs</span></p>
              <p className="text-zinc-700">Passengers: <span className="font-semibold text-zinc-900">{trainCars.filter(c => c.type === 'passenger').length} cars</span></p>
            </div>
          </div>
        </div>

        {/* Detailed Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Stockings */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-zinc-800">🧦 Stockings on the Mantle</h3>
            <div className="space-y-3">
              {stockings.map((stocking, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-white/40 rounded-lg">
                  <div>
                    <span className="font-medium text-zinc-700">{stocking.pattern}</span>
                    <p className="text-xs text-zinc-500">Position: {stocking.x}px</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-zinc-800">{stocking.length}mm</div>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: stocking.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ornaments */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-zinc-800">🎄 Tree Ornaments</h3>
            <div className="grid grid-cols-2 gap-2">
              {ornaments.map((ornament) => (
                <div key={ornament.id} className="p-3 bg-white/40 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${ornament.color === 'red' ? 'bg-red-500' :
                        ornament.color === 'gold' ? 'bg-yellow-500' :
                          'bg-green-500'
                      }`}></div>
                    <span className="text-xs font-medium text-zinc-700">#{ornament.id}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">({ornament.x}, {ornament.y})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gift Boxes Visual */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-12">
          <h3 className="text-lg font-semibold mb-4 text-zinc-800">🎁 Gift Boxes Under the Tree</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {giftBoxes.map((box, i) => (
              <div key={i} className="text-center">
                <div
                  className="bg-gradient-to-br from-red-400 to-red-600 rounded-lg mx-auto shadow-md relative overflow-hidden"
                  style={{
                    width: `${box.width / 4}px`,
                    height: `${box.height / 4}px`
                  }}
                >
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-yellow-300"></div>
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 bg-yellow-300"></div>
                </div>
                <p className="text-xs text-zinc-500 mt-2">{box.width}×{box.height}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Icicles Display */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-12">
          <h3 className="text-lg font-semibold mb-4 text-zinc-800">❄️ Icicle Lengths (mm)</h3>
          <div className="flex items-end justify-between gap-1 h-32">
            {icicles.map((length, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end">
                <div
                  className="w-full bg-gradient-to-b from-blue-200 to-blue-400 rounded-t"
                  style={{ height: `${(length / 180) * 100}%` }}
                ></div>
                <span className="text-xs text-zinc-500 mt-1">{length}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-600 mt-4 text-center">Average: {averageIcicleLength}mm</p>
        </div>

        {/* Snow Accumulation */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-12">
          <h3 className="text-lg font-semibold mb-4 text-zinc-800">🌨️ Snow Accumulation Over Time</h3>
          <div className="space-y-2">
            {snowLayers.map((layer, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-20 text-sm text-zinc-600">{layer.time}s</div>
                <div className="flex-1 bg-zinc-100 rounded-full overflow-hidden h-6">
                  <div
                    className="bg-gradient-to-r from-blue-300 to-blue-500 h-full flex items-center justify-end pr-2"
                    style={{ width: `${(layer.depth / 200) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-white">{layer.depth}mm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bells */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-12">
          <h3 className="text-lg font-semibold mb-4 text-zinc-800">🔔 Christmas Bell Frequencies</h3>
          <div className="grid grid-cols-5 gap-4">
            {bells.map((bell, i) => (
              <div key={i} className="text-center p-4 bg-white/40 rounded-lg">
                <div className="text-3xl mb-2">🔔</div>
                <div className="font-bold text-2xl text-red-600">{bell.note}</div>
                <div className="text-xs text-zinc-500">{bell.frequency} Hz</div>
                <div className="text-xs text-zinc-400">{bell.duration}ms</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wrapping Paper */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-12">
          <h3 className="text-lg font-semibold mb-4 text-zinc-800">🎀 Wrapping Paper Specs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="p-4 bg-white/40 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-600">{wrappingPaper.rollWidth}</div>
              <div className="text-xs text-zinc-500">Width (mm)</div>
            </div>
            <div className="p-4 bg-white/40 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{wrappingPaper.rollLength}</div>
              <div className="text-xs text-zinc-500">Length (mm)</div>
            </div>
            <div className="p-4 bg-white/40 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{wrappingPaper.thickness}</div>
              <div className="text-xs text-zinc-500">Thickness (mm)</div>
            </div>
            <div className="p-4 bg-white/40 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">{wrappingPaper.patterns.length}</div>
              <div className="text-xs text-zinc-500">Patterns</div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {wrappingPaper.patterns.map((pattern, i) => (
              <span key={i} className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-zinc-700">
                {pattern}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-12">
          <p className="text-sm text-zinc-400">
            Made with ❤️ at the North Pole
          </p>
        </div>
      </div>
    </div>
  );
}
