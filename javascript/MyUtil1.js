
function isNumber(a) {
  if ( Number.isNaN(a) ) {
    return false
  } else {
    return true
  }
}

function print_log(a) {
  console.log(a)
}
function print(a) {
  alert(a)
  print_log(a)
}
