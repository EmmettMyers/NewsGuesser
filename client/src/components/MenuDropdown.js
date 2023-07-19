import { startGame } from "../services/startGame";
import { React, useState } from 'react';
import TopicModal from '../components/TopicModal';

function MenuDropdown(){
    const [topicOpen, setTopicOpen] = useState(false);
    return (
        <>
            {topicOpen && 
                <div className="h-full w-full absolute top-20 flex justify-center">
                    <TopicModal close={() => setTopicOpen(false)} />
                </div>
            }
            <div id="menuDropdown" class="top-20 absolute right-0 w-32 h-32 bg-gray-800 z-10 rounded-bl-xl border-t-2 border-b-2 border-l-2 border-gray-500">
                <div 
                    onClick={() => startGame()} 
                    class="text-gray-200 font-bold text-md text-center p-3 w-full">
                        Play Normal
                </div>
                <div 
                    onClick={() => setTopicOpen(true)} 
                    class="text-gray-200 font-bold text-md text-center pb-3">
                        Play Topics
                </div>
                <div 
                    id="settings" 
                    class="text-gray-200 font-bold text-md text-center pb-3">
                        Settings
                </div>
            </div>
        </>
    );
}

export default MenuDropdown;