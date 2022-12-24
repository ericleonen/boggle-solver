import Button from "./Button";
import Tile from "./Tile";
import { faPenToSquare, faLock, faDice } from "@fortawesome/free-solid-svg-icons";
import { generateRandomBoard } from "../../boggle/board";
import { useEffect, useState } from "react";
import SwitchSolutionButton from "./SwitchSolutionButton";

const Board = ({ board, setBoard, editBoard, setEditBoard, displayPaths }) => {
    const [selectedPath, setSelectedPath] = useState(-1);

    useEffect(() => {
        if (editBoard || displayPaths.length === 0) {
            setSelectedPath(-1);
        }
        else {
            setSelectedPath(0);
        }
    }, [displayPaths, setSelectedPath, editBoard]);

    useEffect(() => {
        setSelectedPath(-1);
    }, [board, setSelectedPath]);

    return (
        <div className="p-12">
            <div className="p-[1vw] bg-blue-500 shadow-lg rounded-xl">
                {
                    board.map(
                        (row, r) => (
                            <div className="flex" key={`row_${r}`}>
                                {
                                    row.map(
                                        (item, c) => 
                                        <Tile 
                                            value={item} 
                                            r={r} 
                                            c={c} 
                                            key={`tile_${r}_${c}`} 
                                            setBoard={setBoard}
                                            editBoard={editBoard}
                                            order={
                                                (selectedPath > -1 && selectedPath < displayPaths.length && displayPaths[selectedPath][r]) ?
                                                displayPaths[selectedPath][r][c]
                                                :
                                                null
                                            }
                                        />
                                    )
                                }
                            </div>
                        )
                    ) 
                }
            </div>
            <div className="flex mt-3">
                { 
                    editBoard ?
                    <Button 
                        icon={faLock}
                        label="Lock Board"
                        onClick={() => setEditBoard(false)}
                    />
                    :
                    <Button 
                        icon={faPenToSquare} 
                        label="Edit Board"
                        onClick={() => setEditBoard(true)}
                    />
                }
                { 
                    editBoard 
                    && 
                    <Button 
                        onClick={() => setBoard(generateRandomBoard(board.length, board[0].length))}
                        icon={faDice} 
                        label="Randomize Board"
                    /> 
                }
                {
                    (displayPaths.length > 1 && !editBoard)
                    &&
                    <SwitchSolutionButton onClick={() =>
                        setSelectedPath(prev => {
                            if (prev + 1 >= displayPaths.length) {
                                return 0;
                            }
                            return prev + 1;
                        })
                    }/>
                }
            </div>
        </div>
    );
};

export default Board;