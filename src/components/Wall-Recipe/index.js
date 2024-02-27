import CardRecipe from '../Card-Recipe'
import './Wall-Recipe.css'

const WallRecipe = (props) => {
    const css = { backgroundColor: props.colorSecondary }

    return (
        (props.recipes.length > 0) ? <section className='wall-recipes' style={css}>
            <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
            <div className='recipes'>
                {props.recipes.map( recipe => <CardRecipe corDeFundo={props.corPrimaria} key={recipe.name} name={recipe.name} instructions={recipe.instructions} image={recipe.image}/> )}
            </div>
        </section> 
        : ''
    )
}

export default WallRecipe