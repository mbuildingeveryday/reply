import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './redux/store';
import CommentScreen from './screens/CommentScreen';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentScreen />
      </div>
    </Provider>
  );
}

export default App;
