import { createContext, useEffect, useState } from "react";

export const TextsContext = createContext(null);

const TextsContextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextsContext.Provider value={{ texts, onAddText }}>
      {children}
    </TextsContext.Provider>
  );
};

export default TextsContextProvider;
