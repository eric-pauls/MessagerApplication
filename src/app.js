import { ChatEngine } from 'react-chat-engine';
import './app.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
        height='100vh'
        projectID='4ebb0d7a-3e79-4a72-9cdf-0ccaaa0ef77e'
        userName= {localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;