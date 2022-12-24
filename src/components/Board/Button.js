import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, label, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="flex items-center p-3 mr-4 text-blue-600 whitespace-no-wrap transition-all bg-white rounded-md shadow-md hover:bg-blue-500 hover:text-white active:shadow-none active:bg-blue-600"
        >
            <FontAwesomeIcon icon={icon} className="text-[0.5rem] md:text-base"/>
            <p className="ml-2 text-[0.5rem] font-semibold uppercase md:text-base">{ label }</p>
        </button>
    );
};

export default Button;