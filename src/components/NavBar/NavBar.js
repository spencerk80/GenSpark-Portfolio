import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import React from 'react'

import fox_icon from "../../img/fox-icon.png"

import './NavBar.css'

let languages = [
    {
        "flag_text" : "EN",
        "flag_img"  : 'us-flag',
        "code"      : 'en'
    },
    {
        "flag_text" : "EO",
        "flag_img"  : 'eo-flag',
        "code"      : 'eo'
    }
]

export default function NavBar() {

    const {t} = useTranslation()
    let [showLangMenu, setShowLangMenu] = React.useState(false)

    return (
        <nav className='nav-bar'>
            <img className='nav--img' src={fox_icon} alt="Icon of a fox" />
            <h3 className='nav--icon-text text'>{t('nav-title')}</h3>
            <Link className='nav-link' to='/'>{t('nav-about-me')}</Link>
            <Link className='nav-link' to='/Example'>{t('nav-example')}</Link>
            <div 
                className="lng-btn nav-link"
                onClick={() => setShowLangMenu(prevState => !prevState)}>
            </div>
            <div 
                className="lng-menu" 
                style={{"visibility": `${showLangMenu ? "visible" : "hidden"}`}}    
            >
                <table>
                    <tbody>
                        {languages.map(({flag_text, flag_img, code}) => (
                            <tr key={code} 
                                className='lang-option' 
                                onClick={() => {
                                    i18next.changeLanguage(code)
                                    setShowLangMenu(false)
                                }}>
                                <td>
                                    <div className={flag_img}></div>
                                </td>
                                <td>
                                    <span className='flag-text'>{flag_text}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </nav>
    )
}