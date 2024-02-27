import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import InputForm from '../InputForm'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [category, setCategory] = useState('')

    const booleanOptions = [
        'Não',
        'Sim'   
    ]

    const onSubmitForm = (evento) => {
        evento.preventDefault()
        props.recipeSubmited({
            name,
            image,
            ingredients,
            instructions,
            prepTime,
            videoUrl,
            category
        })

        setName('')
        setImage('')
        setIngredients('')
        setInstructions('')
        setPrepTime('')
        setVideoUrl('')
        setCategory('')
       
    }

    return (
        <section className="form-section">
            <form onSubmit={onSubmitForm}>
                <h2>Preencha os dados para salvar uma nova receita</h2>

                <InputForm 
                    requiredInput={true}
                    label="Nome da Receita" 
                    placeholder="Digite seu nome" 
                    value = {name}
                    change = {value => setName(value)}
                />

                <Dropdown 
                    requiredInput={true} 
                    label="Categoria" 
                    itens={props.categories}
                    value={category}
                    changeValue={value => setCategory(value)}
                />

                <InputForm 
                    requiredInput={true}
                    label="Imagem" 
                    placeholder="Digite a url da imagem" 
                    value = {image}
                    change = {value => setImage(value)}
                />

                <InputForm 
                    requiredInput={true}
                    label="Ingredientes" 
                    placeholder="Digite a lista de ingredientes" 
                    value = {ingredients}
                    change = {value => setIngredients(value)}
                />

                <InputForm 
                    requiredInput={true}
                    label="Instrução" 
                    placeholder="Descreva a instrução da receita" 
                    value = {instructions}
                    change = {value => setInstructions(value)}
                />

                <InputForm 
                    requiredInput={true}
                    label="Tempo de preparo" 
                    placeholder="Digite o tempo de preparo da receita" 
                    value = {prepTime}
                    change = {value => setPrepTime(value)}
                />

                <Dropdown 
                    requiredInput={true} 
                    label="Vegetariana" 
                    itens={booleanOptions}
                />

                <Dropdown 
                    requiredInput={true} 
                    label="Vegetariana" 
                    itens={booleanOptions}
                />

                <Dropdown 
                    requiredInput={true} 
                    label="Glúten" 
                    itens={booleanOptions}
                />

                <InputForm 
                    requiredInput={false}
                    label="Video" 
                    placeholder="Digite a url da vídeo" 
                    value = {videoUrl}
                    change = {value => setVideoUrl(value)}
                />

                <Button>
                    Salvar Receita
                </Button>
            </form>
        </section>
    )
}

export default Form