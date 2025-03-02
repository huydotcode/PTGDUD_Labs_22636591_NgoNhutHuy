const Footer = () => {
  return (
    <div className="flex justify-between px-8 pt-8 pb-10 bg-[#1d2228] text-white h-[300px]">
      {/* Left */}
      <div className="w-[60%] flex flex-col justify-between h-full">
        <div>
          <h1 className="text-xl font-bold">About Us</h1>
          <p className="mt-2">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro
          </p>

          <div className="flex items-center w-[50%] gap-2 mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white text-black  placeholder:text-black px-2 py-1 rounded-md flex-1"
            />
            <button className="bg-[var(--primary-color)] px-2 py-1 rounded-md">
              Send
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src="./assets/images/chefifywhite.png" alt="Chefify-white" />

          <span>2023 Chefify Company</span>

          <span>Terms of Service | Privacy Policy</span>
        </div>
      </div>

      {/* Right */}
      <div className="w-[40%] flex justify-between items-start h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl font-bold">Learn More</h1>
            <ul className="flex flex-col mt-1">
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold">Shop</h1>
            <ul className="flex flex-col mt-1">
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4 h-full">
          <div className="flex flex-col h-full">
            <h1 className="text-xl font-bold">Recipes</h1>
            <ul className="flex flex-col mt-1 justify-around flex-1">
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
