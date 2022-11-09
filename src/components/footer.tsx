import * as React from 'react'
import { Link } from 'react-router-dom'
import '../../setPublic/scss/footer.scss'
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiTwotonePhone } from "react-icons/ai";
import anime from 'animejs';

const Footer = () => {
    const phoneNumberClick = () => {
        navigator.clipboard.writeText("060699738")
        anime({
            targets: '.iconNumber',
            opacity: [
                { value: 1, easing: 'easeInOutExpo', duration: 1000 },
                { value: 0, easing: 'easeInOutExpo', duration: 1000, delay: 1000 }
            ],
            translateY: [
                { value: 0, easing: 'easeInOutExpo', duration: 1000 },
                { value: 10, easing: 'easeInOutExpo', duration: 1000, delay: 1000 }
            ]
        })
    }
    return (<>
    <div className="footer">
        <a className='link' target='contact' href="https://www.instagram.com/cristichiu/">
            <BsInstagram className='icon'/>
        </a>
        <a className='link' target='contact' href="mailto:grajdiancristian@gmail.com">
            <GrMail className='icon'/>
        </a>
        <a className='link' target='contact' href="https://discordapp.com/users/530059275754799116">
            <FaDiscord className='icon'/>
        </a>
        <a className='link' target='contact' href="https://github.com/cristichiu">
            <BsGithub className='icon'/>
        </a>
        <div onClick={phoneNumberClick} className='link' >
            <AiTwotonePhone className='icon'/>
            <div className='iconNumber'>număr copiat</div>
        </div>
    </div>
    </>)
}

export default Footer