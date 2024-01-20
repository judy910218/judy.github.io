// Just place a "_" at the end of the cms string.


tailwind.config = {
  theme: {
    extend: {
      colors: {
        hunterGreen: '#2A5030',
      }
    }
  }
}
    
const title = document.querySelector('.title')
  
let splitTitle = new SplitText(title, { type: "lines, words",  wordsClass: "word", linesClass: "line overflow-hidden" });


var tl = gsap.timeline({delay: 1});

tl.from(title.querySelectorAll('.line .word'), {
  duration: 1.8,
  delay: 0.01,
  skewY: 7,
  stagger: 0.1,
  yPercent: 100,
  ease: "expo.inOut",
  onComplete: () => {
    gsap.timeline({repeat: -1})
      .to(title.querySelector('.cursor-blink'), 0.75, {autoAlpha: 1})
      .to(title.querySelector('.cursor-blink'), 0.75, {autoAlpha: 0})
  }
})


let lastWord = document.querySelectorAll('.word')[document.querySelectorAll('.word').length - 1]

lastWord.innerHTML = lastWord.innerText.replace(/_/g, "<span class='cursor-blink'></span>");
console.log(lastWord)