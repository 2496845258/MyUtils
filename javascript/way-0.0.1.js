/**
 * ��ӡ����
 * @param e
 */
function myprint(e) {
    console.log(e);
    alert(e);
}

/**
 * �ж��ǲ�������
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
 * ��ѯ���� �Ƿ���ڸ�Ԫ�� ���ڷ����±�
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