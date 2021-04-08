import axios from "axios";
import { useEffect, useState } from "react";
import Gateway from "../gateway";

const Weapons = () => {
    const [weapons, getWeapons] = useState<any>(null);
    const [weaponDetail, getWeaponDetail] = useState<any>([]);
    const [toggleType, setToggleType] = useState(false)
    const [toggleTier, setToggleTier] = useState(false)
    const [typeName, setTypeName] = useState('Type')

    useEffect(() => {
        axios.get(Gateway.WEAPONS).then((resList) => {
            getWeapons(resList.data);
            resList.data.forEach((value: any) => {
                axios.get(Gateway.WEAPONS + '/' + value).then((resDetail) => {
                    resDetail.data.url = value;
                    weaponDetail.push(resDetail.data);
                });
            })
            getWeaponDetail(weaponDetail);
        });

    }, []);

    function getWeaponType(type: string) {
        setTypeName(type)
        switch (type) {
            case 'sword':

                break;

            default:
                break;
        }
        setToggleType(false)
    }

    return (
        <div>

            <div className="flex">
                <div className="relative">
                    <button className="px-4 w-40 py-2 bg-blue-500 rounded-md text-white font-medium relative focus:outline-none" type="button" onClick={() => setToggleType(!toggleType)}>
                        {typeName}
                    </button>
                    <div className={toggleType ? "absolute bg-white rounded-md w-40" : "absolute bg-white rounded-md w-40 hidden"}>
                        <div className="px-4 py-2 cursor-pointer hover:bg-blue-100" onClick={() => getWeaponType('Sword')}>Sword</div>
                        <div className="px-4 py-2 cursor-pointer hover:bg-red-100">Bow</div>
                        <div className="px-4 py-2 cursor-pointer hover:bg-green-100">Catalyst</div>
                        <div className="px-4 py-2 cursor-pointer hover:bg-green-100">Claymore</div>
                    </div>
                </div>
                <div className="relative">
                    <button className="px-4 w-40 py-2 bg-blue-500 rounded-md text-white font-medium relative focus:outline-none" type="button" onClick={() => setToggleTier(!toggleTier)}>
                        Tier
                </button>
                    <div className={toggleTier ? "absolute bg-white rounded-md w-40" : "absolute bg-white rounded-md w-40 hidden"}>
                        <div className="px-4 py-2 cursor-pointer hover:bg-blue-100">Sword</div>
                        <div className="px-4 py-2 cursor-pointer hover:bg-red-100">Bow</div>
                        <div className="px-4 py-2 cursor-pointer hover:bg-green-100">Catalyst</div>
                        <div className="px-4 py-2 cursor-pointer hover:bg-green-100">Claymore</div>
                    </div>
                </div>
            </div>

            {
                weaponDetail && (
                    weaponDetail.filter((weapon: any) => weapon.type === typeName).map((x: any) => (
                        (
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        <img className="h-48 w-full object-cover md:w-48" src={`https://api.genshin.dev/weapons/${x.url}/icon.png`} alt="Man looking at item at a store" />
                                    </div>
                                    <div className="p-8">
                                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{x.name}</a>
                                        <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    ))
                )
            }
        </div>
    );
};

export default Weapons;
