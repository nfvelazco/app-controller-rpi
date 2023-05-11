import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import AuthHandler from './components/AuthHandler/AuthHandler';
import store from './redux/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      {/* <AuthHandler> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </AuthHandler> */}
  </Provider>
);