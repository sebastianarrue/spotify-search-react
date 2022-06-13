import { useEffect } from "react";
import classes from "./Library.module.scss";
import Item from "../item/Item";
import { Character } from "../../interfaces/Character.interface";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { characterActions } from "../../store/characters";
import { getCharacters } from "../../services/Characters.service";
import { sortBy } from "lodash";
import { Outlet } from "react-router-dom";

const Library = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCharacters().then((data) => {
      const sortedCharacters = sortBy(
        data.results,
        (c: Character) => c.start_date
      );
      dispatch(characterActions.setCharacters(sortedCharacters));
    });
  }, []);

  const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(characterActions.sort(evt.target.value));
  };

  const characters = useAppSelector((state) => state.characters);

  return (
    <div className={classes.mainSection}>
      <h2> The state of music today </h2>
      <h3> Sort by </h3>
      <select className={classes.dropdown} onChange={onChange}>
        <option value="start_date"> Start Date </option>
        <option value="end_date"> End Date </option>
        <option value="score"> Score </option>
        <option value="title"> Title </option>
      </select>
      <div className={classes.mainContainer}>
        {characters.map((character: Character, i) => (
          <Item
            key={i}
            id={character.mal_id}
            src={character.image_url}
            title={character.title}
            description={character.synopsis}
          />
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Library;
