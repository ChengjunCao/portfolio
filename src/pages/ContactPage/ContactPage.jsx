import React from 'react'
import './ContactPage.css'

export default function ContactPage() {
    return (
        <div className='ContactPage'>
            <h1>Let's work together ...</h1>
            <div className="flexbox-contact">
                        <div>
                            <a href='https://www.linkedin.com/in/chengjuncao/' target='_blank' rel="noreferrer">
                                <img className="images-contact" src='/images/linkedin-brands.svg' alt='linkedin' />
                                <p style={{fontSize: 20}}>LinkedIn</p>
                            </a>

                        </div>
                        <div>
                            <a href='https://github.com/ChengjunCao' target='_blank' rel="noreferrer">
                                <img className="images-contact" src='/images/github-square-brands.svg' alt='github' />
                                <p style={{fontSize: 20}}>Github</p>
                            </a>
                            
                        </div>
                        <div>
                            <a href='mailto:caochengjun369@gmail.com'>
                                <img className="images-contact" src='/images/envelope-regular.svg' alt='mail' />
                                <p style={{fontSize: 20}}>Mail</p>
                            </a>
                            
                        </div>
                        <div>
                            <a href='https://drive.google.com/file/d/19nL6lSmKA1y9ujlWeAJKpflMK9CYeXyq/view?usp=sharing' target='_blank' rel="noreferrer">
                                <img className="images-contact" src='/images/file-pdf-solid.svg' alt='pdf' />
                                <p style={{fontSize: 20}}>Resume</p>
                            </a>
                        </div>
                    </div>
        </div>
    )
}
