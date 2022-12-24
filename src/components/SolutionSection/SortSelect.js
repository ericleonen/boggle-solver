import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortSelect = ({ sort, setSort }) => {
    return (
        <div className="flex items-center p-2 font-semibold">
            <p className="text-xs text-gray-400 uppercase">sort by:</p>
            <button 
                className={
                    "p-1 ml-2 text-xs uppercase transition-all rounded-sm hover:bg-gray-100 hover:text-black"
                    + (sort > 0 ? " text-black" : " text-gray-400")
                }
                onClick={() => setSort(1)}
            >
                length
                <FontAwesomeIcon icon={faArrowUp} className="ml-1"/>
            </button>
            <button 
                className={
                    "p-1 ml-2 text-xs uppercase transition-all rounded-sm hover:bg-gray-100 hover:text-black"
                    + (sort < 0 ? " text-black" : " text-gray-400")
                }
                onClick={() => setSort(-1)}
            >
                length
                <FontAwesomeIcon icon={faArrowDown} className="ml-1"/>
            </button>
        </div>
    );
};

export default SortSelect;