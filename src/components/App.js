import Counter from './Counter';
import Auth from './Auth';
import Header from './Header';

import { useSelector } from 'react-redux';


function App() {

  const isAuth = useSelector(state => state.isAuthenticated)

  return (
    <>
      {isAuth && <Header/>}
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </>
  );
}

export default App;
