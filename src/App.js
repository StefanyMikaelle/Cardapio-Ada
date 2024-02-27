import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import WallRecipe from './components/Wall-Recipe';

function App() {

  const categories = [
    {
      name: 'Massas',
      colorPrimary: '#57C278',
      colorSecondary: '#D9F7E9'
    },
    {
      name: 'Pratos Principais',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF'
    },
    {
      name: 'Saladas',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2'
    },
    {
      name: 'Sobremesas',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8'
    },
    {
      name: 'Bebidas',
      colorPrimary: '#DB6EBF',
      colorSecondary: '#FAE9F5'
    },
    {
      name: 'Lanches',
      colorPrimary: '#FFBA05',
      colorSecondary: '#FFF5D9'
    }
  ]

  const [recipes, setRecipes] = useState([])

  const newRecipeSubmited = (recipe) => {
    debugger
    setRecipes([...recipes, recipe])
  }


  return (
    <div className="App">
      <Banner/>
      <Form categories={categories.map(category => category.name)} 
        recipeSubmited ={recipe => 
          newRecipeSubmited(recipe)}
      />

        {categories.map(category => <WallRecipe
        key={category.name} 
        name={category.name} 
        colorPrimary={category.colorPrimary} 
        colorSecondary={category.colorSecondary} 
        recipes={recipes.filter(recipe => recipe.category === recipe.name)}
      />)}  
    
    
    </div>
  );
}

export default App;
