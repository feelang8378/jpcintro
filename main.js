// 나태주 시인의 명언/시 구절 목록
const quotes = [
    {
        content: "자세히 보아야 예쁘다.<br>오래 보아야 사랑스럽다.<br>너도 그렇다.",
        title: "- 풀꽃, 나태주"
    },
    {
        content: "어제보다 오늘이 더 예쁘고<br>오늘보다 내일이 더 사랑스러워질 너에게<br>축복을 보낸다.",
        title: "- 축복, 나태주"
    },
    {
        content: "바람 부는 날은 바람이 불어서 좋고<br>비 오는 날은 비가 와서 좋다.<br>오늘도 네가 있어 세상은 참 좋다.",
        title: "- 선물, 나태주"
    },
    {
        content: "행복은 멀리 있지 않다.<br>네 마음속에 있다.<br>그것을 발견하는 네가 행복이다.",
        title: "- 행복, 나태주"
    },
    {
        content: "너를 만난 것이 내 인생의 가장 큰 행운이다.<br>네가 있어 내 삶은 비로소 완성되었다.",
        title: "- 너에게, 나태주"
    },
    {
        content: "그리움은 작고 예쁜 꽃이다.<br>내 마음 한구석에서 말없이 피어나는<br>너를 향한 그리움.",
        title: "- 그리움, 나태주"
    },
    {
        content: "예쁜 생각만 하고 예쁜 꿈만 꾸렴.<br>내일 아침 네가 눈을 떴을 때<br>세상은 더 예쁜 모습으로 너를 기다릴 거야.",
        title: "- 자장가, 나태주"
    }
];

// 날짜 업데이트 및 오늘의 명언 설정
function updateDailyContent() {
    const dateEl = document.getElementById('current-date');
    const quoteEl = document.getElementById('daily-quote');
    const titleEl = document.getElementById('quote-title');
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    
    // 날짜 표시 (예: 2026년 3월 1일)
    if (dateEl) {
        dateEl.innerText = `${year}년 ${month}월 ${date}일`;
    }
    
    // 날짜를 기준으로 인덱스 선택 (7일 단위 순환)
    const dayOfYear = Math.floor((now - new Date(year, 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % quotes.length;
    
    if (quoteEl && titleEl) {
        quoteEl.innerHTML = quotes[quoteIndex].content;
        titleEl.innerText = quotes[quoteIndex].title;
    }
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
    updateDailyContent();
});
