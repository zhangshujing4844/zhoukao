class LetGo{
    constructor() {
        this.btn = document.querySelector('.btn');
        // this.index = 0;
        this.distance = document.querySelector('#num li').offsetHeight;
        this.num1 = document.querySelector('.num1');
        this.num2 = document.querySelector('.num2');
        this.num3 = document.querySelector('.num3');
        console.log(this.distance);
        // this.height1=[-549,-668,-786,-904,1377,-1495,-1614][this.RNum1];//在这里随机
        // this.height2=[-1377,-1495,-1614,-430,-549,-668,-786,-904][this.RNum2];
        // this.height3=[-1377,-1495,-668,-786,-904,-1614,-430,-549][this.RNum3];
    }

    go(RNum1,RNum2,RNum3) {
        var that = this;
        console.log(RNum1,RNum2,RNum3);
        setTimeout(function() {
            console.log(RNum1,that.num1);
            that.num1.style.transition = "all 3s linear";
            that.num1.style.transform = `translateY(${(-that.distance * RNum1)- 20}px)`;
        },100)
        setTimeout(function() {
            that.num2.style.transition = "all 3s linear";
            that.num2.style.transform = `translateY(${(-that.distance * RNum2) - 20}px)`;
        },500)
        setTimeout(function() {
            that.num3.style.transition = "all 3s linear";
            that.num3.style.transform = `translateY(${(-that.distance * RNum3) - 20}px)`;
        },900)
    }

    click() {
        var that = this;
        
        this.btn.onclick = () => {
            const RNum1 = parseInt(Math.random()*10);//随机数
            const RNum2 = parseInt(Math.random()*10);
            const RNum3 = parseInt(Math.random()*10);
            that.go(RNum1,RNum2,RNum3);
        }
    }
}

let go = new LetGo();
go.click();