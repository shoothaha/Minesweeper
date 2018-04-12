

export class Board 
{

	constructor(numberOfRows, numberOfColumns, numberOfBombs)
	{
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows * numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
	}

	get playerBoard()
	{
		return this._playerBoard;
	}

	flipTile(rowIndex, columnIndex)
	{
		if (this._playerBoard[rowIndex][columnIndex] !== ' ')
		{			
			return;
		} 
		else if (this._bombBoard[rowIndex][columnIndex] === 'B')
		{
			this._playerBoard[rowIndex][columnIndex] = 'B';
		} 
		else
		{
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
		}

		this._numberOfTiles -= 1;
	}


	getNumberOfNeighborBombs (rowIndex, columnIndex) 
	{
		const neighborOffsets = [];
		neighborOffsets[0] = [-1, -1];
		neighborOffsets[1] = [-1, 0];
		neighborOffsets[2] = [-1, 1];
		neighborOffsets[3] = [0, -1];
		neighborOffsets[4] = [0, 1];
		neighborOffsets[5] = [1,-1];
		neighborOffsets[6] = [1, 0];
		neighborOffsets[7] = [1, 1];

		const numberOfRows = this._bombBoard.length;
		const numberOfColumns = this._bombBoard[0].length;

		let numberOfBombs = 0;
		neighborOffsets.forEach(offest => 
		{
			const neighborRowIndex = rowIndex + offest[0];
			const neighborColumnIndex = columnIndex + offest[1];

			if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && 
				neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns)
			{
				if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B')
				{
					numberOfBombs++;
				};
			};
		});

		return numberOfBombs;
	}

	hasSafeTiles()
	{
		return this._numberOfTiles !== this._numberOfBombs;
	}	

	print() 
	{
		console.log(this._playerBoard.map(row => row.join('  |  ')).join('\n'));
	}

	static generatePlayerBoard(numberOfRows, numberOfColumns)
	{
		const board = [];
		for (let i = 0; i < numberOfRows; i++)
		{
			const row = [];
			for (let j = 0; j < numberOfColumns; j++)
			{
				row.push(' ');
			};
			board.push(row);
		};
		return board;
	}


	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs)
	{
		const board = [];
		for (let i = 0; i < numberOfRows; i++)
		{
			const row = [];
			for (let j = 0; j < numberOfColumns; j++)
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
	}


};

