const Word = ({ word, paths, setDisplayPaths, selected, setSelected }) => {
    if (word === selected) {
        return (
            <button 
                onClick={() => {
                    setDisplayPaths([]);
                    setSelected("");
                }}
                className="p-2 m-1 text-left transition-all bg-gray-100 rounded-md shadow-md group"
            >
                <p className="font-semibold text-black uppercase transition-all group-hover:text-gray-500">{ word }</p>
            </button>
        );
    }

    return (
        <button 
            onClick={() => {
                const pathObjs = paths.map(path => {
                    const pathObj = {};

                    path.forEach(([row, col], index) => {
                        if (!pathObj[row]) {
                            pathObj[row] = {};
                        }
                        pathObj[row][col] = index;
                    });

                    return pathObj;
                });
                
                setDisplayPaths(pathObjs);
                setSelected(word);
            }}
            className="p-2 m-1 text-left transition-all rounded-md hover:bg-gray-100 hover:shadow-md group"
        >
            <p className="font-semibold text-gray-500 uppercase transition-all group-hover:text-black">{ word }</p>
        </button>
    );
};

export default Word;