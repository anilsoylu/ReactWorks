import React from "react";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "../context";

function Header({ theme, setTheme, language, setLanguage }) {
  const { user, dispatch } = useAuth();

  const login = () => {
    // kullanıcı adı ve şifreyi apiye iletiyoruz
    // cevap dönüyor. cevap kısmıda payload
    dispatch({
      type: "LOGIN",
      payload: {
        name: "Anıl ",
        id: 1,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <header>
      Header
      <br />
      <br />
      {(!!user && <button onClick={logout}>Çıkış Yap</button>) || (
        <button onClick={login}>Giriş Yap</button>
      )}
      <br />
      <br />
      <SwitchTheme />
      <hr />
      <SwitchLanguage />
    </header>
  );
}

export default Header;
