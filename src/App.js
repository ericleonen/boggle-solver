import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import SolutionSection from "./components/SolutionSection";

const App = () => {
  const [board, setBoard] = useState([
    ['h', 'i', 't', '', ''],
    ['s', 'o', 'l', 'v', 'e'],
    ['t', 'o', '', '', ''],
    ['f', 'i', 'n', 'd', ''],
    ['w', 'o', 'r', 'd', 's']
  ]);
  const [editBoard, setEditBoard] = useState(false);
  const [displayPaths, setDisplayPaths] = useState([]);

  useEffect(() => {
    setDisplayPaths([]);
  }, [board, setDisplayPaths]);

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      <Header />
      <div className="flex flex-wrap justify-center h-full p-8 overflow-x-hidden overflow-y-scroll">
        <Board 
          board={board} 
          setBoard={setBoard}
          editBoard={editBoard}
          setEditBoard={setEditBoard}
          displayPaths={displayPaths}
        />
        <SolutionSection 
          editBoard={editBoard} 
          board={board} 
          setDisplayPaths={setDisplayPaths}
        />
      </div>
    </div>
  );
};

export default App;
