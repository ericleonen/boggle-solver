const chars = "abcdefghijklmnopqrstuvwxyz";

const generateRandomChar = chars => {
    return chars.charAt(Math.floor(Math.random() * chars.length));
};

export const generateRandomBoard = (rows, cols) => {
    // TODO: Make the random board more Boggle-realistic
    const board = [];

    for (let row = 0; row < rows; row++) {
        const boardRow = [];

        for (let col = 0; col < cols; col++) {
            boardRow.push(generateRandomChar(chars));
        }

        board.push(boardRow);
    }

    return board;
};

export const stringifyBoard = (board) => {
    let str = "";
    board.forEach(row => row.forEach(char => str += `${char},`));
    return str.slice(0, -1);
};