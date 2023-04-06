import './Tabel.css'

const Table = ({ data }) => {
    const renderTableData = () => {
        return data.map((item, index) => {
            const { nome, cognome, eta, indirizzo } = item;
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{`${nome} ${cognome}`}</td>
                    <td>{eta}</td>
                    <td>{indirizzo}</td>
                </tr>
            );
        });
    };

    return (
        <div className='table__container'>
            <table>
                <thead>
                    <tr>
                        <th>N.</th>
                        <th>Nome e Cognome</th>
                        <th>Età</th>
                        <th>Indirizzo</th>
                    </tr>
                </thead>
                <tbody>{renderTableData()}</tbody>
            </table>
        </div>
    )
}

export default Table;