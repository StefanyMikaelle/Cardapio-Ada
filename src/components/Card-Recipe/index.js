import './Card-Recipe.css'

const CardRecipe = ({ name, image, instructions, backgroundColor }) => {
    return (<div className='recipe'>
        <div className='header' style={{ backgroundColor: backgroundColor }}>
            <img src={image} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{instructions}</h5>
        </div>
    </div>)
}

export default CardRecipe