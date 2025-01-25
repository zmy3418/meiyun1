let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;
let startTime = new Date();

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        makeGuess();
    }
}

function makeGuess() {
    const guessInput = document.getElementById('guess-input');
    const guess = Number(guessInput.value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const timeDisplay = document.getElementById('time');

    if (guessInput.value === '') {
        message.textContent = '请输入数字';
        return;
    }

    if (guess < 0 || guess > 100) {
        message.textContent = '请输入0到100之间的数字';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        message.textContent = '恭喜你，猜对了！';
        attemptsDisplay.textContent = `猜测次数: ${attempts}`;
        timeDisplay.textContent = `游戏时间: ${timeTaken} 秒`;
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = '太小了，再试一次。';
    } else {
        message.textContent = '太大了，再试一次。';
    }

    guessInput.value = '';
    guessInput.focus();
}