import './Form.css';

const Form = ({ onSubmit }) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { nome, cognome, eta, indirizzo } = event.target.elements;
        const newItem = {
            nome: nome.value,
            cognome: cognome.value,
            eta: eta.value,
            indirizzo: indirizzo.value
        };
        onSubmit(newItem);
    }
    return (
        <div className='form__container'>
            <form onSubmit={handleFormSubmit} className="input__form">
                <label>
                    Nome:
                    <input type="text" name="nome" />
                </label>
                <label>
                    Cognome
                    <input type="text" name="cognome" />
                </label>
                <label>
                    Età
                    <input type="number" name="eta" />
                </label>
                <label>
                    Indirizzo
                    <input type="text" name="indirizzo" />
                </label>
                <button type="submit" className='form__button'>Aggiungi</button>
            </form>
        </div>
    )
}

export default Form;