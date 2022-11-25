import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'

import Page1 from '../../setPublic/svg/despre/page1'
import Page2 from '../../setPublic/svg/despre/page2'
import Page3 from '../../setPublic/svg/despre/page3'
import Page4 from '../../setPublic/svg/despre/page4'
import Page5 from '../../setPublic/svg/despre/page5'

import '../../setPublic/scss/despre.scss'

const Despre = () => {
    const root = document.getElementById('root')
    root?.classList.add("geometricBackground")

    const maxPage: number = 5
    const [pages, setPages] = useState<number>(1);
    const [load, setLoad] = useState<boolean>(false);
    const [wait, setWait] = useState<boolean>(false);
    const [pagesAnimationArr, setPagesAnimationArr] = useState<Array<any>>([])

    class pagesAnimation {
        page : string
        constructor(page: string) {
            this.page = page
        }
        apear() {
            anime({
                targets: `.despreContainer .${this.page} path`,
                translateX: 0,
                translateY: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
                delay: 500,
                duration: 2000,
                easing: 'easeInOutExpo'
            })
        }
        disapear() {
            anime({
                targets: `.despreContainer .${this.page} path`,
                translateX: function() { return anime.random(-300, 300) + 50+'%' },
                translateY: function() { return anime.random(-300, 300) },
                opacity: 0,
                scale: function() { return Math.random() * .5 },
                rotate: function() { return anime.random(-360, 360) },
                duration: 2000,
                easing: 'easeInOutExpo'
            })
        }
        init() {
            anime({
                targets: `.despreContainer .${this.page} path`,
                translateX: function() { return anime.random(-300, 300) + 50+'%' },
                translateY: function() { return anime.random(-300, 300) },
                opacity: 0,
                scale: function() { return Math.random() * .5 },
                rotate: function() { return anime.random(-360, 360) },
                duration: 0,
                easing: 'easeInOutExpo'
            })
        }
    }
    
    useEffect(() => {
        let pagesAnimationArrTemp: Array<any> = []
        for(let i=0; i<=maxPage; i++) pagesAnimationArrTemp.push(new pagesAnimation(`page${i}`))
        for(let i=0; i<pagesAnimationArrTemp.length; i++) { pagesAnimationArrTemp[i].init(); }
        setPagesAnimationArr(pagesAnimationArrTemp)
        setLoad(true)
        pagesAnimationArrTemp[pages].apear()
    }, [])
    useEffect(() => {
        if(pages == 1) { pagesAnimationArr[maxPage]?.disapear() } else { pagesAnimationArr[pages-1]?.disapear() }
        pagesAnimationArr[pages]?.apear()
    }, [pages])
    function pagesControler() {
        if(!wait) {
            if(pages < maxPage) { setPages(pages+1) } else { setPages(1) }
            setWait(true)
            setTimeout( async () => {
                setWait(false)
            }, 2500)
        }
    }
    return (<>
    <div className='container'>
        <div className='content fullX'>
            <Menu activePage="despre"/>
            <div onClick={pagesControler} className={`generalContent despreContainer flex center ${!load && 'invisible'}`}>
                <Page1 /><Page2 /><Page3 /><Page4 /><Page5 />
                <div className='pagesSlierContainer'>
                    <div onClick={pagesControler} className={`pagesSlier`}>Click</div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Despre