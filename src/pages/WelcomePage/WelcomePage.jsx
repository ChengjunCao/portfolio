import React, {useRef, useEffect} from 'react'
import {TweenMax, TimelineLite, Power3} from 'gsap'
import './WelcomePage.css'
export default function WelcomePage() {
    let app = useRef(null);
    let image = useRef(null);
    let content = useRef(null);
    let tl = new TimelineLite();
    useEffect(() => {
      const logoImage = image.firstElementChild;
      const h1 = content.children[0]
      const h3 = content.children[1]

      TweenMax.to(app.current, 0, {css: {visibility: 'visible'}})
      tl.from(image, 1.1, {y: 110, ease: Power3.easeOut},'Start')
        .from(logoImage, 1.1, {scale: 1.2, ease: Power3.easeOut})

      tl.staggerFrom([h1.children, h3.children], 1, {
        y: 100,
        ease: Power3.easeOut,
        delay: .15
      }, .15, 'Start')
    })
    
    return (
        <div className='hero' ref={app}>
            <div ref={el => content = el}>
                <div className="content-line">
                    <h1 className='welcome-h1'>Hi, I'm Mike</h1>
                </div>
                <div className="content-line">
                    <h3 className='welcome-h3'>A Full-Stack Developer</h3>
                </div>
            </div> 
            <div className='logo1' ref={el => image = el}>
                <img className='welcome-img' src='/images/coding.svg' alt='logo'/>
            </div>
        </div>
    )
}
