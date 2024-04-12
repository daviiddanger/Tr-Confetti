const confettifull = function (el){
    this.el = el;
    this.containerEl = null;

    this.confettiFrequency = 3;
    this.confettiColors = ["#FCE18A","#FF726D","#B48DEF","#F4306D"];
    this.confettiAnimations = ["slow","medium","fast"];

    this._setupElements();
    this._renderConfetti();
};

confettifull.prototype._setupElements = function (){
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;

    if(elPosition !== "relative" || elPosition !== "absolute"){
        this.el.style.position = "relative";
    }

    containerEl.classList.add("confetti-container");

    this.el.appendChild(containerEl);
    this.containerEl = containerEl;
};

confettifull.prototype._renderConfetti = function (){
    this.confettiInterval = setInterval(()=>{
        const confettiEl = document.createElement("div");
        const confettiSize = Math.floor(Math.random()*3)+ 7+ "px";
        const ConfettiBackground = this.confettiColors[
            Math.floor(Math.random()* this.confettiColors.length)
        ];

        const confettiLeft = Math.floor(Math.random()*
    this.el.offsetWidth)+"px";
    const confettiAnimation = this.confettiAnimations[
        Math.floor(Math.random()* this.confettiAnimations.length)
    ]

        confettiEl.classList.add(
            "confetti","confetti--animation-" + confettiAnimation
        );

        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = ConfettiBackground;

        confettiEl.removeTimeout = setTimeout(function(){
            confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);
        
        this.containerEl.appendChild(confettiEl);
    },25);
};

window.confettifull = new confettifull(document.querySelector(".js-container"));