import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import api from "../../Services/api";
import Button from "../../Components/Button";
import Recipe from "../../Components/Recipe";
import {
  Container,
  RecipesContainer,
  OverlayContainer,
  OverlayContent,
  FieldRow,
} from "./styles.js";

const Receita = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState 
  const [recipes, setRecipes] = useState(receitonas);

  const generateRecipes = () => {
    const response = recipes.map((recipe, index) => {
      return (
        <Recipe
          key={index}
          title={recipe.title}
          deleteFunction={() => deleteRecipe(recipe.id)}
          linkPath={`/receitas/${recipe.id}`}
        />
      );
    });

    return response;
  };

  return (
    <Container>
      <Button title="nova +" click={openAddNewRecipeModal} />
      <RecipesContainer>{recipes && generateRecipes()}</RecipesContainer>
      {modalOpen && (
        <OverlayContainer>
          <OverlayContent>

          </OverlayContent>
        </OverlayContainer>
      )}
    </Container>
  );
};

export default Receita;
