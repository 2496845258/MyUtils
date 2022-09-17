/**
 * 打印方法
 * @param e
 */
function myprint(e) {
    console.log(e);
    alert(e);
}

/**
 * 判断是不是数字
 * @param e
 * @returns {boolean}
 */
function judgenum(e){
    if (isNaN(e)){
       return false;
    }else {
        return true;
    }
}

/**
 * 查询集中 是否存在该元素 存在返回下标
 * @param arr
 * @param e
 * @returns {number}
 */
function findindex(arr,e) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == e){
            return i;
        }
    }
    return -1;
}