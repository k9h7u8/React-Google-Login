import { GoogleOAuthProvider } from '@react-oauth/google';
import SignIn from './SignIn';

const clientId = "654569253576-np9vkchmauubh3ssgdhv4sa85nqn3lu0.apps.googleusercontent.com";

function App(props) {
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <SignIn />
      </GoogleOAuthProvider>;
    </div>
  );
}

export default App;
