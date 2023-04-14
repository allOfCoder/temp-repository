const $3dgt = document.querySelector('#dgt3');
const $4dgt = document.querySelector('#dgt4');
const $5dgt = document.querySelector('#dgt5');
const digits = [$3dgt, $4dgt, $5dgt];
const $numberInput = document.querySelector('.number-input');
const $numberInputButton = document.querySelector('.number-input-button');
const $table = document.querySelector('.table');
const $nth1tr = document.querySelector('.nth1tr');
const $nth2tr = document.querySelector('.nth2tr');
const $nth3tr = document.querySelector('.nth3tr');
const $nth4tr = document.querySelector('.nth4tr');
const $nth5tr = document.querySelector('.nth5tr');
const $nth6tr = document.querySelector('.nth6tr');
const $nth7tr = document.querySelector('.nth7tr');
const $nth8tr = document.querySelector('.nth8tr');
const nthtrs = [$nth1tr, $nth2tr, $nth3tr, $nth4tr, $nth5tr, $nth6tr, $nth7tr, $nth8tr]


let nowDigit = 3;
$3dgt.addEventListener('click', (e) => {
        nowDigit = 3;
        digits[0].classList.add('active');
        digits[1].classList.remove('active');
        digits[2].classList.remove('active');
})
$4dgt.addEventListener('click', (e) => {
        nowDigit = 4;
        digits[0].classList.remove('active');
        digits[1].classList.add('active');
        digits[2].classList.remove('active');
})
$5dgt.addEventListener('click', (e) => {
        nowDigit = 5;
        digits[0].classList.remove('active');
        digits[1].classList.remove('active');
        digits[2].classList.add('active');
})


let numbers;
let randNum = Math.floor(10000000000 * Math.random()).toString().split('');
let randNoDup = [...new Set(randNum)]
let homerunNumber = [];
for (let i = 0; i < nowDigit; i++) {
        homerunNumber.push(randNoDup[i]);
}
let tryCount = 0;
console.log(homerunNumber);

function handleOnInput(e, maxlength) {
        var value = e.target.value;
        if (isNaN(value[value.length-1])) {
                e.target.value = value.substring(0, value.length - 1);
        }
        if (value.length > maxlength)  {
                e.target.value = value.substr(0, maxlength);
        }
}
let a =['1', '2', '3', '4', '5']
let b =['3', '4', '5']

function handleNumbers(numbers) {
        var logNumber = numbers;
        var ballNum = 0;
        var strikeNum = 0;
        var compareNum = numbers.toString().split('');
        for (var i = 0; i < nowDigit; i++) {
                for (var j = 0; j < nowDigit; j++) {
                        if (homerunNumber[i].match(compareNum[j])) {
                                ballNum++;
                        }
                }
                if (compareNum[i] === homerunNumber[i]) {
                        strikeNum++;
                }
        }
        if (strikeNum) {
                ballNum = ballNum - strikeNum;
        }
        var logResult = `B: ${ballNum}, S: ${strikeNum}`;
        nthtrs[tryCount].childNodes[3].innerHTML = logNumber;
        nthtrs[tryCount].childNodes[5].innerHTML = logResult;
        if (strikeNum == 3) {
                alert('축하드립니다!');
        }
        tryCount++;
}

$numberInput.addEventListener('keyup', (e) => {
        numbers = e.target.value;
        handleOnInput(e, nowDigit);
});//자릿수 제한

$numberInputButton.addEventListener('click', (e) => {
        handleNumbers(numbers);
})
