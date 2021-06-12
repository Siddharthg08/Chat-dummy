import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
                height="100vh"
                projectID="94c43286-9590-46b2-b8f6-393d26ef59b0"
                userName="JavaScriptMastery"
                userSecret="123123"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;