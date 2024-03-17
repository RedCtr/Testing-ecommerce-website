import { Outlet } from "react-router-dom";

const ProblemLayout = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default ProblemLayout;
