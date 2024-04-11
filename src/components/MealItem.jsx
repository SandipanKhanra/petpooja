import React from "react";
import { currencyFormatter } from "../util/formatting";

const MealItem = ({ id, name, image, price, description }) => {
  return (
    <li className="meal-item" key={id}>
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
