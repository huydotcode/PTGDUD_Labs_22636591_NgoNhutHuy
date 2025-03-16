import RecipeItem from "@/components/RecipeItem";
import Avatar from "@/components/ui/Avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

const mockData = {
  name: "Emma Gonzalez",
  avatar:
    "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a impedit dolorem quidem repellat, voluptatibus consequuntur qui officiis facere consequatur saepe vitae. Quaerat temporibus quibusdam dolor iste ipsum, odit tenetur. Provident voluptatum voluptate sint facere, quidem ratione quis. Molestias fuga eveniet omnis, beatae ullam eius expedita nam dolore facere sit, alias voluptate animi id! Modi iste at maiores quisquam dolorum.",
};

const tabs = ["Saved Recipes", "Folders", "Recipes by Genevieve"];

const YourRecipeBox = () => {
  const [tab, setTab] = useState(tabs[0]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://64f35296edfa0459f6c67d04.mockapi.io/saved-recipes"
        );
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Your Recipe Box</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="pt-16">
        <h1 className="font-bold text-3xl">{mockData.name}'s Recipe Box</h1>

        <div className="mt-8 flex p-4">
          <Avatar
            src={mockData.avatar}
            alt={mockData.name}
            width={14}
            height={14}
          />

          <div className="flex flex-col justify-between ml-4">
            <p className="text-base text-justify">{mockData.desc}</p>

            <div className="flex items-center p-4">
              <h5 className="text-[var(--primary-color)]">6.5 Subscribes</h5>
              <Button className="ml-4">
                Share
                <img src="./assets/images/share.png" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b mt-8">
        {tabs.map((t, i) => {
          return (
            <Button
              className="rounded-b-none"
              key={i}
              variant={tab === t ? "default" : "ghost"}
              onClick={() => setTab(t)}
            >
              {t}
            </Button>
          );
        })}
      </div>

      <div>
        {tab === "Saved Recipes" && (
          <div className="grid grid-cols-3 gap-4 py-4">
            {recipes.map((item) => (
              <RecipeItem key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourRecipeBox;
