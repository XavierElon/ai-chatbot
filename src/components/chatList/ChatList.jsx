import './chatList.css'
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className="title">DASHBOARD</span>
        <Link to='/dashboard'>Create a New Chat</Link>
        <Link to='https://xavierelon.com'>Explore XavierElon</Link>
        <Link to='/'>Back to Homepage</Link>
        <hr/>
        <span className="title">RECENT CHATS</span>
        <div className="list">
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>
            <Link to='/'>My Chat Ttile</Link>

        </div>
        <hr />
        <div className="upgrade">
            <img src='/logo.png' alt='' />
            <div className="texts">
                <span>Upgrade to Premium</span>
                <span>Unlock more features</span>
            </div>

        </div>
    </div>
  )
}

export default ChatList