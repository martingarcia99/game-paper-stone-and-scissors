import useScoreStore from "../store/ScoreStore"

const Score = () => {
    const [score, maxScore] = useScoreStore(state => [state.score, state.maxScore]);

    return (
        <div className="m-auto flex py-12 w-4/12 justify-between gap-5">
            <h2 className="text-3xl">Puntaje: {score}</h2>
            <h2 className="text-3xl">Puntaje mas alto: {maxScore}</h2>
        </div>
    )
}

export default Score;