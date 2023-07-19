import ReactDOM from 'react-dom/client';
import { Game, clearWordsGuessed } from '../pages/Game';
import setPage from '..';

export function startGame(topic) {
    var mode;
    topic == undefined ? mode = "normal" : mode = "topics";

    setPage('loading');

    fetch("/" + mode, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic })
    }).then(res => res.json()).then(json => {
        var src = JSON.parse(json[0]);
        var title = JSON.parse(json[1]);
        var content = JSON.parse(json[2]);
        const data = { "src": src, "title": title, "content": content, "mode": mode };
        clearWordsGuessed();
        setPage('game', data);
    });
}