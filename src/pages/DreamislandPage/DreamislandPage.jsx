import React from 'react'
import './DreamislandPage.css'

export default function DreamislandPage() {
    return (
        <div className='DreamislandPage'>
            <div className='grid2'>
                <div className='nav' style={{textAlign: 'center'}}>
                    <h1 className='title'>Dream Island</h1>
                    <a className='link' href='https://dream-island.herokuapp.com/'><img style={{height: 30, width: 'auto'}} src='/images/link-solid.svg' alt='link' />Demo</a>
                    <a className='link1' href='https://github.com/ChengjunCao/Dream-Island'><img style={{height: 30, width: 'auto'}} src='/images/github-square-brands.svg' alt='github' />Code</a>
                </div>
                <div className='main'>
                    <img className='main-pic2' src='/images/DreamIsland.png' alt='dreamisland'/>
                </div>
                <div className='aside'>
                    <div className='flexbox3'>
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
                            <img style={{height: 40, width: 50}} src='/images/node-brands.svg' alt='node' />
                            <p className='skill-p'>Node</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/html5-brands.svg' alt='html5' />
                            <p className='skill-p'>HTML5</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 50}} src='/images/css3-alt-brands.svg' alt='css3' />
                            <p className='skill-p'>CSS3</p>
                        </div>
                    </div>
                    <p className='desc'>
                        Dream Island is your Animal Crossing island on a website. Here you are able to add information about your own island, villagers and share cute pictures of your island.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
