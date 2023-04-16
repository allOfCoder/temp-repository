const $container = document.querySelector('.container');
const $digit = document.querySelector('.digit');
const $numberInput = document.querySelector('.number-input');
const $numberInputButton = document.querySelector('.number-input-button');
const $tbody = document.querySelector('.tbody');

for (let i = 0; i < 3; i++) {
    let newDigitButton = document.createElement('button');
    newDigitButton.classList.add('digit-button');
    newDigitButton.textContent = `${i+3}자리`;
    $digit.appendChild(newDigitButton);
}//자릿수 버튼 생성
for (let i = 0; i < 9; i++) {
    let newInningTr = document.createElement('tr');
    let newInningTd
    for (let i = 0; i < 3; i++) {
        newInningTd = document.createElement('th');
        newInningTr.appendChild(newInningTd);
    }
    newInningTr.childNodes[0].innerHTML = `${i+1}`;
    $tbody.appendChild(newInningTr);
}//테이블 생성

function lotteryHomerunNumber() {
    let randNumArr = Math.floor(100000000000 * Math.random()).toString().split('');
    let randNoDupArr = [...new Set(randNumArr)]
    homerunNumberArr = randNoDupArr.splice(0, nowDigit);
    tryCount = 0;
    console.log("정답은", homerunNumberArr.join(''));
}//정답 숫자를 추첨

function getIndex(element) {
    console.log(element.parentNode.childNodes);
    for(var i = 0; i < element.parentNode.childNodes.length; i++) {
        if (element.parentNode.childNodes[i+1] === element) {
            return i+3;
        }
    }
}

function handleDigitButton(e) {
    nowDigit = getIndex(e.target);
    e.target.parentNode.childNodes.forEach(element => {
        if (element.classList && element.classList.contains('active')) {
            element.classList.remove('active')
        }
    });
    e.target.classList.add('active');
    inputValueNumbers = e.target.value;
    lotteryHomerunNumber();
}//자릿수 버튼 이용 시 함수

function handleOnInput(e, maxlength) {
    var value = e.target.value;
    if (isNaN(value[value.length-1])) {
        e.target.value = value.substring(0, value.length - 1);
    }
    if (value.length > maxlength)  {
        e.target.value = value.substr(0, maxlength);
    }
}//숫자 입력 칸 문자 금지, 자릿수 제한

function handleNumbers(tryNumbers) {
    var logNumber = tryNumbers;
    if (logNumber.length != nowDigit) {
        alert(`${nowDigit}자를 입력해주세요!`);
        return;
    }
    $numberInput.value = null;
    var ballNum = 0;
    var strikeNum = 0;
    var compareNum = tryNumbers.toString().split('');
    for (var i = 0; i < nowDigit; i++) {
        for (var j = 0; j < nowDigit; j++) {
            if (homerunNumberArr[i] == compareNum[j]) {
                ballNum++;
            }
        }
        if (homerunNumberArr[i] == compareNum[i]) {
            strikeNum++;
        }
    }
    ballNum = ballNum - strikeNum;
    var logResult = `B: ${ballNum}, S: ${strikeNum}`;
    $tbody.childNodes[tryCount].childNodes[1].innerHTML = logNumber;
    $tbody.childNodes[tryCount].childNodes[2].innerHTML = logResult;
    if (strikeNum == nowDigit) {
        alert('축하드립니다!');
    }
    tryCount++;
}//입력 누를 시 숫자 시도

let nowDigit = 3;
$digit.childNodes[(nowDigit-3)*2+1].classList.add('active');
let inputValueNumbers;
let homerunNumberArr;
let tryCount;
lotteryHomerunNumber();

for (let i = 0; i < 3; i++) {
    $digit.childNodes[i+1].addEventListener('click', (e) => {handleDigitButton(e)});
}

$numberInput.addEventListener('keyup' , (e) => {
    inputValueNumbers = e.target.value;
    handleOnInput(e, nowDigit);
});

$numberInput.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        handleNumbers(inputValueNumbers);
    }
}); 

$numberInputButton.addEventListener('click', (e) => {
    handleNumbers(inputValueNumbers);
});
