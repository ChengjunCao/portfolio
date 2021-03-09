import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap'
import './ProjectsPage.css';
import { Link } from 'react-router-dom';


export default function ProjectsPage() {
    let app = useRef(null);
    let p1 = useRef(null);
    let p2 = useRef(null);
    let p3 = useRef(null);
    let p4 = useRef(null);
    let tl = new TimelineLite();

    useEffect(() => {
      const image1 = p1.firstElementChild;
      const image2 = p2.firstElementChild;
      const image3 = p3.firstElementChild;
      const image4 = p4.firstElementChild;

      TweenMax.to(app, 0, {css: {visibility: 'visible'}})
      tl.from(p1, 1.2, {x: -1680, ease: Power3.easeOut},'Start')
        .from(image1, 2, {scale: 1.3, ease: Power3.easeOut}, .2)
        .from(p2, 1.2, {x: -1680, ease: Power3.easeOut}, .2)
        .from(image2, 2, {scale: 1.3, ease: Power3.easeOut}, .2)
        .from(p3, 1.2, {x: -1680, ease: Power3.easeOut}, .4)
        .from(image3, 2, {scale: 1.3, ease: Power3.easeOut}, .2)
        .from(p4, 1.2, {x: -1680, ease: Power3.easeOut},.6)
        .from(image4, 2, {scale: 1.3, ease: Power3.easeOut}, .2)
    })

    return (
        <div className='ProjectsPage' ref={el => app =el}>
            <div className='projects-grid'>
                <Link to='/puzzles'>
                    <div className='1' ref={el => p1 =el}>
                        <img className='images' src='/images/puzzle.png' alt='puzzles' />
                        <p className='project-name'>Real-time Puzzles</p>
                    </div>
                </Link>
                <Link to='/drinksup'>
                    <div className='2' ref={el => p2 =el}>
                        <img className='images' src='/images/beer.svg' alt='drinksup' />
                        <p className='project-name'>Drinks Up!</p>
                    </div>
                </Link>
                <Link to='/dreamisland'>
                    <div className='3' ref={el => p3 =el}>
                        <img className='images' src='/images/AnimalCrossing.png' alt='dreamisland' />
                        <p className='project-name'>Dream Island</p>
                    </div>
                </Link>
                <Link to='/blackjack'>
                    <div className='4' ref={el => p4 =el}>
                        <img className='images' src='/images/poker.webp' alt='blackjack' />
                        <p className='project-name'>BlackJack</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
