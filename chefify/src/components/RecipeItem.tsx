import React from "react";
import { Button } from "./ui/Button";

interface Props {
  data: IRecipe;
}

const RecipeItem = ({ data }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden border">
      <img
        className="w-full object-cover max-h-[300px]"
        src={data.image}
        alt={data.name}
      />

      <div className="p-2 min-h-[100px] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold overflow-ellipsis max-h-[60px]">
            {data.name}
          </h3>
          <Button className="rounded-full p-0" variant={"outline"}>
            <img
              src="./assets/images/save.png"
              alt="Save"
              className="w-full h-full"
            />
          </Button>
        </div>
        <div>
          <span className="rounded-sm text-[var(--primary-color)] bg-gray-200 px-2 text-sm">
            {data.time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
