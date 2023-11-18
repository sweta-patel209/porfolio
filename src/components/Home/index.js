import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['w','e','t','a'];
  const jobArray = ['F','u','l','l',' ','s','t','a','c','k',' ','d','e','v','e','l','o','p','e','r','.']



useEffect(() => {
  return () => {
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000)
   
  }
}, [])

const onButtonClick = () => {
  const pdfUrl = "SwetaCV2023.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "document.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Full Stack Developer / Cloud Computing / JavaScript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link className="flat-button" onClick={onButtonClick}>
            Download CV
          </Link>
          {/* import SwetaCV from '../../assets/files/SwetaCV2023.pdf'; */}
          {/* <a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
   <Button className={classes.navLink}>My Example Doc</Button></a> */}
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>

  )
}

export default Home