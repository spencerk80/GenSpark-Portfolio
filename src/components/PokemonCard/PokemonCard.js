import './PokemonCard.css'
import click_icon from '../../img/click.png'

export default function PokemonCard(props) {
    return (
        <div className='spacing-wrapper'>
            <div className='poke-card'>
                <div className='card--click-label'>
                    <label id='switch-label'>Shiny:</label>
                    <label class="switch">
                        <input type="checkbox" checked={props.useShinyImg} onClick={() => props.updateImg(props.id)} />
                        <span class="slider round"></span>
                    </label>
                </div>
                <img src={props.img} alt={props.name} />
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <td className="info">Type:</td>
                            <td className="info">{props.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}