import { Cell } from "../cell";
import { Colors } from "../colors";
import { Figure, FigureNames } from "./figure";
import blackLogo from '../../assets/Chess_pdt60.png'
import whiteLogo from '../../assets/Chess_plt60.png'

export class Pawn extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        return true
    }
}