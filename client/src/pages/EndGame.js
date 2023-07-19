import setPage from "..";
import { startGame } from "../services/startGame";

function EndGame(score) {
    return (
        <div id="insertEndGame">
            <div className="absolute h-full w-full">
                <div className="flex justify-center">
                    <div className="text-7xl z-30 absolute top-40 text-violet-300 font-black leading-tight">
                        Times Up!
                    </div>
                    <div className="text-4xl z-30 absolute top-80 text-yellow-200 font-bold leading-tight">
                        Your score is:
                    </div>
                    <div id="endScore" className="text-9xl z-30 absolute bottom-72 text-yellow-400 font-black leading-tight">
                        {score.score}
                    </div>
                    <div id="endBtns" className="flex absolute bottom-36">
                        <div 
                            onClick={() => startGame()} 
                            className="text-3xl z-30 text-center bg-violet-300 text-violet-900 font-bold rounded-xl p-3 mr-3">
                                Play Again
                        </div>
                        <div 
                            onClick={() => setPage('home')} 
                            className="text-3xl z-30 text-center bg-violet-300 text-violet-900 font-bold rounded-xl p-3 ml-3">
                                Exit To Menu
                        </div>
                    </div>
                    <div className="absolute z-20 w-full h-full bg-black opacity-90"></div>
                </div>
            </div>
    </div>
    );
}

export default EndGame;