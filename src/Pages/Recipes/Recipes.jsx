import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Chef_Banner from "../Chef/Chef_Banner/Chef_Banner";
import Recipe_Crad from "./Recipe_Crad";
import { Row } from "react-bootstrap";
import { AuthContext } from "../../Provaiders/AuthProvaider";

const Recipes = () => {
  const recipes = useLoaderData();
  const { chefs } = useContext(AuthContext);
  const selectChef = chefs.find((cheff) => cheff.id == recipes[0].id);
  console.log(selectChef);

  return (
    <div>
      <Chef_Banner selectChef={selectChef}></Chef_Banner>
      <Row xs={1} md={2} lg={3} className="g-4 mt-5 container mx-auto">
        {recipes.map((recipe) => (
          <Recipe_Crad key={recipe.name} recipe={recipe}></Recipe_Crad>
        ))}
      </Row>
    </div>
  );
};

export default Recipes;
