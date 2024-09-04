import './homepage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>Xavier Elon AI Chat Bot</h1>
        <h2>Test</h2>
        <h3>Cosmo</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "/bot.png"} alt="" />
          <TypeAnimation
            sequence={[
              'Human1: How do I write a useState hook?',
              2000, () => {
                setTypingStatus('bot')
              },
              'Bot: [typingStatus, setTypingStatus] = useState("human1")',
              2000, () => {
                setTypingStatus('human2')
              },
              'Human2: What is the best programming language?',
              2000, () => {
                setTypingStatus('bot')
              },
              'Bot: Javascript is the best programming language for modern web development.',
              2000, () => {
                setTypingStatus('human1')
              },
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
