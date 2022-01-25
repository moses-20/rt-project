import UserContextProvider from "./context/user.context";
import AppRoute from "./routes";

function App() {
  return (
    <UserContextProvider>
      <AppRoute />
    </UserContextProvider>
  );
}

export default App;
