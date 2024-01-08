import { useState } from "react";
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;
