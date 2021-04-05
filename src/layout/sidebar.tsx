import { Link } from "react-router-dom"

interface IMenuItemProps {
  name: string;
  icon: string;
  url: string;
}

const MenuItem = (menuItem: IMenuItemProps) => {
  return (
    <div className="mb-1">
      <button className="py-2 px-4 hover:bg-red-500 rounded-lg font-bold w-full hover:text-white text-left flex items-center text-gray-800 transition-all duration-300">
        <img
          src={menuItem.icon}
          alt={menuItem.name}
          className="mr-2 h-5 w-5"
        />
        <Link to={menuItem.url}>{menuItem.name}</Link>
      </button>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div style={{ width: 250 }}>
      <div className="px-10 py-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Genshin_Impact_logo.svg/1200px-Genshin_Impact_logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="p-3">
        <MenuItem
          name="Home"
          icon="https://genshin.honeyhunterworld.com/img/icons/wish_35.png"
          url="/"
        />
        <MenuItem name="Characters" icon="https://genshin.honeyhunterworld.com/img/icons/char_35.png" 
          url="/characters"/>
        <MenuItem name="Character" icon="https://genshin.honeyhunterworld.com/img/icons/weapons_35.png"
          url="/weapons" />
      </div>
    </div>
  );
};

export default Sidebar;
