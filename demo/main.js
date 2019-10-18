console.log('我准备手写Jquery')

//对象化
window.dom = {
	//创建一个节点 document.createElement
	//创建一个div包裹这个多节点内容 
	//使用一个div包裹住标签内容，将字符串添加到div中，就会变成标签
	//template存放任意元素  但是不能通过children来获得子元素 使用content。firstchildren获得子元素


	//传入一个标签，创建这个传入的标签
	create:function(tag){
		let container = document.createElement('template')
		container.innerHTML = tag.trim()//转换空格
		return container.content.firstChild
	},
	
	//after 在后面新增一个节点
	//传入旧节点和需要新增的节点 nextSibling是紧跟node2的剩余节点
	//现在只有 nodeinsertbefore(新节点，参考节点) ,增加一个节点，就是找到他父节点，nextSibling属性返回一个紧跟node之后的一个节点，然后使用insertBefore插入这个之前
	//新增一个弟弟
	after:function(node,node2){
		// console.log(node.parentNode,node.nextSibling)
		let newNode = node.parentNode.insertBefore(node2, node.nextSibling);
		return newNode
	},
	//操作之前插入和之后插入，都是需要在父节点上插入
	//新增一个哥哥
	before:function(node,node2){
		let newNode = node.parentNode.insertBefore(node2,node)
		return newNode
	},
	//新增一个子节点
	append:function(parent,node){
		let newNode = parent.appendChild(node)
		return newNode
	},
	//在两个标签中添加一个标签
	wrap:function(node,parent){
		dom.before(node,parent)//将parent放到node前面
		dom.append(parent,node)//然后在将node放到paret里面  这样parent就是一个父节点了

	},
	//删除一个节点
	//找到他的父节点，然后父节点删除子节点
	remove(node){
		let newNode = node.parent.removeChildren(node)
		return node
	},
	//删除节点所有儿子
	empt(node){
		let array = []//获取删除全部的标签
		const {childrenNode} =node
		x = node.firstChild
		while (x) {
			let removeNode = dom.remove(node,firstChild)
			arr.push(removeNode)
			x = node.firstChild
		}
	return array //返回所有移除的对象 
	},
	//改 attribute缩写  使用setAttribute
	//根据参数个数，写不同的代码功能，则是重载
	attr(node,name,value){
		//想设置
		if(arguments.length ===3){
		return node.setAttribute(name,value)
		}else if(arguments.length ===2){
			return node.getAttribute(name)
		}
	},
	//修改给定标签的文本内容
	//获取和设置
	text(node,string){

		if(arguments.length ===1){
			return node.innerHTML
		}//这是获取
		if(arguments.length===2){//则s是设置s
		//适配网页
		console.log('innerHTML' in node)
		let flag = ('innerHTML' in node)
		//使用？ ：表达式 ，如果只有两种条件判断的
		return flag?node.innerHTML = string: node.textContent = string
		}
		// node.innerHTML = string  //IE的方法
		// node.textContent = string
	},
	//改style
	//遍历对象key，给node传递
	style(node,name,value){
		if(arguments.length ===3){
			//要写
			node.style[name] = value
		}else if(arguments.length ===2){
			//要获取
			//判断第二个参数的类型
			if(typeof(name) === String){
				return node.string[name]
			}else if(name instanceof Object){
				for(let key in name){
					node.style[key] = name[key]
				}
			}
		}
	},
	//添加一个class名
	Class:{
		//增加一个class
		Add(node,className){
		return node.classList.add(className)
	},
	remove(node,className){
		return node.classList.remove(className)
	},
	has(node,className){
		return node.className.contains(className)
	}
	},
	Event:{
		//添加事件
		on(node,eventName,fn){
			node.addEventListener(eventName,fn)
		},
		//移除事件
		remove(node,eventName,fn){
			console.log('移除绑定事件')
			node.removeEventListener(eventName,fn)
		}
	},
	find(string,scope){
		//判断 如果scope存在则scope.query 否则document.query
		return (scope||document).querySelectorAll(string)
	},
	parent(node){
		return node.parentNode;
	},
	chidlren(node){
		return node.children
	},
	silbing(node){
		//转成正常数组格式
		//返回兄弟节点
		return Array.form(node.parentNode.children).fitter(n =>n !==node)
	},
	//获取下一个节点
	next(node){
		let x = node.nextSibling
		//x存在或者x.nodeType ===3 是文本
		while(x && x.nodeType===3){
			x =x.nextSibling
		}
		return x 
	},
	//找上一个节点
	previous(node){
		let x = node.prev
		//如果存在则再往前
		while (x && x.nodeType ===3) {
			x = x.prev
		}
		return x 
	},
	//遍历节点
	//给一个节点列表
	each(nodelist,fn){
		for(let i =0;i<nodelist.length;i++){
			fn.call(null,nodelist[i])
		}
	},
	//查找node的位置
	index(node){
		const list = dom.children(node.parent)
		//遍历这个列表
		let index = 0
		for(let i= 0;i<list.length;i++){
			if(list[i]===node){
				index = i
			}
		}
		return index
	}


}

//对页面元素的增删改查