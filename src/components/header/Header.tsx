import { useState } from "react";
import classes from "./Header.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { characterActions } from "../../store/characters";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useAppDispatch();
  const location = useLocation();

  console.log(location);
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(characterActions.filter(evt.target.value));
    setTerm(evt.target.value);
  };

  return (
    <div className={classes.header}>
      {location.pathname === "/search" ? (
        <input
          type="text"
          className={classes.search}
          placeholder="Search..."
          value={term}
          onChange={onChange}
        />
      ) : (
        ""
      )}
      <button className={classes.signonButton}>Sign up</button>
      <button className={classes.loginButtonn}>Log in</button>
    </div>
  );
};

export default Header;
