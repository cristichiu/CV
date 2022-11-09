import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'

const Experienta = () => {
    const root = document.getElementById('root')
    root?.classList.remove("geometricBackground")
    return (<>
    <div className='container'>
        <div className='content fullX'>
            <Menu />
        </div>
    </div>
    </>)
}

export default Experienta