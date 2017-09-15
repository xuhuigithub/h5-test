# h5-test
just practice

> 行内标签无法设置高度、宽度、外边距、内边距
> 块级标签可以设置


JavaScript
----
可参考：http://www.cnblogs.com/wupeiqi/articles/5602773.html

常用方法及常识：
为什么加分号，生产环境js全部都是一行加分号好断句
```js
	//定时器,第一个参数是代码（也可以是函数），第二个参数是间隔，单位是毫秒
	// setInterval("alert(123);",5000)
	// console.log 打印在浏览器console中的东西
	
	document.getElementById('demo_txt').innerText = "hehe"
	//"hehe"
	//修改元素的值

	/* 
	数组for循环时循环的是数组中的索引
	可以用以下写法，获得数组中的元素
	a = [9,21,3,4,5]
	for(var i in a){
	    console.log(a[i])
	}

	字典for循环时循环的是字典中的key值
	可以用以下写法，获得字典中的value值
	for(var i in a){
	    console.log(a[i])
	}

	//i++ 写法
	for(var i=0;i<10;i++){
	    console.log(i)
	}

	//if 判断语句
	if(条件){
	}else if(条件){
	
	}else if(条件){

	}else{

	}

	==
	//值相等则返回true
	!=
	//值不相等则返回true

	===
	//值和类型都相等才返回true
	!==
	//值和类型都不相等则返回true

	&& JavaScript中的and符号
	|| JavaScript中的or符号

	try {
	    JSON.stringify(demo_)
	}catch(ReferenceError){
	    console.log('hehe')
	}finally{
		console.log('haha')
	}
	//捕捉异常
	
	//switch 语句
	switch(name){
        case '1':
            age = 123;
            break;
        case '2':
            age = 456;
            break;
            //不加break,default项也会执行
        default :
            age = 777;
    }

   	//while循环
   	while(条件){
    // break;
    // continue;
	}
	*/
```


JQuery
----
参考地址：http://jquery.cuishifeng.cn/index.html
如何选择JQuery版本：
	- 版本1	兼容性好	（推荐1版本的最新版）
	- 版本2 	2版本以后忽略IE低版本
	- 版本3	功能齐全
引入JQuery就相当于Python import加载模块
引入JQuery后 <script></script>中的$就等于JQuery"模块"

JQuery对象和Dom对象之间的互转
	JQuery转换为Dom对象：	$('#id')[0]
	Dom对象转换为JQuery对象：	$(document.getElementById('#id'))

局部变量与全局变量
	在function外部var定义的变量称为全局变量,function 内部 var定义的变量被称为局部变量,普通情况下在function 中不使用var定义变量则视为全局变量
	局部变量不能被删除，而全局变量可以

序列化
---
	将字符串解析成json对象
	JSON.parse(str)
	
	将任何对象解析成字符串
	JSON.stringfy(li)
