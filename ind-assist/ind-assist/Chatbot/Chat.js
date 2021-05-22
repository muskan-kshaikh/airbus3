import React, { useState } from 'react';
import SimpleForm from './SimpleForm';

const Chat = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

    return (
      <>
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button style = {{alignitem:'center',marginTop:50}} className="btn" onClick={() => startChat()}>click to chat... </button> 
            : <button style = {{alignitem:'center',marginTop:50}} className="btn" onClick={() => hideChat()}>click to hide... </button>}
        </div>
      </div>      
      </>
    )
}

export default Chat;