import axios from "axios";
import { useEffect, useState } from "react";
import Gateway from "../gateway";

const Characters = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(Gateway.CHARACTERS).then((response) => {
      setCharacters(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-wrap">
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx={12}
              cy={12}
              r={10}
              stroke="currentColor"
              strokeWidth={4}
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      ) : (
        characters.map((character) => (
          <div
            className="bg-white font-medium shadow m-1 px-4 py-2 hover:shadow-lg cursor-pointer"
            key={character}
          >
            <img
              src={`${Gateway.CHARACTERS}/${character}/icon.png`}
              alt={character}
              className="mb-2"
            />
            <div className="text-center">{character}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Characters;
