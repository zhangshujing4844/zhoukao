
class Gashapon {
    constructor() {
        this.btn = document.querySelector('.word');
        console.log(this.btn);
        this.img = document.querySelectorAll('#one img');
        this.index = 6;
        this.timer = "";
        this.count = 0;
        this.change = document.querySelector('.change');
        this.position = document.querySelector('.position');
    }

    run(rand){
        var that = this;
        this.index++;
        this.img.forEach(() => {
            if(this.index > this.img.length - 1) {
                this.index = 0;
            }
            this.img.forEach((val,i) => {
                if(this.index == i)  {
                    val.className = "active";
                } else{
                    this.img[i].className = "";
                }
            })
        })
        this.count++;
        // console.log(this.count);
        if(this.count === 5 || this.count === 45) {
            clearInterval(this.timer);
            this.timer = setInterval(function() {
                that.run(rand);
            },200)
        }

        if(this.count === 10 || this.count === 30) {
            clearInterval(this.timer);
            this.timer = setInterval(function() {
                that.run(rand);
            },100)
        }

        if(this.count === 15) {
            clearInterval(this.timer);
            this.timer = setInterval(function() {
                that.run(rand);
            },50)
        }

        if(this.count === rand) {
            clearInterval(this.timer);
            this.count = 0;
            this.index = 6;
        }

    }

    click() {
        var that = this;
        this.btn.onclick = () => {
            this.change.src = "./image/dan2.gif";
            this.position.style.transition = "all 1s linear";
            this.position.style.transform =  `translateX(${120}px)`;
            this.position.style.opacity = "0";
            let rand = Math.floor(Math.random() *8 + 50);
            this.timer = setInterval(function() {
                that.run(rand);
            },300)
            
            setTimeout(function() {
                console.log(1);
                that.change.src = "./image/dan.png";
                that.position.style.transition = "all linear";
                that.position.style.transform = `translateX(${-80}px)`;
                that.position.style.opacity = "1";
            
            },1000)
            
           
        }
        
    }
}

let gashapon = new Gashapon();
gashapon.click();