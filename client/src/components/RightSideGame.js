
function RightSideGame({ article, enterWord }) {
    return (
        <div className="w-1/2 h-full border-l-2 border-gray-600">
            {/* article box */}
            <div className="w-full h-3/4 bg-white absolute top-20 overflow-y-scroll">
                <div className="text-3xl text-center pl-2 pr-4 pt-2 font-bold w-1/2">
                    {article.title}
                </div>
                <div id="artContent" className="text-white h-3/4 w-1/2 pt-2 pl-4 pr-4">
                    {article.content}
                </div>
            </div>
            {/* input box */}
            <div id="wordInput" className="border-t-2 border-gray-600 w-1/2 absolute bottom-0 bg-violet-400 flex justify-center">
                <input id="wordBox" autocomplete="off" className="p-3 text-3xl border-2 border-gray-600 h-2/3 w-2/3 mt-5" type="text" />
                <button 
                    onClick={() => enterWord()} 
                    id="enterBtn" 
                    className="text-3xl border-2 border-gray-600 font-bold text-white h-2/3 bg-violet-600 pl-5 pr-5 mt-5">
                        Enter
                </button>
            </div>
        </div>
    );
}

export default RightSideGame;