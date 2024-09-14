import { STATUS } from "../constants/status";
import { Status } from "../types/status";

interface ResultProps {
    status: Status | null;
}

export const Result: React.FC<ResultProps> = ({ status }) => {
    switch (status) {
        case STATUS.WIN:
            return <span className="text-3xl text-center block">Ganaste</span>
        case STATUS.LOSE: 
            return <span className="text-3xl text-center block">Perdiste</span>
        case STATUS.DRAW:
            return <span className="text-3xl text-center block">Empate</span>
        default:
            return null;
    }
}