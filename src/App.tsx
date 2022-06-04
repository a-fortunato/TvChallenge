import React from 'react';
import ShowsScreen from './components/ShowsScreen';
import {Provider, rootStore} from './stores';

const App = () => {
  return (
    <Provider value={rootStore}>
      <ShowsScreen />
    </Provider>
  );
};

export default App;
