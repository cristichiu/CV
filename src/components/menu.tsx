import { Link } from "react-router-dom"
import { useEffect } from "react"
import anime from "animejs"
import '../../setPublic/scss/menu.scss'

const Menu = () => {
    useEffect(() => {
        anime({
            targets: '.menu',
            translateX: [
                {value: -150+"%", easing: 'easeOutElastic'},
                {value: 0, easing: 'easeInOutElastic', duration: 1000}
            ]
        })
    }, [])
    return (<>
    <div className="menuSet menu">
        <Link to='/home'>home</Link>
        <Link to='/despre'>despre</Link>
        <Link to='/proiecte'>proiecte</Link>
        <Link to='/experienta'>experiență</Link>
        <div onClick={() => { window.scrollBy(0, document.body.scrollHeight) }}>contact</div>
    </div>
    </>)
}

export default Menu