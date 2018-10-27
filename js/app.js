(function (window,Vue) {
	var arr = [
		{
			id: 1,
			content: 'abc',
			isFinish: true
		},
		{
			id: 2,
			content: 'abc',
			isFinish: false
		}
	]
	new Vue({
		el: '#app',
		data:{
			dataList:arr,
			newTodo: ''
		},
		methods:{
			addTodo(){
				// 非空验证
				if(!this.newTodo.trim())return
				this.dataList.push({
					content: this.newTodo.trim(),
					isFinish: false,
					id: this.dataList.length ? this.dataList.sort((a,b)=>a.id-b.id)[this.dataList
					.length-1]['id'] + 1 : 1
				})
				// 清空文本框
				this.newTodo = ''
			},
			delTodo(index){
				this.dataList.splice(index, 1)
			},
			// 删除所有
			// delAll(){
			// 	this.dataList = 
			// }
		},
		// 自定义属性
		directives:{
			focus:{
				inserted(el){
					el.focus()
				}
			}
		}

	})
})(window, Vue);
/*
		1. 自己准备一个数组
		2. 在 data 中把数组添加进去
		3. section 和 footer 两个区域是显示或者不显示
		  - 数组的 length === 0 不显示
		4. 根据数组渲染页面
			- v-for
		5. 每一个 li 里面的 input 和 label 不联动
			- v-model
		6. 自定义属性
			- directive
			- 自动获取光标
		7. 添加一个 todo
			- 只要向数组中添加一条数据就可以了（对象）
			- content: input 狂输入的内容
			- isFinish: false
			- id: 如果没有 length =》 id = 1
						如果有 length =》 id 最大的那一项，拿出 id + 1
						先排序，拿到最后一项的 id + 1
		8. 持久化存储
			- 添加一个 要存
			- 删除一个 要存
			- isFinish 改变 要存
			- content 改变 要存
			- 只要数组有变化，数组里面的每一项有变化都要存
			- watch  开启深度监听  deep: true
		9. 渲染一个数字（有多少个正在活动着的 todo）
			- 需要计算一下 dataList 这个数组里面有多少个 isFinish === fasle
		10. 全选按钮的显示与隐藏
			- 显示：dataList 里面至少有一个 isFinish 为 true
			- 隐藏：dataList 里面全都是 false
			- 如果 activeNum === dataList.length 说明每一个都是 false  隐藏
			- 否则显示
		11. 删除一个 todo
			- 最合理应该是拿到 id
			- 渲染是 id 和 index 配套的
			- 可以使用 index 来删除
		12. 删除所有isFinish 为 true 的 todo
			- 遍历数组，把每一个 isFinish 为 true 的删除
			- 剩余的是，dataList 里面应该只有 isFinish 为 false
			- 筛选出所有 isFinish 为 false 的新数组重新赋值给 dataList
		13. 全选反选
			- 全选按钮的显示问题
			- 在每一个 是否完成按钮上改变的时候就要去遍历一下数组，看看是否全是 true
			- 点击全选按钮了
			- 通过 v-model 来绑定 toggleAll 属性
			- 然后根据改变的行为去吃法，把dataList 里面的每一项改变
			- 导致 toggleAll 这个计算属性的被计算项改变而重新计算
	*/