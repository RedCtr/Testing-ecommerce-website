import { Link } from "react-router-dom";

type Problem = {
  id: number;
  name: string;
  description?: string;
  isSolved: boolean;
};
const problems: Problem[] = [
  {
    id: 1,
    name: "The Dots",
    description:
      "On Every user click trace a circle mark with random color and add a redo and undo buttons as well ",
    isSolved: true,
  },
];
const ProblemList = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center w-full mx-auto py-6 px-2">
      {problems.map((problem) => {
        return (
          <Link
            to={`/problems/${problem.id}`}
            className="bg-slate-700 hover:bg-slate-600 transition rounded-lg w-full max-w-2xl px-4 py-1 flex flex-col items-start no-underline "
            key={problem.id}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-3xl font-bold text-slate-100 tracking-tight">
                {problem.name}
              </h1>
              <p className="text-base italic font-normal text-slate-400 tracking-tight bg-slate-800 rounded-sm px-2">
                # {problem.id}
              </p>
            </div>

            <p className="py-2 text-lg font-normal text-slate-300 tracking-wide max-w-xl">
              {problem.description}
            </p>
            <p
              className={`my-1 text-slate-800 rounded-sm px-[2px] capitalize ${
                problem.isSolved ? "bg-green-400" : "bg-rose-500"
              }`}
            >
              {problem.isSolved ? "Solved" : "UnSolved"}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProblemList;
