import React from "react";
import UserContext from "../context/UserContext";

const UserScore = () => {
  return (
    <>
      <UserContext.Consumer>
        {({ player, setPlayer }) => {
          return (
            <>
              <p>player : {player.name}</p>
            </>
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default UserScore;
