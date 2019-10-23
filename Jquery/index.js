console.log(`index`)
//是一个对象
//全局函数
//jquery是一个函数，函数中返回一个可以操作选择标签进行操作的对象

//重载函数，根据参数类型判断
//1.字符串则是选择器
//2.如果是数组，则返回这个数组
window.jQuery =function(str){
	let Element
	if(typeof(str)==='string'){
		Element = document.querySelectorAll(str)
	}else{
		Element = str
	}
	// console.log('我是Jquery')
	// const Element = document.querySelectorAll(str)
	//这个return是jquery返回的
	//使用闭包保持element存活
	//返回的对象是jquery对象
	return  {
		oldApi:str.oldApi,//需要在oldapi上也要有oldapi
		//添加class名操作 
		//遍历所有获取的元素进行操作
		//this是调用时候调用
		addClass(className){
			for(let i =0;i<Element.length;i++){
				Element[i].classList.add(className)
			}
			return this //链式操作的原理
		},
		//1.使用一个空数组，然后在Jquery对象的基础上在进行选择，然后将得到的数据添加到空数组中，然后返回
		//find里面的this是Jquery初始选择对象，
		//我们的需求是，继续操作获得的find返回后的内容
		//此时不能返回this
		find(selector){
			let arr = []
			for (let i = 0; i < Element.length; i++) {
				//在jquery选择基础上在选择
				arr = arr.concat(Array.from(Element[i].querySelectorAll(selector)))

			}
			//不能更改elements 因为会互相影响
			// Element =  arr
			//返回一个jquery对象
			//返回一个jquery对象，继续进行链式操作
			//之前的数据放上去
			arr.oldApi = this//当前的api
			console.log('find的arr对象',arr)
			return jQuery(arr)
		},

		//存在操作find操作后，要想在之前的Jquery对象上进行操作
		
		//实现end操作返回上一个对象
		//实现遍历
		end(){
			console.log(this)
			return this.oldApi
		},
		each(fn){
			for(let i = 0;i<Element.length;i++){
				fn.call('null',Element[i])
			}
		},
		//实现parent方法，获得父节点
		parent(){
			arr = []
			Element.each(e=>{
				//如果不存在则push
				if(arr.indexOf((e.parentNode)=== -1)){
					arr.push(e)
				}
			})
			return jQuery(arr)
		},
		//获得子节点
		children(){}


	}
	//返回可以操作元素的一个api对象

}