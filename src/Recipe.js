import React from 'react';
import styles from './recipe.module.css';
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className={styles.recipe}>
            <h1 className={styles.title}>{title}</h1>
            <ol className={styles.list}>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" className={styles.image} />
        </div>
    )
};
export default Recipe;