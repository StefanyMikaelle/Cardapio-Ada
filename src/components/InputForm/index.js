import './InputForm.css'

const InputForm = (props) => {

    const placeholderChanged = `${props.placeholder}...` 

    const toType = (evento) => {
        props.change(evento.target.value)
    }

    return (
        <div className="text-area-input">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={toType} required={props.requiredInput} placeholder={placeholderChanged}/>
        </div>
    )
}

export default InputForm