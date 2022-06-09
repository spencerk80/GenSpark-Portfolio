import './PokemonCard.css'

export default function PokemonCard(props) {
    return (
        <div className='spacing-wrapper'>
            <div className='poke-card'>
                <img src={props.img} alt={props.name} />
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <td className="info">Type:</td>
                        <td className="info">{props.type}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}