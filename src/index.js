import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

const App = () => {
  return (
    <Message
      header="Changes in Service"
      text="We just updated our privacy policy here to better service our customers."
    />
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
