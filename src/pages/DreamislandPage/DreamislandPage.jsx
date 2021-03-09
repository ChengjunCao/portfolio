import React from 'react'
import './DreamislandPage.css'

export default function DreamislandPage() {
    return (
        <div className='DreamislandPage'>
            <div className='grid2'>
                <div className='nav' style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: 40, color: '#e98074', marginTop: 10, marginBottom: 15}}>Dream Island</h1>
                    <a style={{marginRight: 20, fontSize: 25}} href='https://puzzle-project-four.herokuapp.com/'><img style={{height: 30, width: 'auto'}} src='/images/link-solid.svg' alt='link' />Demo</a>
                    <a style={{marginLeft: 20, fontSize: 25}} href='https://github.com/markshyzer/puzzle-project'><img style={{height: 30, width: 'auto'}} src='/images/github-square-brands.svg' alt='github' />Code</a>
                </div>
                <div className='main'>
                    <img className='main-pic2' src='/images/DreamIsland.png' alt='dreamisland'/>
                </div>
                <div className='aside'>
                    <div className='flexbox3'>
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
                        <img style={{height: 40, width: 50}} src='/images/node-brands.svg' alt='node' />
                            <p style={{fontSize: 12}}>Node</p>
                        </div>
                        <div>
                        <img style={{height: 40, width: 50}} src='/images/html5-brands.svg' alt='html5' />
                            <p style={{fontSize: 12}}>HTML5</p>
                        </div>
                        <div>
                        <img style={{height: 40, width: 50}} src='/images/css3-alt-brands.svg' alt='css3' />
                            <p style={{fontSize: 12}}>CSS3</p>
                        </div>
                    </div>
                    <p style={{fontSize: 20}}>
                        Dream Island is your Animal Crossing island on a website. Here you are able to add information about your own island, villagers and share cute pictures of your island.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
