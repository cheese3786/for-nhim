const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question")
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you too!";
    gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXVhdGQ5cWNrazlnNTNvZ3NldDRkM3Zzc3huODVoc2pyMnprYjQyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
});

noBtn.addEventListener('moseover', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})