import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const SwitchSolutionButton = ({ onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="flex items-center p-3 ml-auto text-blue-600 transition-all bg-white rounded-md shadow-md hover:bg-blue-500 hover:text-white active:shadow-none active:bg-blue-600"
        >
            <FontAwesomeIcon icon={faShuffle} />
            <p className="ml-2 font-semibold uppercase text-md">Show another solution</p>
        </button>
    );
};

export default SwitchSolutionButton;