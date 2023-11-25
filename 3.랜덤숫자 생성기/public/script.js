function getinteger() {//함수실행
    const minint = document.getElementById('min')//입력된 칸에서 input이라는 변수로 받아옴
    const maxint = document.getElementById('max')
    const min1 = parseInt(minint.value)
    const max1 = parseInt(maxint.value)//input변수 를 username내에 문자로 변환한뒤 저장
    if(minint.value.length == 0 || maxint.value.length == 0  || min1 > max1){//만약 username 변수의 문자열 길이가 0일경우
        window.alert('정상적인 값을 입력해주세요')//경고
    }
    else{
        const integer = document.getElementById('integer')
        function greeting() {
            const test = getRandomInt(min1, max1+1)
            console.log(test)
            integer.innerText = test
          }
        setTimeout(greeting, 50);
        setTimeout(greeting, 100);
        setTimeout(greeting, 150);
        setTimeout(greeting, 200);
        setTimeout(greeting, 250);
        setTimeout(greeting, 300);
        setTimeout(greeting, 350);
        setTimeout(greeting, 400);
        setTimeout(greeting, 450);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}