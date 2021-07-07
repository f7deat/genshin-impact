import { Link } from "react-router-dom"

interface IMenuItemProps {
  name: string;
  url: string;
}

const MenuItem = (menuItem: IMenuItemProps) => {
  return (
    <div className="mb-1">
      <button className="py-2 px-4 hover:bg-red-500 rounded-lg font-bold w-full hover:text-white text-left flex items-center text-gray-800 transition-all duration-300">
        <Link to={menuItem.url}>{menuItem.name}</Link>
      </button>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div style={{ width: 250 }}>
      <div className="px-4 py-3 flex justify-center items-center">
        <img src="https://img.icons8.com/nolan/64/genshin-impact-logo.png" alt="logo" className="mr-4 h-12 w-12"/>
        <div className="font-bold text-xl">Genshin Impact</div>
      </div>
      <div className="p-3">
        <MenuItem name="Home" url="/" />
        <MenuItem name="Characters" url="/characters" />
        <MenuItem name="Weapon" url="/weapons" />
      </div>
    </div>
  );
};

export default Sidebar;
