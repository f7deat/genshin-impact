import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gateway from "../gateway";

const Weapons = () => {
  const [weapons, getWeapons] = useState<any>(null);

  useEffect(() => {
    axios.get(Gateway.NEWS).then((response) => {
        getWeapons(response.data.data);
    });
  }, []);

  return (
    <div>
        abc
    </div>
  );
};

export default Weapons;
