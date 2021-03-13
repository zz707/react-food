import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';
import { RecipeItem } from '../components/RecipeItem';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? <Preloader /> : <RecipeItem recipe={recipe} />}
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
        </>
    );
}

export { Recipe };
