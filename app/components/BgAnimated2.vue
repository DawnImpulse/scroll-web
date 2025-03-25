<script setup lang="ts"></script>

<template>
    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<style scoped>
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffff;
    overflow: hidden;
}

.background span {
    width: 6vmin;
    height: 6vmin;
    border-radius: 6vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 40;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.background span:nth-child(0) {
    color: orange;
    top: 32%;
    left: 64%;
    animation-duration: 49s;
    animation-delay: -74s;
    transform-origin: -14vw 19vh;
    box-shadow: 12vmin 0 1.9882667862209016vmin currentColor;
}
.background span:nth-child(1) {
    color: #887dfa;
    top: 38%;
    left: 44%;
    animation-duration: 95s;
    animation-delay: -34s;
    transform-origin: 5vw -15vh;
    box-shadow: -12vmin 0 2.2840741296733085vmin currentColor;
}
.background span:nth-child(2) {
    color: #887dfa;
    top: 82%;
    left: 16%;
    animation-duration: 91s;
    animation-delay: -50s;
    transform-origin: -24vw -17vh;
    box-shadow: 12vmin 0 2.4590157083814246vmin currentColor;
}
.background span:nth-child(3) {
    color: #887dfa;
    top: 23%;
    left: 57%;
    animation-duration: 44s;
    animation-delay: -14s;
    transform-origin: 17vw -1vh;
    box-shadow: -12vmin 0 1.8286408147722863vmin currentColor;
}
.background span:nth-child(4) {
    color: #887dfa;
    top: 14%;
    left: 66%;
    animation-duration: 60s;
    animation-delay: -30s;
    transform-origin: -2vw 1vh;
    box-shadow: 12vmin 0 1.6958557088723347vmin currentColor;
}
.background span:nth-child(5) {
    color: green;
    top: 94%;
    left: 6%;
    animation-duration: 101s;
    animation-delay: -72s;
    transform-origin: 12vw 12vh;
    box-shadow: -12vmin 0 2.355974896560739vmin currentColor;
}
.background span:nth-child(6) {
    color: green;
    top: 4%;
    left: 28%;
    animation-duration: 80s;
    animation-delay: -97s;
    transform-origin: -21vw 10vh;
    box-shadow: 12vmin 0 1.803518645387334vmin currentColor;
}
.background span:nth-child(7) {
    color: #b41d26;
    top: 4%;
    left: 53%;
    animation-duration: 67s;
    animation-delay: -20s;
    transform-origin: 0vw 16vh;
    box-shadow: -12vmin 0 2.024506951348638vmin currentColor;
}
.background span:nth-child(8) {
    color: #b41d26;
    top: 38%;
    left: 78%;
    animation-duration: 41s;
    animation-delay: -90s;
    transform-origin: -18vw -15vh;
    box-shadow: 12vmin 0 1.7421963424133933vmin currentColor;
}
.background span:nth-child(9) {
    color: #887dfa;
    top: 41%;
    left: 89%;
    animation-duration: 44s;
    animation-delay: -78s;
    transform-origin: -21vw -4vh;
    box-shadow: -12vmin 0 1.6437126830840798vmin currentColor;
}
.background span:nth-child(10) {
    color: green;
    top: 44%;
    left: 21%;
    animation-duration: 90s;
    animation-delay: -95s;
    transform-origin: -18vw 16vh;
    box-shadow: -12vmin 0 1.582360741133961vmin currentColor;
}
.background span:nth-child(11) {
    color: orange;
    top: 38%;
    left: 90%;
    animation-duration: 71s;
    animation-delay: -6s;
    transform-origin: 11vw 16vh;
    box-shadow: 12vmin 0 2.4882569942578248vmin currentColor;
}
.background span:nth-child(12) {
    color: #887dfa;
    top: 50%;
    left: 62%;
    animation-duration: 60s;
    animation-delay: -22s;
    transform-origin: -4vw 9vh;
    box-shadow: -12vmin 0 2.0971972182266168vmin currentColor;
}
.background span:nth-child(13) {
    color: dodgerblue;
    top: 29%;
    left: 75%;
    animation-duration: 83s;
    animation-delay: -85s;
    transform-origin: -21vw 25vh;
    box-shadow: 12vmin 0 1.6724152272137283vmin currentColor;
}
.background span:nth-child(14) {
    color: dodgerblue;
    top: 86%;
    left: 98%;
    animation-duration: 23s;
    animation-delay: -42s;
    transform-origin: -24vw -5vh;
    box-shadow: -12vmin 0 1.8917572512481453vmin currentColor;
}
.background span:nth-child(15) {
    color: green;
    top: 72%;
    left: 51%;
    animation-duration: 9s;
    animation-delay: -2s;
    transform-origin: 10vw -23vh;
    box-shadow: 12vmin 0 2.2998985622131993vmin currentColor;
}
.background span:nth-child(16) {
    color: dodgerblue;
    top: 10%;
    left: 82%;
    animation-duration: 23s;
    animation-delay: -55s;
    transform-origin: -21vw 5vh;
    box-shadow: -12vmin 0 1.5874329348090983vmin currentColor;
}
.background span:nth-child(17) {
    color: #887dfa;
    top: 15%;
    left: 26%;
    animation-duration: 8s;
    animation-delay: -35s;
    transform-origin: 9vw 16vh;
    box-shadow: -12vmin 0 2.0636348673523406vmin currentColor;
}
.background span:nth-child(18) {
    color: dodgerblue;
    top: 28%;
    left: 61%;
    animation-duration: 89s;
    animation-delay: -65s;
    transform-origin: -17vw -11vh;
    box-shadow: 12vmin 0 2.038162221759902vmin currentColor;
}
.background span:nth-child(19) {
    color: orange;
    top: 68%;
    left: 29%;
    animation-duration: 43s;
    animation-delay: -60s;
    transform-origin: 4vw 12vh;
    box-shadow: -12vmin 0 2.086509434527002vmin currentColor;
}
.background span:nth-child(20) {
    color: orange;
    top: 32%;
    left: 71%;
    animation-duration: 54s;
    animation-delay: -34s;
    transform-origin: 11vw -4vh;
    box-shadow: 12vmin 0 1.699630846365959vmin currentColor;
}
.background span:nth-child(21) {
    color: #b41d26;
    top: 75%;
    left: 90%;
    animation-duration: 37s;
    animation-delay: -19s;
    transform-origin: 9vw -9vh;
    box-shadow: 12vmin 0 1.870977002191714vmin currentColor;
}
</style>
