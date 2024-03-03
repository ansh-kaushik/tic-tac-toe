import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdiiting, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
    // nameContent = <input type="text"></input>;
    if (isEdiiting) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let editplayerName = <span className="player-name">{playerName} </span>;
  if (isEdiiting) {
    editplayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editplayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}> {isEdiiting ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
