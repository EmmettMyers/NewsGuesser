import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp, gameOver }) {
    const {
        seconds, minutes
    } = useTimer({
        expiryTimestamp, onExpire: () =>
            gameOver()
    });
    return (
        <div>
            <span>{minutes}</span>:<span>{seconds < 10 && '0'}{seconds}</span>
        </div>
    );
}

export default MyTimer;