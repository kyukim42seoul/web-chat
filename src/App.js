import { useState } from "react";
import ChatBox from "./component/chatbox/ChatBox";
import ParticipateBox from "./component/participatebox/ParticipateBox";

function App() {
  const [UID, setUID] = useState('kyukim');
  return (
    <div>
      <div>
        <h2>Web Chat</h2>
      </div>
      <ParticipateBox UID={UID} />
      <ChatBox UID={UID}/>
    </div>
  );
}

export default App;
