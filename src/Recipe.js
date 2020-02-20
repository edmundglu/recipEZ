import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, dietLabels }) => {
    return (
        <div className={style.recipe}>
            <h1> {title}</h1>
            <button class="btn btn-success btn-sm" disabled> {dietLabels} </button>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Total Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;