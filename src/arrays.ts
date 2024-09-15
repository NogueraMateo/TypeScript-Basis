const languages: Array<string> = []

languages.push("TypeScript")


type CellValue = "O" | "X" | ""
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const game: GameBoard = [
    ["O", "X", ""],
    ["O", "X", ""],
    ["O", "X", ""]
]

