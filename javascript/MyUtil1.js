
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
function myprint(a) {
  alert(a)
  print_log(a)
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
