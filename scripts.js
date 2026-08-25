const I = document.querySelector(".letter-i");
const U = document.querySelector(".letter-u");
const HEART = document.querySelector(".heart");

const LEFT_LINE = document.querySelector(".line-left");
const RIGHT_LINE = document.querySelector(".line-right");

const CIRCLE = document.querySelector(".circle");


/* =========================
   HÀM ANIMATION
========================= */

function animate(element, keyframes, duration, delay = 0) {

    return element.animate(
        keyframes,
        {
            duration: duration,
            delay: delay,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );
}


/* =========================
   RESET
========================= */

function resetAnimation() {

    I.style.opacity = "1";
    U.style.opacity = "1";
    HEART.style.opacity = "1";

    I.style.transform = "translateX(0) scale(1)";
    U.style.transform = "translateX(0) scale(1)";
    HEART.style.transform = "scale(1)";

    LEFT_LINE.style.transform = "translateX(0)";
    RIGHT_LINE.style.transform = "translateX(0)";

    CIRCLE.style.transform =
        "translate(-50%, -50%) scale(1) rotate(0deg)";
}


/* =========================
   ANIMATION CHÍNH
========================= */

function loveAnimation() {

    resetAnimation();


    /* Hai thanh trắng xuất hiện */

    animate(
        LEFT_LINE,
        [
            {
                opacity: 0,
                transform: "translateX(80px)"
            },
            {
                opacity: 1,
                transform: "translateX(0)"
            }
        ],
        800
    );

    animate(
        RIGHT_LINE,
        [
            {
                opacity: 0,
                transform: "translateX(-80px)"
            },
            {
                opacity: 1,
                transform: "translateX(0)"
            }
        ],
        800
    );


    /* Vòng tròn */

    animate(
        CIRCLE,
        [
            {
                transform:
                    "translate(-50%, -50%) scale(.6) rotate(0deg)",
                opacity: 0
            },
            {
                transform:
                    "translate(-50%, -50%) scale(1) rotate(180deg)",
                opacity: .8
            },
            {
                transform:
                    "translate(-50%, -50%) scale(.8) rotate(360deg)",
                opacity: .2
            }
        ],
        1800
    );


    /* Chữ I chuyển động */

    animate(
        I,
        [
            {
                opacity: 1,
                transform: "translateX(0) scale(1)"
            },
            {
                opacity: 0,
                transform: "translateX(-55px) scale(.6)"
            },
            {
                opacity: 1,
                transform: "translateX(0) scale(1)"
            }
        ],
        1800,
        900
    );


    /* Chữ U chuyển động */

    animate(
        U,
        [
            {
                opacity: 1,
                transform: "translateX(0) scale(1)"
            },
            {
                opacity: 0,
                transform: "translateX(55px) scale(.6)"
            },
            {
                opacity: 1,
                transform: "translateX(0) scale(1)"
            }
        ],
        1800,
        900
    );


    /* Trái tim */

    animate(
        HEART,
        [
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 1,
                transform: "scale(1.35)"
            },
            {
                opacity: 1,
                transform: "scale(.9)"
            },
            {
                opacity: 1,
                transform: "scale(1.15)"
            },
            {
                opacity: 1,
                transform: "scale(1)"
            }
        ],
        1200,
        1200
    );


    /* Chạy lại */

    setTimeout(() => {
        loveAnimation();
    }, 4200);
}


/* =========================
   CHẠY
========================= */

window.addEventListener("load", () => {
    loveAnimation();
});

