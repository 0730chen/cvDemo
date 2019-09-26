let num = 0
let html = document.getElementById('html')
let style = document.getElementById('css')
let string = `/*我是一名新人,请多多关照
我换了一个行
新的一行我是一个空格
我的前面是一个空格*/
#html{
    color : red;
}
/*创建一个*/
#div1{
    width:200px;
    height:200px;
    border:1px solid black;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    background: linear-gradient(90deg, rgba(2,1,18,1) 50%, rgba(255,255,255,1) 50%);
}
/*创建两个灵珠*/
#div1::before{
    position:absolute;
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    top:0;
    transform:translate(-50%);
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 12%, rgba(254,253,253,1) 12%);
}
#div1::after{
    position:absolute;
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    bottom:0;
    transform:translate(-50%);
    background: black;
    background: radial-gradient(circle, rgba(254,253,253,1) 12%, rgba(0,0,0,1) 12%);
   }
`;
let string2 = ""

function setp() {
    setTimeout(() => {
        //num-1问题,确定num的范围string.length=67
        // if (num < string.length - 1) {
        //     num += 1
        //     setp()
        // }
        //如果碰到回车符号编码为10号，则使用字符串replace替换回车为HTML换行<br>
        //replace替换使用会产生bug 在页面上显示时会出现一个<标签符号 原因是代码将<br>当做4个字符解析，解析完成后换行
        // if (string[num] === "\n") {
        //     console.log('一个回车')
        //     console.log(string[num])
        //     string = string.replace(string[num], '<br>')
        //     console.log(string)
        // }
        //使用空字符串，每次遇到换行时拼接一个<br>给字符串
        //vscode中一个tab是	->箭头标志，而空格是一个点
        if (string[num] === '\n') {
            string2 += "<br>"
        } else if (string[num] === ' ') {
            //处理缩进
            string2 += "&nbsp;"
        } else {
            string2 += string[num]
        }
        html.innerHTML = string2
            //css代码直接将添加注释在字符串中，css会自动忽略注释的内容
        style.innerHTML = string.substring(0, num)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 10000) //为了适配手机向下滚动
            //先给HTML赋值然后在判断num的值，
        if (num < string.length - 1) {
            num += 1
            setp()
        }
    }, 0);
}
setp()