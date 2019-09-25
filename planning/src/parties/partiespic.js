import { useContext } from "react";
import { PicturesContext } from "./contexts/PicturesContext.js";

const Pictures = () => {
  const { pictures } = useContext(PicturesContext);

  return (
    <div>
      <h1>Hello Welcome To Pictures!</h1>

      {pictures.map(pic => (
        <div>
          <h1>{pic.party}</h1>
          <h2>{pic.partyid}</h2>
          <h2>{pic.url}</h2>
        </div>
      ))}
    </div>
  );
};

export default Pictures;
