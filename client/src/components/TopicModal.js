import '../scss/App.css';
import { startGame } from '../services/startGame';

function TopicModal({ close }){
    return (
        <div id="chooseTopicBox" className="absolute h-full w-full select-none">
            <div className="flex justify-center">
                <div className="shadow2 border-4 border-white absolute top-40 z-30 w-80 h-96 bg-gray-400 rounded-lg text-center">
                    <div 
                        onClick={ close } 
                        id="closeTopic" 
                        className="absolute right-1.5 top-0 text-white text-xl">
                            X
                    </div>
                    <div className="bg-gray-800 text-white font-bold text-3xl p-3 rounded-t-lg">Choose a topic:</div>
                    <div id="topicHolder" className="text-violet-700 font-bold text-3xl">
                        <div onClick={() => { startGame("business") }} className="p-1.5 mt-2.5">Business</div>
                        <div onClick={() => { startGame("entertainment") }} className="p-1.5">Entertainment</div>
                        <div onClick={() => { startGame("health") }} className="p-1.5">Health</div>
                        <div onClick={() => { startGame("science") }} className="p-1.5">Science</div>
                        <div onClick={() => { startGame("sports") }} className="p-1.5">Sports</div>
                        <div onClick={() => { startGame("technology") }} className="p-1.5">Technology</div>
                    </div>
                </div>
                <div onClick={ close }  className="absolute z-20 w-full h-full bg-black opacity-90"></div>
            </div>
        </div>
    );
}

export default TopicModal;