const generatePlayerBoard = (numberOfRows, numberOfColumns) => 
{
	const board = [];
	for (i = 0; i < numberOfRows; i++)
	{
		const row = [];
		for (j = 0; j < numberOfColumns; j++)
		{
			row.push(' ');
		};
		board.push(row);
	};
	return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>
{
	const board = [];
	for (i = 0; i < numberOfRows; i++)
	{
		const row = [];
		for (j = 0; j < numberOfColumns; j++)
		{
			row.push(null);
		};
		board.push(row);
	};

	let numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced < numberOfBombs)
	{
		
		const randomRowIndex = Math.floor(Math.random() * numberOfRows);
		const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

		if (board[randomRowIndex][randomColumnIndex] !== 'B')
		{	
		
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;

		};
	};

	return board;
};


const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) =>
{
	const neighborOffsets = [];
	neighborOffsets[0] = [-1, -1];
	neighborOffsets[1] = [-1, 0];
	neighborOffsets[2] = [-1, 1];
	neighborOffsets[3] = [0, -1];
	neighborOffsets[4] = [0, 1];
	neighborOffsets[5] = [1,-1];
	neighborOffsets[6] = [1, 0];
	neighborOffsets[6] = [1, 1];

	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;

	numberOfBombs = 0;
	neighborOffsets.foreach(offest => {
		const neighborRowIndex = rowIndex + offest[0];
		const neighborColumnIndex = columnIndex + offest[1];

		if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns)
		{
			if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B')
			{
				numberOfBombs++;
			};
		};
		return numberOfBombs;
	});
};


const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) =>
{
	if (playerBoard[rowIndex][columnIndex] !== ' ')
	{
		console.log('This tile has already been flipped');
		return;
	}else if (bombBoard[rowIndex][columnIndex] === 'B')
	{
		playerBoard[rowIndex][columnIndex] = 'B';
	}else
	{
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
	};
};





const printBoard = board => 
{
	console.log(board.map(row => row.join('  |  ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 4);
const bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');

printBoard(playerBoard);
