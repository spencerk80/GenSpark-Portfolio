import { useTranslation } from "react-i18next"

import prof_photo from '../../img/professional-photo.jpg'
import './AboutMe.css'

export default function AboutMe() {

    const {t} = useTranslation()

    return (
        <main className='main'>
            <div className='main--header'>
                <img src={prof_photo} alt='Kris dressed professionally' />
                <h1>{t('about-title')}</h1>
            </div>
            <div className='main--textbox'>
                <h2>Kristoffer Ryan Spencer</h2>
                <h3>{t('about-prof-exp')}</h3>
                <p>{t('about-prof-exp-text')}</p><br/>
                <p>{t('about-prof-exp-text2')}</p><br/>
                <p>{t('about-lang-list-header')}</p>
                <ul>
                    <li>Java</li>
                    <li>Go</li>
                    <li>Python</li>
                    <li>HTML5/CSS3/JavaScript/TypeScript</li>
                </ul>
                <h3>{t('about-interests-header')}</h3>
                <p>{t('about-interests')}</p>
            </div>
        </main>
    )
}