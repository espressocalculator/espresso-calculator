import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <div>Rezept nicht gefunden.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full max-w-md mx-auto mb-4"
      />
      <p className="text-gray-700 mb-4">{recipe.description}</p>
      <h2 className="text-xl font-semibold mb-2">Zutaten:</h2>
      <ul className="mb-4 list-disc list-inside">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Zubereitung:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}
