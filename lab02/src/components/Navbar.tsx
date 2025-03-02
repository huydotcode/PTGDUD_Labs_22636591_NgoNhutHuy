const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 m-2">
      <div className="flex items-center">
        <span>
          <img src="./assets/images/chefify.png" alt="Logo" />
        </span>

        <div className="ml-4 flex items-center bg-[#f3f4f6] p-2 rounded-xl">
          <img src="./assets/images/search.png" alt="Search" />
          <input className="pl-2" type="text" />
        </div>
      </div>

      <ul className="flex items-center justify-between gap-4">
        <li>
          <a href="#">What to cook</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">Ingredients</a>
        </li>
        <li>
          <a href="#">Occassion</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>

      <div className="flex items-center">
        <button className="flex items-center gap-2 bg-[#fdf1f5] text-[var(--primary-color)] py-2 px-4 rounded-xl">
          <img src="./assets/images/archive_check.png" alt="Archieve_check" />
          Your Recipe Box
        </button>

        <img className="ml-2" src="./assets/images/avatar.png" alt="Avatar" />
      </div>
    </div>
  );
};

export default Navbar;
