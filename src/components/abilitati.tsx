import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'
import AbilitatiSVG from "../../setPublic/svg/abilitati"
import '../../setPublic/scss/abilitati.scss'

const Abilitati = () => {
    useEffect(() => {
        const path = document.getElementsByTagName('path')
        path[0].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        for(let i=0; i<path.length; i++) {
            path[i].style.strokeDasharray = path[i].getTotalLength().toString()
            path[i].style.strokeDashoffset = path[i].getTotalLength().toString()
            path[i].style.setProperty("--delay", i*.2+'s')
        }
    }, [])
    return (<>
    <div className='container'>
        <div className='content fullX'>
            <Menu activePage="abilitati"/>
            <div className='generalContent abilitatiContent'>
                <div className='abilitatiContainer'>
                    <AbilitatiSVG />
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Abilitati