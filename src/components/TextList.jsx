import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TextList() {
  const { texts } = useSelector((state) => state.texts);

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
