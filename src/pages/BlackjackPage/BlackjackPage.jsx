import React from 'react'
import './BlackjackPage.css'

export default function BlackjackPage() {
    return (
        <div className='BlackjackPage'>
            <div className='grid3'>
                <div  className='nav' style={{textAlign: 'center'}}>
                    <h1 className='title'>BlackJack</h1>
                    <a className='link' href='https://chengjuncao.github.io/BlackJack/' target='_blank' rel="noreferrer"><img style={{height: 30, width: 'auto'}} src='/images/link-solid.svg' alt='link' />Demo</a>
                    <a className='link1' href='https://github.com/ChengjunCao/BlackJack' target='_blank' rel="noreferrer"><img style={{height: 30, width: 'auto'}} src='/images/github-square-brands.svg' alt='github' />Code</a>
                </div>
                <div className='main'>
                    <img className='main-pic4' src='/images/BlackJack.png' alt='blackjack'/>
                </div>
                <div className='aside'>
                    <div className='flexbox4'>
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/js-brands.svg' alt='js' />
                            <p className='skill-p'>JavaScript</p>
                        </div>
                        <div>
                        <img style={{height: 40, width: 'auto'}} src='/images/html5-brands.svg' alt='html5' />
                            <p className='skill-p'>HTML5</p>
                        </div>
                        <div>
                        <img style={{height: 40, width: 'auto'}} src='/images/css3-alt-brands.svg' alt='css3' />
                            <p className='skill-p'>CSS3</p>
                        </div>
                    </div>
                    <p className='desc'>
                        Equally well known as Twenty-One. The rules are simple, the play is thrilling, and there is opportunity for high strategy. This was my first ever project with General Assembly which I experimented and learned a lot for the game to work functionally.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
