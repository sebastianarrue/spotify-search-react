import store from './store/store'
import { Provider } from 'react-redux'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  return (
    <Provider store={store}>
      <Sidebar></Sidebar>
      <Header></Header>
      <Main></Main>
    </Provider>
  );
}

export default App;
