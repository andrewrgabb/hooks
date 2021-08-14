import React from "react";
import Routes from "./Router";

// App level contexts are likely to be added into this page

const App: React.FC = () => {
  return (
    <div>
      App!
      <Routes />
    </div>
  );
};

export default App;
