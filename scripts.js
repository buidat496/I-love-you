const I = document.querySelector(".i");
const LOVE = document.querySelector(".love-word");
const HEART = document.querySelector(".heart");
const YOU = document.querySelector(".you-word");
const U = document.querySelector(".u");

const LEFT = document.querySelector(".bar-left");
const RIGHT = document.querySelector(".bar-right");


/* =====================================
   THỜI GIAN
===================================== */

const move = 1000;
const boom = 200;


/* =====================================
   HÀM ANIMATION
===================================== */

function animate(element, keyframes, duration, delay = 0) {

    return element.animate(
        keyframes,
        {
            duration,
            delay,
            easing: "cubic-bezier(.4,0,.2,1)",
            fill: "forwards"
        }
    );
}


/* =====================================
   RESET
===================================== */

function reset() {

    I.style.cssText = "";
    LOVE.style.cssText = "";
    HEART.style.cssText = "";
    YOU.style.cssText = "";
    U.style.cssText = "";

    LEFT.style.cssText = "";
    RIGHT.style.cssText = "";

    I.className = "i";
    LOVE.className = "love-word";
    HEART.className = "heart";
    YOU.className = "you-word";
    U.className = "u";
}


/* =====================================
   I LOVE YOU
===================================== */

function showFullLove() {

    I.style.opacity = "1";
    LOVE.style.opacity = "1";
    YOU.style.opacity = "1";

    HEART.style.opacity = "0";
    U.style.opacity = "0";

    LOVE.style.width = "auto";
    YOU.style.width = "auto";
}


/* =====================================
   I ❤️ YOU
===================================== */

function makeHeartYou() {

    /* LOVE biến mất */

    animate(
        LOVE,
        [
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 0,
                transform: "scale(.2)"
            }
        ],
        move
    );

    /* Tim xuất hiện */

    animate(
        HEART,
        [
            {
                opacity: 0,
                transform: "scale(.2)"
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
        move,
        150
    );
}


/* =====================================
   I ❤️ U
===================================== */

function makeHeartU() {

    /* YOU biến mất */

    animate(
        YOU,
        [
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 0,
                transform: "scale(.25)"
            }
        ],
        move
    );

    /* U xuất hiện */

    U.style.width = "35px";

    animate(
        U,
        [
            {
                opacity: 0,
                transform: "scale(.2)"
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
        move,
        150
    );
}


/* =====================================
   TIM THU NHỎ
===================================== */

function shrinkHeart() {

    animate(
        I,
        [
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 0,
                transform: "scale(.2)"
            }
        ],
        700
    );

    animate(
        U,
        [
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 0,
                transform: "scale(.2)"
            }
        ],
        700
    );

    animate(
        HEART,
        [
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 1,
                transform: "scale(.25)"
            }
        ],
        700
    );
}


/* =====================================
   HIỆN LẠI
===================================== */

function restore() {

    reset();

    showFullLove();

    LEFT.style.opacity = "1";
    RIGHT.style.opacity = "1";

    animate(
        I,
        [
            {
                opacity: 0,
                transform: "scale(.2)"
            },
            {
                opacity: 1,
                transform: "scale(1)"
            }
        ],
        700
    );

    animate(
        LOVE,
        [
            {
                opacity: 0,
                transform: "scale(.2)"
            },
            {
                opacity: 1,
                transform: "scale(1)"
            }
        ],
        700,
        100
    );

    animate(
        YOU,
        [
            {
                opacity: 0,
                transform: "scale(.2)"
            },
            {
                opacity: 1,
                transform: "scale(1)"
            }
        ],
        700,
        200
    );
}


/* =====================================
   CHẠY VÒNG LẶP
===================================== */

async function startLove() {

    reset();

    showFullLove();

    await new Promise(
        resolve => setTimeout(resolve, 900)
    );


    /* I LOVE YOU
       ↓
       I ❤️ YOU
    */

    makeHeartYou();

    await new Promise(
        resolve => setTimeout(resolve, 1200)
    );


    /* I ❤️ YOU
       ↓
       I ❤️ U
    */

    makeHeartU();

    await new Promise(
        resolve => setTimeout(resolve, 1200)
    );


    /* I ❤️ U
       ↓
       ♥ nhỏ
    */

    shrinkHeart();

    await new Promise(
        resolve => setTimeout(resolve, 900)
    );


    /* ♥
       ↓
       I LOVE YOU
    */

    restore();

    await new Promise(
        resolve => setTimeout(resolve, 1500)
    );


    startLove();
}


window.addEventListener(
    "load",
    startLove
);
