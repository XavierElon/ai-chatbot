import './homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Xavier Elon AI Chat Bot</h1>
        <h2>Test</h2>
        <h3>Cosmo</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Homepage
