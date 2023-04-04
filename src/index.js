import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth0ProviderComponent from './components/Auth0ProviderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './css/index.css';
import './css/login.css'
import './css/userForm.css'
import './css/cards.css'
import './css/footer.css';
import './css/navbar.css';
import './css/userForm.css'
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0ProviderComponent>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0ProviderComponent>
);

reportWebVitals();

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    }
  },
});