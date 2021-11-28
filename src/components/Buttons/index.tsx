import { IButtonContainer } from "./types";
import './styles.css'

export default function NavigationButtonsContainer({
  handleLoadPrev,
  handleLoadNext,
}: IButtonContainer) {
  return (
    <div className="nav_buttons__container">
      <button
        onClick={handleLoadPrev}
      >Load prev</button>
      <button
        onClick={handleLoadNext}
      >Load next</button>
  </div>
  )
}
