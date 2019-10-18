console.log('对写成的函数进行测试')
let div  = dom.create('<p>2</p>') 
let p = dom.create('<div><div>1</div></div>')
let test = document.querySelector('.test')
let test2 = dom.create('<div title="test">我是测试</div>')
let test3 = dom.create('<h3>添加后面</h3>')
let a = dom.before(test,div)
// console.log('a',a)
console.log(typeof(div))  //他是一个对象，所以每次使用都是对象地址，
dom.after(test,test2)
dom.append(test,test3)
//参数为3是设置，参数为2是获取
dom.attr(test3,'title','haha')
// console.log(dom.attr(test3,'title'))
// console.log(dom.text(test2))//一个参数是获取，两个参数是设置
//第二个参数 对象则是设置 
dom.style(test,{'border':'1px solid black'})
dom.Class.Add(test,'hah')
let fn = ()=>{
	console.log('点击了')
}
dom.Event.on(test,'click',fn)
console.log(dom.find('.test')[0]) //返回的是一个数组，然后需要取第一个
// dom.Event.remove(test,'click',fn)
dom.each(p,(n)=>{console.log('2')})
let red = dom.find('#test>.red')[0]
dom.style(red,'color','red')