import { Link } from "react-router-dom"
import { useEffect } from "react"
import anime from "animejs"
import '../../setPublic/scss/menu.scss'
interface IActive { activePage: string }

const Menu = ({ activePage }: IActive) => {
    useEffect(() => {
        anime({
            targets: '.menu',
            translateX: [
                {value: -150+"%", easing: 'easeOutElastic'},
                {value: 0, easing: 'easeInOutElastic', duration: 1000}
            ]
        })
        const menuLink = document.getElementsByClassName('menuLink')
        const target = document.getElementsByClassName(activePage)[0]
        for(let i=0; i<menuLink.length; i++) { menuLink[i].classList.remove('active') }
        target.classList.add('active')
    }, [])
    return (<>
    <div className="menuSet menu">
        <Link className="menuLink home" to='/home'>home</Link>
        <Link className="menuLink despre" to='/despre'>despre</Link>
        <Link className="menuLink proiecte" to='/proiecte'>proiecte</Link>
        <Link className="menuLink abilitati" to='/abilitati'>abilitati</Link>
        <div onClick={() => { document.getElementsByClassName("footer")[0].scrollIntoView(true); }}>contact</div>
    </div>
    </>)
}

export default Menu