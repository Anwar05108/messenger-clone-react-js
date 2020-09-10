import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, InputLabel, Button, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter your name"));
  }, []);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="data:image/jpeg;base64,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"
        alt="messenger-icon"
      />
      <h1>
        This is a messenger clone made by Anwar using React Js and Firebase
        database 🚀🚀🚀
      </h1>
      <h1>Welcome {username} </h1>
      {/* <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <Button type='submit' onClick={sendMessage}>Send Message</Button>
      </form> */}
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Send Message</InputLabel> */}
          <Input
            className="app__input"
            placeholder="send message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          {/* disableRipple={!input} */}
          <IconButton
            className="app__iconButton"
            disabled={!input}
            color="primary"
            variant="contained"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

          {/* <Button>Send Message</Button> */}
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
