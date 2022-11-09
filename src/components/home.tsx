import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'

import '../../setPublic/scss/home.scss'

const Home = () => {
    const speed = 100
    useEffect(() => {
        const root = document.getElementById('root')
        root?.classList.add("geometricBackground")
        const animation: any = anime.timeline({
            targets: '.animCube',
            loop: true,
        });
        animation.add({
            scale: [
                {value: 5, easing: 'easeOutElastic', duration: 1000*(speed/100), delay: 1000*(speed/100)},
                {value: 1, easing: 'easeInOutElastic', duration: 4000*(speed/100), delay: anime.stagger(400*(speed/100), {from: 'center', grid: [5, 5]})},
            ],
            rotate: [
                {value: 0, easing: 'easeOutElastic', duration: 3000*(speed/100)},
                {value: 360, easing: 'easeInOutElastic', duration: 2000*(speed/100), delay: anime.stagger(400*(speed/100), {from: 'center', grid: [5, 5]})},
            ],
            borderRadius: [
                {value: 0, easing: 'easeOutElastic', duration: 3000*(speed/100)},
                {value: 50, easing: 'easeInOutElastic', duration: 2000*(speed/100), delay: anime.stagger(400*(speed/100), {from: 'center', grid: [5, 5]})},
            ],
            margin: [
                {value: 2.5+"vw", easing: 'easeOutElastic', duration: 4000*(speed/100)},
                {value: 0+"vw", easing: 'easeInOutElastic', duration: 2000*(speed/100), delay: 2000*(speed/100)},
            ],
        })
        anime({
            targets: '.slicer.axeY',
            translateY: [
                {value: -150+"%", easing: 'easeOutElastic'},
                {value: 0, easing: 'easeInOutElastic', duration: 1000}
            ]
        })
    }, [])

    return (<>
    <div className='container'>
        <div className='content homeContent'>
            <Menu />
            <div className="menuSet menuBig">
                <div className='ownerName'>Cristian</div>
                <Link className='link' to='/despre'>despre</Link>
                <Link className='link' to='/proiecte'>proiecte</Link>
                <Link className='link' to='/experienta'>experiență</Link>
                <div className='link' onClick={() => { window.scrollBy(0, document.body.scrollHeight) }}>contact</div>
            </div>
            <div className="slicer axeY"></div>
        </div>
        <div className='anim'>
            <div className='gridAnim'>
                <div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div><div className='animCube'></div>
            </div>
        </div>
        <svg onClick={() => { window.scrollBy(0, document.body.scrollHeight) }} className='arrowDawn' id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/></svg>
    </div>
    </>)
}

export default Home