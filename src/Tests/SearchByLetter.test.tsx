import axios from "axios";
import { describe, test, expect, vi } from "vitest";

const getData = async (id: string) => {
  const res = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.data;
};

describe("Drink Service", async () => {
  test.todo("makes a GET request to fetch cocktail");

  const fakeFetch = vi.fn();
  global.fetch = fakeFetch;

  beforeEach(() => {
    fakeFetch.mockReset();
  });

  function createFetchResponse(data: Object) {
    return { json: () => new Promise((resolve) => resolve(data)) };
  }

  test("Makes a GET request", async () => {
    const res = {
      drinks: [
        {
          idDrink: "11007",
          strDrink: "Margarita",
          strDrinkAlternate: null,
          strTags: "IBA,ContemporaryClassic",
          strVideo: null,
          strCategory: "Ordinary Drink",
          strIBA: "Contemporary Classics",
          strAlcoholic: "Alcoholic",
          strGlass: "Cocktail glass",
          strInstructions:
            "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
          strInstructionsES: null,
          strInstructionsDE:
            "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der \u00e4u\u00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genie\u00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis sch\u00fctteln und vorsichtig in das Glas geben.",
          strInstructionsFR: null,
          strInstructionsIT:
            "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
          "strInstructionsZH-HANS": null,
          "strInstructionsZH-HANT": null,
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
          strIngredient1: "Tequila",
          strIngredient2: "Triple sec",
          strIngredient3: "Lime juice",
          strIngredient4: "Salt",
          strIngredient5: null,
          strIngredient6: null,
          strIngredient7: null,
          strIngredient8: null,
          strIngredient9: null,
          strIngredient10: null,
          strIngredient11: null,
          strIngredient12: null,
          strIngredient13: null,
          strIngredient14: null,
          strIngredient15: null,
          strMeasure1: "1 1/2 oz ",
          strMeasure2: "1/2 oz ",
          strMeasure3: "1 oz ",
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strImageSource:
            "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
          strImageAttribution: "Cocktailmarler",
          strCreativeCommonsConfirmed: "Yes",
          dateModified: "2015-08-18 14:42:59",
        },
      ],
    };
    fakeFetch.mockResolvedValue(createFetchResponse(res));
    const getDrink = await getData("11007");
    expect(getDrink).toStrictEqual(res);
  });
});
