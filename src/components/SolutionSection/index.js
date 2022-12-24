import { useEffect, useState } from "react";
import SolveButton from "./SolveButton";
import SortSelect from "./SortSelect";
import Word from "./Word";

const SolutionSection = ({ board, editBoard, setDisplayPaths }) => {
    const [words, setWords] = useState({});
    const [selected, setSelected] = useState("");
    const [sort, setSort] = useState(1);

    useEffect(() => {
        setWords({});
        setSelected("");
        setSort(1);
    }, [board, setWords]);

    return (
        <div className="flex flex-col p-12 w-[27rem] max-w-full h-full">
            <SolveButton disabled={editBoard} setWords={setWords} board={board} />
            <div className="relative w-full h-full mt-4 overflow-scroll bg-white rounded-lg shadow-md">
                <div className="absolute w-full p-4 text-xs md:text-base">
                    { Object.keys(words).length > 0 && <SortSelect setSort={setSort} sort={sort} /> }
                    { 
                        Object.keys(words).length === 0 ? 
                        (
                            <div className="p-2">
                                <p className="font-semibold text-gray-500 uppercase">No words...</p>
                            </div>
                        )
                        : 
                        Object.keys(words)
                            .sort((a, b) => (a.length - b.length) * sort)
                            .map((word, i) => 
                                <Word 
                                    word={word} 
                                    paths={words[word]} 
                                    setDisplayPaths={setDisplayPaths} 
                                    selected={selected}
                                    setSelected={setSelected}
                                    key={`word_${i}`}
                                />
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default SolutionSection;