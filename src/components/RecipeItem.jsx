function RecipeItem(props) {
    const { recipe } = props;

    const {
        idMeal,
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        strInstructions,
        strYoutube,
    } = recipe;

    return (
        <div className="recipe">
            <img src={strMealThumb} alt={strMeal} />
            <h1>{strMeal}</h1>
            <h6>Category: {strCategory}</h6>
            {strArea ? <h6>Area: {strArea}</h6> : null}
            <p>{strInstructions}</p>

            <table className="centered">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes('Ingredient') && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>
                                        {recipe[`strMeasure${key.slice(13)}`]}
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>

            {strYoutube ? (
                <div className="row">
                    <h5>Video recipe</h5>
                    <iframe
                        src={`https://www.youtube.com/embed/${strYoutube.slice(
                            -11
                        )}`}
                        title={idMeal}
                        allowFullScreen
                    />
                </div>
            ) : null}
        </div>
    );
}

export { RecipeItem };
