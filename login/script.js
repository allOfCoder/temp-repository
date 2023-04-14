const loginButton = document.querySelector('#loginButton');
const signupIdInput = document.querySelector('.id');
const signupPwInput = document.querySelector('.pw');
const signupPwCheckInput = document.querySelector('.pw-check');
const signupStudentNumberInput = document.querySelector('.student-number');
const signupMajor = document.querySelector('.major');
const signupButton = document.querySelector('.signup');
const signupCancelButton = document.querySelector('.cancel');
const signupPhoneNumberInput = document.querySelector('.phone-number');

if (loginButton) {
    loginButton.addEventListener('click', (e) => {
        var id = e.target.parentNode.childNodes[1].childNodes[1].value;
        var pw = e.target.parentNode.childNodes[1].childNodes[3].value;
        if (id == '' || pw == '') {
            alert('id, pw를 입력해주세요.');
        }
    });
    //로그인버튼을 누르면 아이디 비번에 문자 있는 것 확인하고 없으면 alert
}

if (signupButton) {
    function formatCheck(inputDocument, format) {
        var format = format;
        var formatRight;
        inputDocument.addEventListener('focus', (e) => {
            formatRight = true;
        });
        inputDocument.addEventListener('blur', (e) => {
            var value = e.target.value;
            var exceptValue = signupPwInput.value;
            if (!format) {
                if (value != exceptValue) {
                    formatRight = false;
                }
            } else {
                if (!value.match(format)) {
                    formatRight = false;
                }
            }
            if (formatRight) {
                inputDocument.style.border = '1px solid black';
            } else {
                inputDocument.style.border = '1px solid red';
            }
        })
    }//형식에 맞지 않으면 border가 빨갛게 되도록 하는 함수
    function handleOnInput(e, maxlength) {
        var value = e.target.value;
        if (isNaN(value[value.length-1])) {
            e.target.value = value.substring(0, value.length - 1);
        }
        if (value.length > maxlength)  {
            e.target.value = value.substr(0, maxlength);
        }
    }//학번에 숫자만 들어가게 하고 maxlength자로 제한하는 함수
    function checkMajor(e) {
        if (e.target.value.match(new RegExp('....136...'))) {
            signupMajor.innerHTML = '컴퓨터공학부';
        } else if (e.target.value.match(new RegExp('....120...'))) {
            signupMajor.innerHTML = '기계공학부';
        }
    }//학번을 보고 학부를 major에 추가하는 함수
    function checkPhoneNember (e) {
        var phoneNumber = e.target.value;
        e.target.value = String(phoneNumber).replace(/(^01.{1})([0-9]{4})([0-9]+)/, '$1-$2-$3');
    }//전화번호를 형식에 맞게 바꿔주는 함수

    formatCheck(signupIdInput, new RegExp('.@.'));
    formatCheck(signupPwInput, new RegExp('........'));
    formatCheck(signupPwCheckInput, null);//정규식 파라미터자리에 null을 넣으면 비밀번호 확인하는 함수
    formatCheck(signupStudentNumberInput, new RegExp('20........'));
    signupStudentNumberInput.addEventListener('keyup', (e) => {handleOnInput(e, 10)});
    signupStudentNumberInput.addEventListener('change', (e) => {checkMajor(e)});
    signupPhoneNumberInput.addEventListener('keyup', (e) => {handleOnInput(e, 13)});
    signupPhoneNumberInput.addEventListener('blur', (e) => {checkPhoneNember(e)});

    // signupButton.addEventListener('click', (e) => {
    //     var canSignup = {
    //         0: signupIdInput.style.borderBottomColor == 'black',
    //         1: signupPwInput.style.borderBottomColor == 'black',
    //         2: signupPwCheckInput.style.borderBottomColor == 'black',
    //         3: signupStudentNumberInput.style.borderBottomColor == 'black'
    //     };
    //     for (var i = 0; i < canSignup.length; i++) {
    //         if (!canSignup.i) {
    //             console.log(!canSignup.i)
    //             alert('필수항목을 작성해주세요.');
    //             return;
    //         } else {
    //             if (i == canSignup.length-1) {
    //                 alert('회원가입이 완료되었습니다.');
    //             }
    //         }
    //     }//회원가입 성공 메시지 함수
    //     //키 비활 활성 기능 필요
    // });
    signupCancelButton.addEventListener('click', (e) => {
        location.href = 'index.html';
    });
}