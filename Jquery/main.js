console.log(`main`);
//获取div
jQuery('.name').addClass('red')

let x = jQuery('.name').addClass('yellow').find('.children').find('.zz').end().addClass('haha').each(e=>console.log(e))

// console.log(x)
console.log(x)

//this  Jquery().addClass()  this就是jquery()选择的产生的对象