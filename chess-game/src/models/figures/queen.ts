import { Cell } from "../cell";
import { Colors } from "../colors";
import { Figure, FigureNames } from "./figure";
import blackLogo from '../../assets/Chess_qdt60.png'
import whiteLogo from '../../assets/Chess_qlt60.png'

export class Queen extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyVertical(target))
            return true;
        if(this.cell.isEmptyHorizontal(target))
            return true;
        if(this.cell.isEmptyDiagonal(target))
            return true;
        return false;
    }
}