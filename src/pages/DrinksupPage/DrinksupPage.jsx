import React from 'react'
import './DrinksupPage.css'

export default function DrinksupPage() {
    return (
        <div className='DrinksupPage'>
            <div className='grid1'>
                <div className='nav' style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: 40, color: '#e98074', marginTop: 10, marginBottom: 15}}>Drinks Up!</h1>
                    <a style={{marginRight: 20, fontSize: 25}} href='https://puzzle-project-four.herokuapp.com/'><img style={{height: 30, width: 'auto'}} src='/images/link-solid.svg' alt='link' />Demo</a>
                    <a style={{marginLeft: 20, fontSize: 25}} href='https://github.com/markshyzer/puzzle-project'><img style={{height: 30, width: 'auto'}} src='/images/github-square-brands.svg' alt='github' />Code</a>
                </div>
                <div className="main">
                    <img className='main-pic3' src='/images/DrinksUp.png' alt='drinksup'/>
                </div>
                <div className="aside">
                    <div className='flexbox2'>
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/python-brands.svg' alt='python' />
                            <p style={{fontSize: 12}}>Python</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 70}} src='/images/django.svg' alt='django' />
                            <p style={{fontSize: 12}}>Django</p>
                        </div>
                        
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/postgresql-logo.png' alt='postgresql' />
                            <p style={{fontSize: 12}}>PostgreSQL</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/html5-brands.svg' alt='html5' />
                            <p style={{fontSize: 12}}>HTML5</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/css3-alt-brands.svg' alt='css3' />
                            <p style={{fontSize: 12}}>CSS3</p>
                        </div>
                    </div>
                    <p style={{fontSize: 20}}>
                        Drinks Up! is a Mobile First drink tracker web app. Here you can store informations for the drink you just had, add picture, rating, bar locations.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
