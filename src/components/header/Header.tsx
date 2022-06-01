import { useState } from 'react';
import classes from './Header.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { characterActions } from '../../store/characters'

const Header = () => {
    const [term, setTerm] = useState('');
    const dispatch = useAppDispatch();

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(characterActions.filter(evt.target.value));
        setTerm(evt.target.value);
    }

    return (
        <div className={classes.header}>
            <input type='text'
                className={classes.search}
                placeholder='Search...'
                value={term}
                onChange={onChange}>
            </input>
            <button className={classes.signonButton}>Sign up</button>
            <button className={classes.loginButtonn}>Log in</button>
        </div>
    );
}

export default Header;