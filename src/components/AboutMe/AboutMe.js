import prof_photo from '../../img/professional-photo.jpg'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <main className='main'>
            <div className='main--header'>
                <img src={prof_photo} alt='Kris dressed professionally' />
                <h1 >About me</h1>
            </div>
            <div className='main--textbox'>
                <h2 >Kristoffer Ryan Spencer</h2>
                <h3 >Professional Experience</h3>
                <p >
                    I graduated from Southern Oregon University. I hold a bachelor's in Computer Science.
                    I went through Revature's program, from which, they placed me with Cognizant as a
                    Service Reliability Engineer.
                </p><br/>
                <p >
                    Every since I discovered software development in high school, I knew that's what I wanted
                    to do. So I found myself feeling that SRE work was not the right career path for me. So I
                    now am working at GenSpark with the goal of getting into Java Full Stack Engineering.
                </p><br/>
                <p >Some of my favorite languages I work with:</p>
                <ul>
                    <li >Java</li>
                    <li >Go</li>
                    <li >Python</li>
                    <li >HTML5/CSS3/JavaScript/TypeScript</li>
                </ul>
                <h3 >Interests</h3>
                <p >
                    I love foxes. They are my favorite animale, hence the icon in the corner of this page.
                    I am a linguist by hobby. My fiance and I are studying Esperanto together. Se vi parolas
                    Esperanton, bonvolu veni kaj diri "saluton"!
                </p>
            </div>
        </main>
    )
}