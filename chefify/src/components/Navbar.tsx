import { navLink } from "@/constants/navLink";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get("query") || "");
  const navigate = useNavigate();

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (search.trim() === "") return;

    if (e.key === "Enter") {
      navigate(`/search?query=${search}`);
    }
  };

  return (
    <div className="flex justify-between items-center p-2 m-2">
      <div className="flex items-center">
        <a href="/">
          <img src="./assets/images/chefify.png" alt="Logo" />
        </a>

        <div className="ml-4 flex items-center bg-[#f3f4f6] p-2 rounded-xl">
          <img src="./assets/images/search.png" alt="Search" />
          <input
            className="pl-2 text-xs min-w-[250px] "
            type="text"
            value={search}
            placeholder="What would you like to cook?"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
      </div>

      <ul className="flex items-center justify-between gap-4">
        {navLink.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center">
        <a
          href="/your-recipe-box"
          className="flex items-center gap-2 bg-[#fdf1f5] text-[var(--primary-color)] py-2 px-4 rounded-xl"
        >
          <img src="./assets/images/archive_check.png" alt="Archieve_check" />
          Your Recipe Box
        </a>

        <img className="ml-2" src="./assets/images/avatar.png" alt="Avatar" />
      </div>
    </div>
  );
};

export default Navbar;
