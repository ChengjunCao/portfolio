import React from 'react'
import './PuzzlesPage.css'

export default function PuzzlesPage() {
    return (
        <div className='PuzzlesPage'>
            <div className='grid1'>
                <div className='nav' style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: 40, color: '#e98074', marginTop: 10, marginBottom: 15}}>Real-time Puzzles</h1>
                    <a style={{marginRight: 20, fontSize: 25}} href='https://puzzle-project-four.herokuapp.com/'><img style={{height: 30, width: 'auto'}} src='/images/link-solid.svg' alt='link' />Demo</a>
                    <a style={{marginLeft: 20, fontSize: 25}} href='https://github.com/markshyzer/puzzle-project'><img style={{height: 30, width: 'auto'}} src='/images/github-square-brands.svg' alt='github' />Code</a>
                </div>
                <div className="main">
                    <img className='main-pic1' src='/images/RealtimePuzzles.png' alt='puzzles'/>
                </div>
                <div className="aside">
                    <div className='flexbox'>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/js-brands.svg' alt='js' />
                            <p style={{fontSize: 12}}>JavaScript</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/mongodb-logo.svg' alt='mongo' />
                            <p style={{fontSize: 12}}>Mongo</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/express-js.svg' alt='express' />
                            <p style={{fontSize: 12}}>Express</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/react-brands.svg' alt='react' />
                            <p style={{fontSize: 12}}>React</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/node-brands.svg' alt='node' />
                            <p style={{fontSize: 12}}>Node</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/html5-brands.svg' alt='html5' />
                            <p style={{fontSize: 12}}>HTML5</p>
                        </div>

                    </div>
                    <p style={{fontSize: 20}}>
                        This is a real-time multi-user application that allows several players to work together to complete a jigsaw-style puzzle. A chat function is also available within each puzzle room, and users may sign in to create their own rooms, or can play in the public room without requiring an account.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
