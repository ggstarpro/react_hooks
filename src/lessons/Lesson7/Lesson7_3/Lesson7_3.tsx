import { Suspense } from "react";
import Router from "./Router";

const Lesson7_3 = () => {
  return (
    <div>
      <Suspense fallback={"Loading...*1"}>
        <Router />
      </Suspense>
    </div>
  );
};

export default Lesson7_3;
