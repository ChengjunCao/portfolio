import React from 'react'
import './PuzzlesPage.css'

export default function PuzzlesPage() {
    return (
        <div className='PuzzlesPage'>
            <div className='grid'>
                <div className='nav' style={{textAlign: 'center'}}>
                    <h1 className='title'>Real-time Puzzles</h1>
                    <a className='link' href='https://puzzle-project-four.herokuapp.com/'><img style={{height: 30, width: 'auto'}} src='/images/link-solid.svg' alt='link' />Demo</a>
                    <a className='link1' href='https://github.com/markshyzer/puzzle-project'><img style={{height: 30, width: 'auto'}} src='/images/github-square-brands.svg' alt='github' />Code</a>
                </div>
                <div className="main1">
                    <img className='main-pic1' src='/images/RealtimePuzzles.png' alt='puzzles'/>
                </div>
                <div className="aside">
                    <div className='flexbox'>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/js-brands.svg' alt='js' />
                            <p className='skill-p'>JavaScript</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/mongodb-logo.svg' alt='mongo' />
                            <p className='skill-p'>Mongo</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/express-js.svg' alt='express' />
                            <p className='skill-p'>Express</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/react-brands.svg' alt='react' />
                            <p className='skill-p'>React</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/node-brands.svg' alt='node' />
                            <p className='skill-p'>Node</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/html5-brands.svg' alt='html5' />
                            <p style={{fontSize: 12}}>HTML5</p>
                        </div>

                    </div>
                    <p className='desc'>
                        This is a real-time multi-user application that allows several players to work together to complete a jigsaw-style puzzle. A chat function is also available within each puzzle room, and users may sign in to create their own rooms, or can play in the public room without requiring an account.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
