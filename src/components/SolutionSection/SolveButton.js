import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { stringifyBoard } from "../../boggle/board";

const SolveButton = ({ disabled, setWords, board }) => {
    const onSolve = () => {
        (async () => {
            const res = await axios.get(`https://boggle-solver.onrender.com/solve/?board=${stringifyBoard(board)}&rows=${board.length}&cols=${board[0].length}`);
            setWords(res.data);
        })();
    };

    return (
        <button 
            onClick={onSolve}
            disabled={disabled}
            className={"flex items-center justify-center w-full p-4 text-sm md:text-xl font-bold text-white uppercase transition-all bg-blue-600 rounded-lg shadow-md" + (disabled ? " bg-blue-500/80 cursor-not-allowed" : " active:shadow-none hover:bg-gradient-to-tr from-blue-700 to-blue-500 active:bg-gradient-to-bl")}
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p className="ml-3">Find Words</p>
        </button>
    );
};

export default SolveButton;