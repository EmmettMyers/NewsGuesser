import '../scss/App.css';
import { React, useState } from 'react';
import TopicModal from '../components/TopicModal';
import { startGame } from '../services/startGame';

export default function Home() {
    const [topicOpen, setTopicOpen] = useState(false);
    return (
        <div className="bg-violet-700 h-full w-full absolute top-20 flex justify-center">
            {topicOpen && <TopicModal close={() => setTopicOpen(false)} />}
            <div id="mottoScreen" className="z-10 text-center vert">
                <div id="mottoTxt" className="shadow2 font-bold text-7xl text-white pl-3 pr-3 select-none mt-8">See a news photo,<br />guess the words<br />in the article</div>
                <div className="flex justify-center mt-10">
                    <div 
                        onClick={() => startGame()} 
                        className="bg-gray-800 mr-3 homeBtn">
                            Play <span className="text-violet-400 font-black">Normal</span>
                    </div>
                    <div 
                        onClick={() => setTopicOpen(true)} 
                        className="bg-gray-800 ml-3 homeBtn">
                            Play by <span className="text-violet-400 font-black">Topic</span>
                    </div>
                </div>
            </div>
            <div className="z-10 vert">
                <img id="gameMenuImg" className="shadow2 bg-red-500 ml-24 border-2 border-gray-800 rounded-xl" src="ngShot.png" />
            </div>
            <img className="h-full w-full opacity-10 absolute top-0" src="https://mediaengagement.org/wp-content/uploads/2014/04/News_Site-600x398.jpg"></img>
        </div>
    );
}