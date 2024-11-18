import imgOmelette from "../assets/images/image-omelette.jpeg";
const Card = () => {
  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  const instructions = [
    {
      id: 1,
      header: "Beat the eggs",
      explanation:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      id: 2,
      header: "Heat the pan",
      explanation:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      id: 3,
      header: "Cook the omelette",
      explanation:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      id: 4,
      header: "Add fillings (optional)",
      explanation:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      id: 5,
      header: "Fold and serve",
      explanation:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      id: 6,
      header: "Enjoy",
      explanation: "Serve hot, with additional salt and pepper if needed.",
    },
  ];

  return (
    <div className="max-w-[46rem] w-full rounded-3xl bg-white max-sm:rounded-none">
      <div className="img-div p-10 pb-0 max-sm:p-0 max-lg:p-5 rounded-t-3xl max-sm:rounded-none">
        <img
          className="rounded-lg max-sm:rounded-none"
          src={imgOmelette}
          alt=""
        />
      </div>
      <div className="p-10 max-sm:px-8 max-sm:rounded-none ">
        <section className=" mb-8 ">
          <h1 className="text-[var(--Stone900)] text-[2.5rem] max-sm:text-4xl text-4xl">
            Simple Omelette Recipe
          </h1>
          <p className="text-base text-[var(--Stone600)] mt-6">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section className="p-7 bg-[var(--Rose50)] rounded-xl">
          <h3 className="text-[1.25rem] leading-5 font-semibold text-[var(--Rose800)] mb-4 ">
            Preparation time
          </h3>
          <ul id="preparation" className=" flex flex-col gap-y-2">
            <li>
              <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation:</strong> 5 minutes
            </li>
            <li>
              <strong>Cooking:</strong> 5 minutes
            </li>
          </ul>
        </section>
        <section className="py-8" id="ingredients">
          <h2 className="mb-6">Ingredients</h2>
          <ul className="flex flex-col gap-2">
            {ingredients.map((item) => (
              <li className="text-base" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <section id="instructions" className="py-8">
          <h2 className="pb-6">Instructions</h2>
          <ul className="flex flex-col gap-y-2">
            {instructions.map((item) => {
              return (
                <li key={item.id} className="flex">
                  <span>{item.id}.</span>
                  <div className="px-4">
                    <strong>{item.header}:</strong>
                    {item.explanation}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <hr />
        <section className="pt-8" id="nutrition">
          <h2>Nutrition</h2>
          <p className="text-base text-[var(--Stone600)] py-6">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="table-auto w-full ">
            <tbody>
              <tr className="">
                <td className="pt-0 pl-8">Calories</td>
                <td className="pt-0 pr-8">277kcal</td>
              </tr>
             
              <tr className="">
                <td className="pl-8">Carbs</td>
                <td className="pr-8">0g</td>
              </tr>
             
              <tr>
                <td className="pl-8">Protein</td>
                <td className=" pr-8">20g</td>
              </tr>
              
              <tr className="">
                <td className="pb-0 pl-8">Fat</td>
                <td className="pb-0 pr-8">22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Card;
