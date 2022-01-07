import React, { useState } from "react";
import UserContext from "../context/UserContext";
import HighScores from "./HighScores";

const MainContainer = () => {
  const [player, setPlayer] = useState({
    name: "Morven",
    score: 100,
  });

  return (
    <>
      <UserContext.Provider
        value={{
          player: player,
          setPlayer: setPlayer,
        }}
      >
        <HighScores />
      </UserContext.Provider>
    </>
  );
};

export default MainContainer;
