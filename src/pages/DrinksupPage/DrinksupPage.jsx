import React from 'react'
import './DrinksupPage.css'

export default function DrinksupPage() {
    return (
        <div className='DrinksupPage'>
            <div className='grid1'>
                <div className='nav' style={{textAlign: 'center'}}>
                    <h1 className='title'>Drinks Up!</h1>
                    <a className='link' href='https://puzzle-project-four.herokuapp.com/'><img style={{height: 30, width: 'auto'}} src='/images/link-solid.svg' alt='link' />Demo</a>
                    <a className='link1' href='https://github.com/markshyzer/puzzle-project'><img style={{height: 30, width: 'auto'}} src='/images/github-square-brands.svg' alt='github' />Code</a>
                </div>
                <div className="main">
                    <img className='main-pic3' src='/images/DrinksUp.png' alt='drinksup'/>
                </div>
                <div className="aside">
                    <div className='flexbox2'>
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/python-brands.svg' alt='python' />
                            <p className='skill-p'>Python</p>
                        </div>
                        <div>
                            <img style={{height: 40, width: 70}} src='/images/django.svg' alt='django' />
                            <p className='skill-p'>Django</p>
                        </div>
                        
                        <div>
                            <img style={{height: 40, width: 'auto'}} src='/images/postgresql-logo.png' alt='postgresql' />
                            <p className='skill-p'>PostgreSQL</p>
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
                        Drinks Up! is a Mobile First drink tracker web app. Here you can store informations for the drink you just had, add picture, rating, bar locations.
                    </p>
                </div>
            </div>
            
        </div>
    )
}
