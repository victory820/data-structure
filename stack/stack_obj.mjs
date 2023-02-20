class Stack {
  constructor() {
    this.count = 0
    this.obj = {}
  }
  // 进栈
  push(element) {
    this.obj[this.count] = element
    this.count++
  }
  // 出栈
  pop() {
    if (this.isEmpty()) return undefined
    const r = this.obj[this.count - 1]
    delete this.obj[this.count - 1]
    // 删除后再更改下标，如果删除不成功不更改下标
    this.count--
    return r
  }
  // 取出栈首元素
  peek() {
    if (this.isEmpty()) return undefined
    return this.obj[this.count - 1]
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  clear() {
    this.count = 0
    this.obj = {}
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let str = `${this.obj[0]}`
    for (let i = 1; i < this.count; i++) {
      str = `${str}, ${this.obj[i]}`
    }
    return str
  }
}

// 测试
const s = new Stack()
s.push('zs')
s.push('ls')
s.push('ww')

console.log(s.toString())

console.log(s.isEmpty())

// 取出栈头部元素
const getFirst = s.pop()
console.log(getFirst)
console.log(s.toString())

// 查看栈头部元素
const touElement = s.peek()
console.log(touElement)
console.log(s.toString())

// 清理栈
s.clear()
console.log(s.toString())
