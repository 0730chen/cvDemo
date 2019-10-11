// console.log(`haha`)
//     //实现队列
// let queen = []
// let temp = 0
// let createQueen = document.querySelector('.create')
// let callQueen = document.querySelector('.call')
// let nowQueen = document.querySelector('.now')
// let call = document.querySelector('#call')
// createQueen.addEventListener('click', function() {
//     temp += 1
//     queen.push(temp)
//     nowQueen.innerHTML = queen
// })
// callQueen.addEventListener('click', function() {
//         queen.shift() //弹出第一个， pop弹出末尾数据
//         nowQueen.innerHTML = queen
//         if (queen[0] === undefined) { return }
//         call.innerHTML = queen[0]
//     })
//队列是数组形式的数据，提供了两个api push和shift，先进先出

//栈，也是一组数组形式数据结构，，提供了两个api push和pop


//linkList链表实现
let linkList = {
        data: 10,
        next: null
    }
    //创建节点
const createNode = value => {
        return {
            data: value,
            next: null
        }
    }
    //创建链表
const createList = value => {
    return createNode(value)
}

const list = createList(10)
const list2 = createList(20)
    //1.增加节点
const appendList = (linkList, value) => {
        //根据传入的值创建一个节点
        const node = createNode(value)
            //记录当前节点 
        let x = linkList
            //循环链表，直到最后一个为null
            // console.log(x)
            // console.log(x === linkList)
            // console.log(x.next)
            //当x的next不为null，则表示不是最后一个节点，让x指向它的下一个节点
            //循环操作，当x.next存在则，x = x.next 直到x.next为null
        while (x.next) {
            // console.log('----')
            // console.log(x)
            // console.log(x.next)
            x = x.next
        }
        x.next = node
        return node
            //x.next === null是最后一个节点
    }
    /*2.删除节点
     原理是要删除哪一个节点，就将它的前一个节点的next与后一个节点连接起来
     */
const remove = (linkList, node) => {
        //判断，删除的节点是链表的第几个节点，找到要删除的节点，将前一个节点的next连接到后一个节点上
        // 后一个节点是node.next
        let x = linkList //第一个节点是101
        let p = null
            //
        while (x !== node) {
            //遍历操作，判断从第一个节点开始判断x，x.next,x.next.next是否和要删除的node节点相等，相等则跳出循环
            console.log(x)
            console.log(node)
            p = x //p指向了101
            x = x.next //x指向了101.next 假设是第二个202
        }
        p.next = x.next //101.next指向了202.next ，所以202就不存在了

        // if (linkList === node) {
        //     console.log('要删除第一个节点')
        //     console.log(`${linkList}`, `${node}`)
        //     linkList = node.next
        // } else {
        //     if (linkList.next === node) {
        //         console.log('要删除第二个节点')
        //         console.log(`${linkList}`, `${node}`)
        //         linkList.next = node.next
        //     } else {
        //         if (linkList.next.next === node) {
        //             console.log('删除第三个节点')
        //             linkList.next.next = node.next
        //         }
        //     }
        // }
    }
    // const node1 = appendList(list, 30) //第二个节点
    // const node2 = appendList(list, 40) //第三个节点
    // const node3 = appendList(list, 50) //第四个节点
    // console.log(node1, node2, node3)
    // remove(list, node2)
    // console.log(list)



//树结构
//初始化树
const createTreeNode = (value) => {
    return {
        data: value,
        parent: null,
        children: null
    }
}
const createTree = value => {
        return createTreeNode(value)
    }
    //给节点添加数据
const addChild = (node, value) => {
        //添加新节点
        const newNode = {
            data: value,
            children: null,
            parent: node
        }
        node.children = node.children || []
        node.children.push(newNode)
        return newNode
    }
    //遍历节点，先遍历一个分支的子节点
const travel = (tree, fn) => {
        //当最后一个tree.children不存在
        console.log(tree.data)
        fn(tree)
            //最后一个节点时跳出
        if (!tree.children) {
            return
        }
        // fn(tree)
        for (let i = 0; i < tree.children.length; i++) {
            //遍历根节点的子节点
            travel(tree.children[i], fn)
        }
    }
    //查找节点 当节点与需要查找的相同时，返回本身，子节点存在则递归遍历子节点
const find = (tree, node) => {
    //如果查找的节点与本身相同则返回本身
    if (tree === node) {
        return tree
    } else if (tree.children) {
        //循环递归查询树结构，如果存在node则返回node，不存在则返回undefined
        for (let i = 0; i < tree.children.length; i++) {
            const result = find(tree.children[i], node)
            if (result) {

                return result
            }
        }
        return undefined
    } else {
        return undefined
    }
}

//删除指定节点
const removeNode = (tree, node) => {
    const siblings = node.parent.children //查找到删除节点的同级节点
    let index = 0; //记录查找到node的索引值
    console.log(siblings)
        //循环遍历同级节点查找node
    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === node) {
            index = i
        }
    }
    siblings.splice(index, 1) //数组删除方法，删除一个数据
}
let tree1 = createTree(10)
const node2 = addChild(tree1, 20)
const node3 = addChild(node2, 30)
const node4 = addChild(node3, 50)
const node5 = addChild(tree1, 10)
    // const node3 = addChild(tree1, 30)
    // const node4 = addChild(node2, 40)
    // console.log(tree1, node2, node3)
console.log(tree1)
    //将函数当做参数传入，更灵活
travel(tree1, (node) => {
        console.log(node) //此时node就相当于tree
    })
    // const find1 = find(tree1, node3)
console.log(tree1)
    // const removeTree = removeNode(tree1, node2)
    // travel(tree1, (node) => {
    //     console.log(node)
    //     console.log(node.data)
    // })