import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import classes from "./CharactersDetail.module.scss";

const CharacterDetail = () => {
  const params = useParams();

  const characters = useAppSelector((state) => state.characters);
  const character =
    characters.filter((c) => c.mal_id == params.characterId)[0] || {};

  return (
    <div className={classes.mainSection}>
      <h1>{character.title}</h1>
      <img height="150" width="150" src={character.image_url}></img>
      <p> {character.synopsis}</p>
    </div>
  );
};

export default CharacterDetail;
