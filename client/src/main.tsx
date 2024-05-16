import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
  </Provider>
)