import './Dropdown.css'

const Dropdown = (props) => {
    console.log(props.itens)

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.changeValue(event.target.value)} 
            required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown