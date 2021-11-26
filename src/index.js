import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {store} from './Redux/state'

let rerenderTree = () => {

    ReactDOM.render(
        <Router>
            <React.StrictMode>
                <App state={store.getState()} addPost={store.addPost} changeNewPost={store.updateNewPostText}
                     sendMessage={store.sendMessage} updateMessageText={store.updateTextMessage}/>
            </React.StrictMode>
        </Router>,
        document.getElementById('root')
    );

}
store.subscribe(rerenderTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
