import classes from './Header.module.css';

import { useDispatch} from 'react-redux';

const Header = () => {

    const dispatch = useDispatch()
  
    const isAuthHandler = () => {
      dispatch({type: 'logout'})
    };
  
  return (
    <header className={classes.header}>
      <h1>Enspiral Dev Academy</h1>
      <nav>
        <ul>
          <li>
            <button onClick={isAuthHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
