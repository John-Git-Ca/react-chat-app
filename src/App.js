import {ChatEngine} from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () =>{
    return (
        <ChatEngine
            height="100vh"
            projectID="
c9def413-61d1-4c2d-9efc-c9dfadf351e2"
            userName="johnny"
            userSecret="111111"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;