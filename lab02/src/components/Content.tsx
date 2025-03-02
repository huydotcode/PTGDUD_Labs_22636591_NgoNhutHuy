import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="flex justify-between px-[40px] border border-gray-200 py-[40px]">
      <Sidebar />

      <div className="flex flex-1 items-center justify-center flex-col">
        <h1 className="text-2xl font-bold">
          Sorry, no results were found for "cakescascsa"
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
    </div>
  );
};

export default Content;
