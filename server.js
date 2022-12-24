const express = require("express");
const app = express();
const cors = require("cors");
const wordTree = require("./wordTree.json");
const _ = require("lodash");

const generateEmptyVisited = (rows, cols) => {
    const visited = [];

    for (let row = 0; row < rows; row++) {
        const row = [];

        for (let col = 0; col < cols; col++) {
            row.push(false);
        }

        visited.push(row);
    }

    return visited;
};

const searchBoardFromSource = (row, col, board, word, wordTreeLocation, visited, path, foundWords) => {
    if (row < 0 || row >= board.length || 
        col < 0 || col >= board[0].length || 
        visited[row][col] ||
        !(board[row][col] in wordTreeLocation)) {
        return;
    }

    const block = board[row][col];

    for (let char of block) {
        word += char
        wordTreeLocation = wordTreeLocation[char];
    }

    if ("*" in wordTreeLocation) {
        if (!(word in foundWords)) {
            foundWords[word] = [];
        }

        foundWords[word].push(path);
    }

    visited[row][col] = true;
    path.push([row, col]);

    for (let newRow = row - 1; newRow <= row + 1; newRow++) {
        for (let newCol = col - 1; newCol <= col + 1; newCol++) {
            if (newRow === row && newCol === col) {
                continue;
            }

            searchBoardFromSource(newRow, newCol, board, word, wordTreeLocation, _.cloneDeep(visited), _.cloneDeep(path), foundWords);
        }
    }
};

const searchEntireBoard = (board) => {
    const foundWords = {};

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            searchBoardFromSource(row, col, board, "", wordTree, generateEmptyVisited(board.length, board[0].length), [], foundWords);
        }
    }

    return foundWords;
};

const generateBoardFromString = (boardString, rows, cols) => {
    boardString = boardString.split(",");
    if (rows * cols === boardString.length) {
        let i = 0;
        const board = [];

        for (let row = 0; row < rows; row++) {
            const boardRow = [];

            for (let col = 0; col < cols; col++) {
                boardRow.push(boardString[i]);
                i++;
            }

            board.push(boardRow);
        }

        return board;
    }

    console.log("boardString does not match with rows and cols");

    return [];
};

app.use(cors({
    origin: "*"
}));

app.get("/solve", (req, res) => {
    const boardString = req.query.board;
    const rows = parseInt(req.query.rows);
    const cols = parseInt(req.query.cols);
    const board = generateBoardFromString(boardString, rows, cols);

    res.send(searchEntireBoard(board));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});