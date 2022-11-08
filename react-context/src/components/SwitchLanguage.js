import { useSite } from "../context";

function SwitchLanguage() {
  const { language, dispatch } = useSite();

  const switchLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };

  return (
    <>
      Site Language : {language}
      <br />
      <br />
      <button onClick={switchLanguage}>Change Language</button>
    </>
  );
}

export default SwitchLanguage;
