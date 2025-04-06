"use client";
import RecipeItem from "@/components/RecipeItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Sidebar from "../../components/Sidebar";

const SearchPage = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("query");

  const handleChangeSort = (value: string) => {
    const sortedRecipes = [...recipes].sort((a, b) => {
      if (value === "a-z") {
        return a.name.localeCompare(b.name);
      }

      if (value === "z-a") {
        return b.name.localeCompare(a.name);
      }

      return 0;
    });

    setRecipes(sortedRecipes);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://64f35296edfa0459f6c67d04.mockapi.io/saved-recipes"
        );
        const data = await res.json();

        if (query) {
          const filteredData = data.filter((item: IRecipe) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          );

          setRecipes(filteredData);
          return;
        } else {
          setRecipes(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  return (
    <div className="px-[40px] border border-gray-200 py-[40px]">
      <div className="flex justify-between w-full">
        <Sidebar />

        {!loading && recipes.length == 0 && (
          <div className="flex flex-1 items-center justify-center flex-col">
            <h1 className="text-2xl font-bold">
              Sorry, no results were found for "{query}"
            </h1>

            <img src="./assets/images/nothing.png" alt="No thing" />

            <p>We have all your Independence Day sweets covered.</p>

            <div className="flex items-center gap-2 mt-4">
              <button className="bg-[#fbf1f5] py-2 px-4 rounded-3xl text-[#dd84a3]">
                Sweet Cake
              </button>

              <button className="bg-[#f4f0ff] py-2 px-4 rounded-3xl text-[#ab8de5]">
                Black Cake
              </button>

              <button className="bg-[#fbf1f5] py-2 px-4 rounded-3xl text-[#dd84a3]">
                Pozole Verde
              </button>

              <button className="bg-[#effbff] py-2 px-4 rounded-3xl text-[#6c97a1]">
                Healthy food
              </button>
            </div>
          </div>
        )}

        {recipes.length > 0 && (
          <div className="pl-4">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-3xl">
                {query}: ({recipes.length})
              </h1>

              <Select onValueChange={(value) => handleChangeSort(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="A-Z" defaultValue={"A-Z"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a-z">A-Z</SelectItem>
                  <SelectItem value="z-a">Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4">
              {recipes.map((item) => (
                <RecipeItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">11</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default SearchPage;
