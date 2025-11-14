// 네비게이션 토글
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// 네비게이션 링크 클릭 시 메뉴 닫기
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// 스크롤 시 네비게이션 배경 변경
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, observerOptions);

// 관찰할 요소들
document
    .querySelectorAll(".service-card, .portfolio-item, .stat-item")
    .forEach((el) => {
        el.classList.add("scroll-reveal");
        observer.observe(el);
    });

// 포트폴리오 아이템 클릭 효과 - 이미지 모달
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// 포트폴리오 아이템 클릭 시 모달 열기
document.querySelectorAll(".portfolio-item").forEach((item) => {
    item.addEventListener("click", (e) => {
        // 이미지 요소 찾기
        const img = item.querySelector(".portfolio-image img");
        if (img && imageModal && modalImage) {
            // 모달 이미지 소스 설정
            modalImage.src = img.src;
            modalImage.alt = img.alt;

            // 모달 표시
            imageModal.classList.add("active");

            // body 스크롤 방지
            document.body.style.overflow = "hidden";
        }
    });
});

// X 버튼 클릭 시 모달 닫기
if (closeModal) {
    closeModal.addEventListener("click", () => {
        if (imageModal) {
            imageModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

// 오버레이 클릭 시 모달 닫기
if (imageModal) {
    imageModal.addEventListener("click", (e) => {
        // modal-overlay나 image-modal 자체를 클릭했을 때만 닫기
        if (
            e.target === imageModal ||
            e.target.classList.contains("modal-overlay")
        ) {
            imageModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

// ESC 키로 모달 닫기
document.addEventListener("keydown", (e) => {
    if (
        e.key === "Escape" &&
        imageModal &&
        imageModal.classList.contains("active")
    ) {
        imageModal.classList.remove("active");
        document.body.style.overflow = "";
    }
});

// // 페이지 로드 시 히어로 애니메이션
// window.addEventListener("load", () => {
//     const heroElements = document.querySelectorAll(".hero-content > *");
//     heroElements.forEach((el, index) => {
//         setTimeout(() => {
//             el.style.opacity = "1";
//             el.style.transform = "translateY(0)";
//         }, index * 200);
//     });

//     // 파티클 효과 시작
//     createParticles();
// });

// 스크롤 진행률 표시 (선택사항)
window.addEventListener("scroll", () => {
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // 필요시 진행률 바를 추가할 수 있습니다
});

// 숫자 카운터 애니메이션
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent =
                Math.floor(start) +
                (element.textContent.includes("%") ? "%" : "+");
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent =
                target + (element.textContent.includes("%") ? "%" : "+");
        }
    };

    updateCounter();
};

// // 파티클 효과 생성
// function createParticles() {
//     const hero = document.querySelector(".hero");
//     const particlesContainer = document.createElement("div");
//     particlesContainer.className = "particles";
//     particlesContainer.style.cssText = `
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         pointer-events: none;
//         z-index: 1;
//     `;

//     hero.appendChild(particlesContainer);

//     // 30개의 파티클 생성
//     for (let i = 0; i < 30; i++) {
//         createParticle(particlesContainer);
//     }
// }

function createParticle(container) {
    const particle = document.createElement("div");
    const size = Math.random() * 5 + 2;
    const x = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
        border-radius: 50%;
        left: ${x}%;
        bottom: -20px;
        animation: float-up ${duration}s linear ${delay}s infinite;
        box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.5);
    `;

    container.appendChild(particle);
}

// 파티클 애니메이션 CSS 추가
const style = document.createElement("style");
style.textContent = `
    @keyframes float-up {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${
                Math.random() * 100 - 50
            }px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 마우스 따라다니는 그라디언트 효과
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.body.style.setProperty("--mouse-x", `${x}%`);
    document.body.style.setProperty("--mouse-y", `${y}%`);
});

// 서비스 카드 3D 효과
document.querySelectorAll(".service-card, .portfolio-item").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

// 스크롤 진행률 바 추가
const progressBar = document.createElement("div");
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, #8b7355, #c9a961, #9caf88);
    z-index: 9999;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px rgba(201, 169, 97, 0.4);
`;
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});

// 섹션 제목에 반짝이는 효과
document.querySelectorAll(".section-title").forEach((title) => {
    const sparkle = document.createElement("span");
    sparkle.textContent = "✨";
    sparkle.style.cssText = `
        position: absolute;
        right: -30px;
        top: 0;
        animation: sparkle 2s infinite;
        font-size: 1.2rem;
    `;
    title.style.position = "relative";
    title.appendChild(sparkle);
});

const sparkleStyle = document.createElement("style");
sparkleStyle.textContent = `
    @keyframes sparkle {
        0%, 100% { 
            opacity: 0; 
            transform: scale(0.5) rotate(0deg);
        }
        50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// FAQ 아코디언 기능
document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        // 현재 아이템이 활성화되어 있는지 확인
        const isActive = item.classList.contains("active");

        // 모든 FAQ 아이템 닫기
        document.querySelectorAll(".faq-item").forEach((faq) => {
            faq.classList.remove("active");
        });

        // 클릭한 아이템이 비활성화 상태였다면 활성화
        if (!isActive) {
            item.classList.add("active");
        }
    });
});
// 로딩 화면 제거
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");

    // 최소 2초 동안 로딩 화면 표시
    setTimeout(() => {
        loadingScreen.classList.add("fade-out");

        // 페이드아웃 완료 후 요소 제거
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 800);
    }, 2000);
});
