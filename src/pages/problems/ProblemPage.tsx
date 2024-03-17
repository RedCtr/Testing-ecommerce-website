import { useState } from "react";

type TCircle = {
  x: number;
  y: number;
  bgColor?: string;
};

const colors = [
  "#FF5733",
  "#FFD700",
  "#00FF00",
  "#00BFFF",
  "#FF1493",
  "#00FFFF",
  "#FF4500",
  "#7FFF00",
  "#9370DB",
  "#FF6347",
];
const ProblemPage = () => {
  const [circles, setCircles] = useState<TCircle[]>([]);
  const [undoCircles, setUndoCircles] = useState<TCircle[]>([]);

  const createCircle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.pageX;
    const y = e.pageY;
    console.log(x, y);
    setCircles((prev) => [
      ...prev,
      { x, y, bgColor: colors[Math.floor(Math.random() * colors.length)] },
    ]);
  };

  const undoLastCircle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    const lastCircle = circles.pop()!;
    setUndoCircles((prev) => [...prev, { ...lastCircle }]);
    // const newCircles = circles.filter(
    //   (_, index) => index !== circles.length - 1
    // );
    setCircles(circles);
  };

  const redoLastCircle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    const firstRedoCircle = undoCircles.pop()!;
    setUndoCircles(undoCircles);
    setCircles((prev) => [...prev, { ...firstRedoCircle }]);
  };

  return (
    <div
      onClick={createCircle}
      className="relative min-h-screen w-full bg-gray-900 overflow-hidden"
    >
      <div className="flex items-center gap-x-2 m-2">
        <button
          className="px-2 py-2 rounded-md bg-gray-700 text-slate-200 text-base font-semibold disabled:cursor-not-allowed disabled:bg-gray-700/80 disabled:text-gray-500/80"
          onClick={redoLastCircle}
          disabled={undoCircles.length === 0}
        >
          Redo
        </button>
        <button
          className="px-2 py-2 rounded-md bg-gray-700 text-slate-200 text-base font-semibold disabled:cursor-not-allowed disabled:bg-gray-700/80 disabled:text-gray-500/80"
          onClick={undoLastCircle}
          disabled={circles.length === 0}
        >
          Undo
        </button>
      </div>
      {circles.map((circle, index) => (
        <div
          key={`${circle.x}-${circle.y}-${index}`}
          style={{
            left: circle.x,
            top: circle.y,
            backgroundColor: circle.bgColor,
          }}
          className={`absolute inline-block rounded-full w-4 h-4`}
        />
      ))}
    </div>
  );
};

export default ProblemPage;
