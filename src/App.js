// App.js

import React, { useState } from 'react';
import MapComponent from './MapComponent';
import IpTracker from './IpTrackerContainer';

function App() {
  const [responseData, setResponseData] = useState(null);

  const handleResponseData = (data) => {
    setResponseData(data)
  };

  return (
    <body>
      <IpTracker onResponseData={handleResponseData} />
      {responseData && <MapComponent responseData={responseData} />}
    </body>
  );
}

export default App;