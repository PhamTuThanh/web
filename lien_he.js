const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const subject = document.getElementById('subject')
const message = document.getElementById('message')

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Submitted successfully');
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let subjectValue = subject.value
    let messageValue = message.value

    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameEle, 'Empty value');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }
    if (messageValue == '') {
        setError(message, 'Empty value');
        isCheck = false;
    } else {
        setSuccess(message);
    }
    if (subjectValue == '') {
        setError(subject, 'Empty value');
        isCheck = false;
    } else {
        setSuccess(subject);
    }

    if (emailValue == '') {
        setError(emailEle, 'Email empty value');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email Malformed');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }


    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
