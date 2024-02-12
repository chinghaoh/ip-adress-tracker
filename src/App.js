// App.js
import React from 'react';
import MapComponent from './MapComponent';
import IpTracker from './IpTrackerContainer';

function App() {
  return (
    <body>
      <IpTracker></IpTracker>
      <MapComponent></MapComponent>
    </body>
  );
}

export default App;