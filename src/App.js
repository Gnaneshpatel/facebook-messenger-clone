import React, { useState, useEffect } from 'react';
import FlipMove from "react-flip-move";
import './App.css';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import firebase from "firebase";
import Message from './components/Message';
import db from './firebase_config/firebase';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const App = () => {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [messages])

  useEffect(() => {
    //runcode
    setUsername(prompt('please enter your name'))
  }, []);//condition

  const sendMessage = (event) => {
    //logic to send message
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello clever programmers !!!</h1>
      <h2>Welcome {username} !!!</h2>
      <form className="app__form">
        <FormControl >
          <InputLabel>Enter a Message...</InputLabel>
          <Input value={input} onChange={(e) => { setInput(e.target.value) }} />
        </FormControl>
        <IconButton disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} message={message} username={username} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
