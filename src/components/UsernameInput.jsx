import { useGameStore } from "../stores/useGameStore";
import { GameButton } from "./GameButton";
import "./UsernameInput.css";

export const UsernameInput = () => {
  const { setUserName, username } = useGameStore();
  

  return (
    <div>
      New wanderer:
      <div className="start-user-info">
        <label className="name-label">
          <input type="text" className="name-box" value={username}
            onChange={(event) => {
                setUserName(event.target.value);
                   }}/>
        </label>
        <GameButton buttonName="Start" />
      </div>
    </div>
  );
};
