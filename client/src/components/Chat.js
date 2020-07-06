
import React from 'react';

/*
const InputArea = () => (
    <div className="input-area">
        <input id="inputField" type="text" placeholder="type here"></input>
        <button id="inputButton" onClick="">Send</button>
    </div>
);
*/

const InputArea = function() {
    function sendMessage() {
        console.log("sendMessage() called");
        let myUser = "Anon";
        let myText = document.getElementById("inputField").value;
        console.log(myText);

        const data = {user: myUser, text: myText};

        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch("http://192.168.100.12:8090/chat", options)
        .then(response => { console.log(response)});
    }

    return (
        <div className="input-area">
            <input id="inputField" type="text" placeholder="type here"></input>
            <button id="inputButton" onClick={sendMessage}>Send</button>
        </div>
    )
}

const Message = ({id, user, text}) => (
    <div className="message">
        <p><b>{user}:</b> {text}</p>
    </div>
);

const MessageList = ({messages}) => (
    <div className="message-list">
        {
            messages.map(
                msg => <Message key={msg.id} user={msg.user} text={msg.text} />
            )
        }
    </div>
);

class MessageListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastKnownMessage: 0,
            messages: []
        }
        // setInterval(this.updateState, 2000);
        // Warning: Can't call setState on a component that is not yet mounted.
    }

    callBackendAPI = async () => {
        const response = await fetch('http://192.168.100.12:8090/getchat');

        const body = await response.json();
        
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        console.log(body);
        this.setState({
            messages: body
        })
    };

    componentDidMount() {
        console.log("Mounted.")
        // this.updateState();
        
        this.timerID = setInterval(
            () => this.callBackendAPI(),
            3000
          );
    }

    render() {
        console.log("Rendering...");
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <InputArea />
            </div>
        )
    }
}

export default MessageListContainer;