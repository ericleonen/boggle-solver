import _ from "lodash";

const Tile = ({ value, r, c, setBoard, editBoard, order }) => {
    const onChange = input => {
        setBoard(board => {
            board = _.cloneWith(board);
            board[r][c] = input.toLowerCase();

            return board;
        });
    };

    if (editBoard) {
        return (
            <input 
                value={value}
                maxLength={2}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => onChange("")}
                className="flex items-center justify-center w-[12vw] h-[12vw] md:w-[6.5vw] md:h-[6.5vw] m-[1vw] md:m-[.5vw] md:text-[4vw] text-[5vw] font-bold text-center text-blue-600 capitalize bg-white rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none focus:bg-blue-200"
            />
        )
    }

    return (
        <div 
            className={
                "relative flex items-center justify-center w-[12vw] h-[12vw] md:w-[6.5vw] md:h-[6.5vw] m-[1vw] md:m-[.5vw] md:text-[4vw] text-[5vw] font-bold text-blue-600 capitalize bg-white rounded-lg shadow-lg"
                + ((typeof order === "number") ? " bg-blue-300" : "")
            }
        >
            <p className="absolute text-xs top-2 left-2">{ (typeof order === "number") && order + 1 }</p>
            { value }
        </div>
    );
};

export default Tile;