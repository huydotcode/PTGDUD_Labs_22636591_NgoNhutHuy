import Excercize3 from "./Excercise3";
import Excersize1 from "./Excercise1";
import Excersize2 from "./Excercise2";
import Excercise4 from "./Excercise4";

const Lab1 = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "64px",
      }}
    >
      <Excersize1 />
      <Excersize2 />
      <Excercize3 />
      <Excercise4 />
    </div>
  );
};

export default Lab1;
