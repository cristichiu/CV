import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'

import '../../setPublic/scss/proiecte.scss'

const Proiecte = () => {
    const root = document.getElementById('root')
    root?.classList.add("geometricBackground")
    return (<>
    <div className='container'>
        <div className='content fullX'>
            <Menu activePage="proiecte"/>
            <div className='generalContent grid proiecteContent'>
                <div className='flex center colDir apear'>
                    <img src="../../setPublic/foto/proiecte/1.png" alt="proiect1" />
                    <div className='proiectDescription'>
                        <div className="proiectTitlu">Proiect de tip prezentare.</div>
                        Include un proiect care este împărțit în mai multe slide-uri cu diferite elemente de design care a fost creat în scopul unei prezentări.
                    </div>
                    <a className='proectLink' target="project" href="https://educatie.cristichiu.repl.co/0/0">Proiect</a>
                    <a className='proectLink' target="surse" href="https://github.com/cristichiu/EduProject">Sursa</a>
                </div>
                <div className='flex center colDir apear'>
                    <img src="../../setPublic/foto/proiecte/2.png" alt="proiect2" />
                    <div className='proiectDescription'>
                        <div className="proiectTitlu">Design Clasic, Vechi.</div>
                        Aici se regăsește un tip deosebit de design a unui ziar vechi in care este prezentată Republica Moldova.
                    </div>
                    <a className='proectLink' target="project" href="https://moldova.cristichiu.repl.co/home">Proiect</a>
                    <a className='proectLink' target="surse" href="https://github.com/cristichiu/moldova">Sursa</a>
                </div>
                <div className='flex center colDir apear'>
                    <img src="../../setPublic/foto/proiecte/3.png" alt="proiect3" />
                    <div className='proiectDescription'>
                        <div className="proiectTitlu">Baza de date.</div>
                        Acest proiect momentan nu este finisat, însă include o baza de date cu un pachet nodeJS cu care poți crea și stoca pe un site diferite date.
                    </div>
                    <div className='proectLink proiectNefinalizat cursorBlock'>Proiect Nefinalizat</div>
                    <a className='proectLink' target="surse" href="https://github.com/cristichiu/ChiuDB">Sursa</a>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Proiecte