// 로또 번호 생성 함수
function generateLotto() {
    const resultContainer = document.getElementById('lotto-result');
    resultContainer.innerHTML = ''; // 이전 번호 초기화
    
    let numbers = [];
    while(numbers.length < 6) {
        let n = Math.floor(Math.random() * 45) + 1;
        if(!numbers.includes(n)) numbers.push(n);
    }
    
    // 숫자 오름차순 정렬
    numbers.sort((a, b) => a - b);

    // 공 만들기
    numbers.forEach(num => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.innerText = num;
        
        // 숫자에 따른 색상 지정
        if (num <= 10) ball.classList.add('color-1');
        else if (num <= 20) ball.classList.add('color-2');
        else if (num <= 30) ball.classList.add('color-3');
        else if (num <= 40) ball.classList.add('color-4');
        else ball.classList.add('color-5');
        
        resultContainer.appendChild(ball);
    });
}

// 테마 토글 함수
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerText = '☀️ 라이트 모드';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerText = '🌙 다크 모드';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerText = '🌙 다크 모드';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerText = '☀️ 라이트 모드';
        }
    });
}

// DOM 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});
