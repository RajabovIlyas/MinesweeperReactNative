import * as React from 'react';
import Routes from './src/routes/Routes';
import store from './src/store/store';
import {Provider} from 'react-redux';


const App = (props) => {
  return (
      <>
       <Provider store={store}>
        <Routes/>
        </Provider>
        </>
  );
};

export default App;
