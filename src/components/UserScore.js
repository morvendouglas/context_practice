import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const UserScore = () => {
  const { player, setPlayer } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPlayer = { ...player };
    newPlayer.name = event.target.name.value;
    setPlayer(newPlayer);
  };
  return (
    <>
      <p>player : {player.name}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="submit" value="save name" />
      </form>
    </>
  );
};

export default UserScore;
