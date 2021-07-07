import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gateway from "../gateway";
import { Star } from "../icons";
import { IRarityProps } from "../models/character-props";
import { Hydro } from "../commons/vision";

interface IQueryParams {
  id: string;
}

const Rarity = (props: IRarityProps) => {
  let returnValue: any = [];
  for (let index = 0; index < props.rarity; index++) {
    returnValue.push(<Star key={index} className="text-yellow-400" />);
  }
  return returnValue;
};

const CharacterDetails = () => {
  const { id } = useParams<IQueryParams>();

  const [character, setCharacter] = useState<any>();

  useEffect(() => {
    axios.get(`${Gateway.CHARACTERS}/${id}`).then((response) => {
      setCharacter(response.data);
    });
  }, [id]);

  return (
    <div className="md:flex md:-px-2">
      <div className="md:w-3/4 px-2">
        <div className="bg-white rounded p-4">
          <div className="flex items-center">
            <div className="mr-4">
              <Hydro color="#02e7ff" size={60} />
            </div>
            <div>
              <div className="font-bold text-xl mb-2 text-gray-800">{character?.name}</div>
              <div className="flex">
                <Rarity rarity={character?.rarity} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/4 px-2">
        <div className="bg-white rounded p-4">
          <img
            src={`${Gateway.CHARACTERS}/${id}/portrait.png`}
            alt={character?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
