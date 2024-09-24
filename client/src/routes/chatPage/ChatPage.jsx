import NewPrompt from '../../components/newPrompt/newPrompt';
import './chatpage.css';

const ChatPage = () => {
  return (
    <div className='chatPage'>
      <div className='wrapper'>
        <div className='chat'>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>
            Test Message from UserNostrud ea dolore aliquip sunt do cillum Lorem
            amet deserunt ut.
          </div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from user</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from User</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from user</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from User</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from user</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from User</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from user</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from User</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from user</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from User</div>
          <div className='message'>Test Message from ai</div>
          <div className='message user'>Test Message from user</div>
        </div>
        <NewPrompt />
      </div>
    </div>
  );
};

export default ChatPage;
