import { useEffect, useState } from "react";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import useGameStore from "../store/GameStore"
import { Result } from "../components/Result";
import Button from "../components/Button";

const PlayModule = () => {
    const choice = useGameStore(state => state.choice);
    const {status, cpuAnswer, generateCpuChoice } = usePlayGame();
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        if(choice){
            generateCpuChoice(choice);
        }
    }, [choice, generateCpuChoice]);

    useEffect(() => {
        if(countDown > 0){
            setTimeout(() => setCountDown(countDown - 1), 1000);
        }
    }, [countDown]);


    if(countDown > 0){
        return <span className="h-49 text-5xl text-center block">{countDown}</span>
    }
    return(
        <>
            <Result status={status}/>
            <div className="flex justify-around">
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">Jugador</span>
                    <Choice choice={choice}/>
                </div>
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">CPU</span>
                    <Choice choice={cpuAnswer}/>
                </div>
            </div>
            <Button status={status}/>
        </>
    )
}

export default PlayModule;