document.getElementById('generate').addEventListener('click', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    lottoNumbersContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        const lottoSetDiv = document.createElement('div');
        lottoSetDiv.className = 'lotto-set';

        sortedNumbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'lotto-number';
            numberDiv.textContent = number;
            lottoSetDiv.appendChild(numberDiv);
        });

        lottoNumbersContainer.appendChild(lottoSetDiv);
    }
});
