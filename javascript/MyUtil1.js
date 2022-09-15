
function isNumber(a) {
  if ( Number.isNaN(a) ) {
    return false
  } else {
    return true
  }
}
function print_Text(msg) {
  document.write(msg)
}
function print_Text_ln(msg) {
  print_Text(msg + '<br/>')
}
function print_Html_Css(name, msg) {
  document.querySelector(name).innerHTML = msg
}

function print_log(a) {
  console.log(a)
}
function myPrint(a) {
  console.log(a)
  alert(a)
}

function myGetNode(namem) {
  return document.querySelector(name)
}

function myGetNodes(name) {
  return document.querySelectorAll(name)
}


//单击
function myMouseClickOne(a, b) {
  a.addEventListener('click', b)
  return a
}

//双击
function myMouseClickTwo(a, b) {
  a.addEventListener('dblclick', b)
  return a
}

//长按
function myMouseClickLast(a, b) {
  a.addEventListener('mousedown', b)
  return a
}

//移入（true表示子集也触发）
function myMouseEnter(a, b, c) {
  if ( null == b || false === c ) {
    //子集不触发
    a.addEventListener('mouseenter', b)
  } else {
    //子集触发
    a.addEventListener('mouseover', b)
  }
  return a
}

//鼠标移出
function myMouseOut(a, b, c) {
  if ( null == b || false === c ) {
    //子集不触发
    a.addEventListener('mouseleave', b)
  } else {
    //子集触发
    a.addEventListener('mouseout', b)
  }
  return a
}

//内容改变事件
function myChange(a, b) {
  a.addEventListener('change', b)
  return a
}


//键盘按下
function myKeyBoardDown(a, b) {
  a.addEventListener('keydown', b)
  return a
}

//按键释放
function myKeyBoardUp(a, b) {
  a.addEventListener('keyup', b)
  return a
}

//获取外部样式表的方式
function myGetStyle(a, b) {
  if ( null != b ) {
    return document.defaultView.getComputedStyle(a, b)
  } else {
    return document.defaultView.getComputedStyle(a)
  }
}

//定义一个类
class MyList {
  arr = []
  constructor() {
  }
  add(obj) {
    arr.push(obj)
  }
  get(index) {
    return arr[index]
  }
  getList() {
    return arr;
  }
  remove_1() {
    return arr.pop();
  }
  remove_2(index) {
    return arr.splice(index, index+1)
  }

  clear() {
    arr = []
  }
  size() {
    return arr.length;
  }

  insert(index, obj) {
    return arr.splice(index, 0, obj)
  }
}
