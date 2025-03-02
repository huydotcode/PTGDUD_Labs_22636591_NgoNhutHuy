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
          <CheckBox title="Pan-tried" value="pan-tried" />
          <CheckBox title="Stir-fried" value="stir-tried" />
          <CheckBox title="Pan-tried" value="pan-tried" />
          <CheckBox title="Stir-fried" value="stir-tried" />
          <CheckBox title="Pan-tried" value="pan-tried" />
          <CheckBox title="Stir-fried" value="stir-tried" />
        </div>
      </Collapse>

      <Collapse className="py-4 border-b border-gray-200" title="Time">
        <img src="./assets/images/slider.png" alt="Slider" />
      </Collapse>

      <Collapse className="py-4 border-b border-gray-200" title="Rating">
        <div className="flex items-center mt-2">
          <input type="checkbox" id="rating-5" />
          <label className="ml-2" htmlFor="rating-5">
            <img src="./assets/images/rating_5.png" alt="Rating 5" />
          </label>
        </div>

        <div className="flex items-center mt-2">
          <input type="checkbox" id="rating-4" />
          <label className="ml-2" htmlFor="rating-4">
            <img src="./assets/images/rating_4.png" alt="Rating 4" />
          </label>
        </div>

        <div className="flex items-center mt-2">
          <input type="checkbox" id="rating-3" />
          <label className="ml-2" htmlFor="rating-3">
            <img src="./assets/images/rating_3.png" alt="Rating 3" />
          </label>
        </div>

        <div className="flex items-center mt-2">
          <input type="checkbox" id="rating-2" />
          <label className="ml-2" htmlFor="rating-2">
            <img src="./assets/images/rating_2.png" alt="Rating 2" />
          </label>
        </div>

        <div className="flex items-center mt-2">
          <input type="checkbox" id="rating-1" />
          <label className="ml-2" htmlFor="rating-1">
            <img src="./assets/images/rating_1.png" alt="Rating 1" />
          </label>
        </div>
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
