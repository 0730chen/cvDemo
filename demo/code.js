window.dom = {
	find(string,scope){
		return (scope||document).querySelectorAll(string)
	},

	style(node,name,value){
		if(arguments.length ===3){
			//3个是设置样式
			console.log('3个值设置样式')
			node.style[name] = value
		} else if(arguments.length === 2){
			//获取name的样式
			console.log(typeof(name) === 'string')
			if(typeof(name) === 'string'){
				//如果是字符串则是获得属性值
				console.log('获取样式值')
				return node.style[name]
			}else if(name instanceof Object){
				//如果是对象则是设置值
				console.log('对象设置样式')
				for(let key in name){
					return node.style[key] = name[key]
				}
			}
		}
	},
	//遍历一个节点
	each(nodelist,fn){
		//获得node
		for(let i =0;i<nodelist.length;i++){
			fn.call(null,nodelist[i])
		}
	}
}

//test
const div = dom.find('#test>.red')[0]
console.log(div)
// dom.style(div,{'color':'blue'})//2个参数+对象
dom.style(div,'color','red')//3个参数
// dom.style(div,'color')//获取样式
// console.log(dom.style(div,'color'))
const nodelist = dom.find('.red')
console.log(nodelist) //3个节点
dom.each(nodelist,(n)=>{dom.style(n,'color','blue')}) //依次打印出获得的标签,然后设置颜色