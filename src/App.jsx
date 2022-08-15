import { RecoilRoot } from "recoil";
import "./App.css";
import { Router } from "./components/router/Router";
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
