import React from "react";
import Collapse from "./Collapse";
import CheckBox from "./CheckBox";

const Sidebar = () => {
  return (
    <div className="w-[400px] py-2 rounded-md border border-gray-200">
      <span className="flex items-center font-bold text-xl p-4">
        <img
          className="mr-2"
          src="./assets/images/list_filter.png"
          alt="List filter"
        />
        FILTERS
      </span>

      <Collapse className="mt-4" title="Type">
        <div className="grid grid-cols-2">
          <CheckBox title="Pan-tried" value="pan-tried" />
          <CheckBox title="Stir-fried" value="stir-tried" />
          <CheckBox title="Roasted" value="roasted" />
          <CheckBox title="Sauteed" value="sautted" />
          <CheckBox title="Baked" value="baked" />
          <CheckBox title="Streamed" value="streamed" />
          <CheckBox title="Stewed" value="stewed" />
        </div>
      </Collapse>

      <Collapse className="py-4 border-b border-gray-200" title="Time">
        <img src="./assets/images/slider.png" alt="Slider" />
      </Collapse>

      <Collapse className="py-4 border-b border-gray-200" title="Rating">
        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" id="rating-5" />
          <span className="checkmark"></span>

          <img
            className="ml-2"
            src="./assets/images/rating_5.png"
            alt="Rating 5"
          />
        </label>

        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" id="rating-4" />
          <span className="checkmark"></span>
          <img
            className="ml-2"
            src="./assets/images/rating_4.png"
            alt="Rating 4"
          />
        </label>

        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" id="rating-3" />
          <span className="checkmark"></span>
          <img
            className="ml-2"
            src="./assets/images/rating_3.png"
            alt="Rating 3"
          />
        </label>

        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" id="rating-2" />
          <span className="checkmark"></span>
          <img
            className="ml-2"
            src="./assets/images/rating_2.png"
            alt="Rating 2"
          />
        </label>

        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" id="rating-1" />
          <span className="checkmark"></span>
          <img
            className="ml-2"
            src="./assets/images/rating_1.png"
            alt="Rating 1"
          />
        </label>
      </Collapse>

      <div className="p-4">
        <button className="rounded-xl w-full p-2 bg-[var(--primary-color)] text-white">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
