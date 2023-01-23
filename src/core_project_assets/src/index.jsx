import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import { AuthClient } from '@dfinity/auth-client';

const authClient = await AuthClient.create();
if (await authClient.isAuthenticated()) {
  handleAuthentication(authClient);
} else {
  await authClient.login({
    identityProvider: 'https://identity.ic0.app/#authorize',
    onSuccess: () => {
      handleAuthentication(authClient);
    },
  });
}

async function handleAuthentication(authClient) {
  const identity = await authClient.getIdentity();
  const userPrincipal = identity._principal.toString();
  console.log(userPrincipal);
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App identity={userPrincipal} login={true} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
