import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { sortBy } from "lodash";

import { Character } from "../../interfaces/Character.interface";
import { useAppDispatch } from "../../store/hooks";
import { characterActions } from "../../store/characters";
import { getCharacters } from "../../services/Characters.service";
import Library from "../library/Library";
import CharacterDetail from "../characterDetail/CharacterDetail";

const Main = () => {
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

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<div></div>} />
      <Route path="search" element={<Library />} />
      <Route path="library" element={<Library />} />
      <Route path="library/:characterId" element={<CharacterDetail />} />
    </Routes>
  );
};

export default Main;
