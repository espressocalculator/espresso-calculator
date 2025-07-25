import { Link } from "react-router-dom";

const coffeeDrinks = [
  {
    name: "Espresso",
    description: "Kräftiger Kaffee in konzentrierter Form.",
    image: "/images/espresso.png",
    path: "/recipe/espresso",
  },
  {
    name: "Cappuccino",
    description: "Espresso mit heißer Milch und Milchschaum.",
    image: "/images/cappuccino.png",
    path: "/recipe/cappuccino",
  },
  {
    name: "Latte Macchiato",
    description: "Milchgetränk mit einem Schuss Espresso.",
    image: "/images/latte-macchiato.png",
    path: "/recipe/latte-macchiato",
  },
  {
    name: "Flat White",
    description: "Sanfter, milchiger Espresso aus Australien.",
    image: "/images/flat-white.png",
    path: "/recipe/flat-white",
  },
  {
    name: "Caffè Latte",
    description: "Doppelte Portion Milch zum Espresso.",
    image: "/images/caffe-latte.png",
    path: "/recipe/caffe-latte",
  },
  {
    name: "Americano",
    description: "Espresso mit heißem Wasser gestreckt.",
    image: "/images/americano.png",
    path: "/recipe/americano",
  },
  {
    name: "Cortado",
    description: "Espresso mit gleicher Menge warmer Milch.",
    image: "/images/cortado.png",
    path: "/recipe/cortado",
  },
  {
    name: "Mocha",
    description: "Espresso mit Schokolade und Milch.",
    image: "/images/mocha.png",
    path: "/recipe/mocha",
  },
  {
    name: "Iced Latte",
    description: "Kalter Espresso mit Milch auf Eis.",
    image: "/images/iced-latte.png",
    path: "/recipe/iced-latte",
  },
  {
    name: "Cold Brew",
    description: "Kalt extrahierter Kaffee über Stunden.",
    image: "/images/cold-brew.png",
    path: "/recipe/cold-brew",
  },
];

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Wähle dein Lieblingsgetränk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coffeeDrinks.map((drink) => (
          <Link to={drink.path} key={drink.name}>
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-40 object-contain mb-2"
              />
              <h2 className="text-xl font-bold">{drink.name}</h2>
              <p className="text-sm text-gray-600">{drink.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
