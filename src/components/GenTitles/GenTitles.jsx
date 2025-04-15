import { useState } from "react";

export default function GenTitles() {
  const [title, setTitle] = useState();

  const titles = ["Надпись_1 ", "Надпись_2 ", "Надпись_3 "];

  const newTitle = () => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    setTitle(titles[randomIndex]);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={newTitle}>title</button>
    </div>
  );
}
