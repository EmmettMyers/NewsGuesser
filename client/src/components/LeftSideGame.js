import MyTimer from "./MyTimer";

function LeftSideGame({ article, score, time, gameOver }) {
    return (
        <div className="w-1/2 h-full">
            {/* time box */}
            <div className="absolute w-1/4 h-1/3">
                <div className="border-r-2 border-gray-600 text-2xl font-black border-b-2 text-center mt-20 p-3 bg-violet-400 select-none">
                    Time
                </div>
                <div className="flex items-center justify-center border-r-2 border-gray-600 h-1/2 text-6xl font-black text-white bg-violet-900 select-none">
                    <MyTimer expiryTimestamp={time} gameOver={gameOver} />
                </div>
            </div>
            {/* score box */}
            <div className="absolute w-1/4 h-1/3 right-1/2">
                <div className="text-2xl font-black border-b-2 border-gray-600 text-center mt-20 p-3 bg-violet-400 select-none">
                    Score
                </div>
                <div className="flex items-center justify-center h-1/2 text-6xl font-black text-white bg-violet-900 select-none">
                    {score}
                </div>
            </div>
            {/* picture box */}
            <div className="flex items-center justify-center h-2/3 absolute bottom-0 border-t-2 border-gray-600 bg-gray-800 w-1/2">
                <img src={article.src} className="object-cover border-2 border-white w-3/4 h-3/4"></img>
            </div>
        </div>
    );
}

export default LeftSideGame;