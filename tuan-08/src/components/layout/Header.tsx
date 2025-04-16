import { IoNotifications, IoSearch } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import Avatar from "../Avatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 bg-primary border-b h-[60px]">
      <h1 className="text-secondary text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-2">
        {/* Search */}
        <Searchbar />
        {/* Notifi */}
        <button className="cursor-pointer text-xl hover:bg-secondary-2 p-3 rounded-md">
          <IoNotifications />
        </button>

        {/* Question */}
        <button className="cursor-pointer text-xl hover:bg-secondary-2 p-3 rounded-md">
          <MdOutlineQuestionMark />
        </button>

        {/* User */}
        <Avatar
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

const Searchbar = () => {
  return (
    <div className="min-w-[300px] flex items-center bg-secondary-2 p-2 rounded-md">
      <span>
        <IoSearch />
      </span>

      <input className="px-3 flex-1" type="search" placeholder="Search..." />
    </div>
  );
};

export default Header;
