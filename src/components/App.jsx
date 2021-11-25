import React from "react";
import Form from "./Form";

var isUserRegistered = false;
function App() {
  return (
    <div className="container">
      <Form registeredUser={isUserRegistered} />
    </div>
  );
}

export default App;
