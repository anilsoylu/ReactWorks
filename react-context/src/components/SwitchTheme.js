import { useSite } from "../context";

function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <>
      Site Theme: {theme}
      <br />
      <br />
      <button onClick={switchTheme}>Change Theme</button>
    </>
  );
}

export default SwitchTheme;
