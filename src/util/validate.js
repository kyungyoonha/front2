export const validateSignUp = (userData) => {
    const { userId, password, passwordConfirm, checkbox, content } = userData;
    const errors = {};
    // Validate user [Id]
    if (isEmpty(userId)) {
        errors.userId = "아이디를 작성해주세요.";
    }

    if (password !== passwordConfirm) {
        errors.password = "비밀번호가 서로 불일치합니다.";
    }

    // Validate user [Password]
    if (isEmpty(password)) {
        errors.password = "비밀번호를 작성해주세요.";
    }

    if (isEmpty(passwordConfirm)) {
        errors.passwordConfirm = "비밀번호 확인을 작성해주세요.";
    }

    if (!checkRegPassword(password)) {
        errors.password =
            "영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.";
    }

    if (password.length < 12) {
        errors.password = "비밀번호는 12자리 이상 작성해주세요.";
    }

    // 체크박스 하나이상
    if (Object.keys(checkbox).length === 0) {
        errors.checkbox = "취미를 하나 이상 선택해주세요.";
    }

    // 컨텐츠 20자 이상
    if (content.length < 20) {
        errors.content = "20자 이상 입력해주세요.";
    } else if (content.length > 300) {
        errors.content = "300자 이하로 입력해주세요.";
    }

    // 에러가 있으면 false 에러 없으면 true
    if (Object.keys(errors).length > 0) return { valid: false, errors };
    else return { valid: true, errors };
};

export const validateLogin = (userData) => {
    const { userId, password } = userData;
    const errors = {};

    if (isEmpty(userId)) {
        errors.userId = "아이디를 작성해주세요.";
    }

    if (isEmpty(password)) {
        errors.password = "패스워드를 입력해주세요.";
    }

    // 에러가 있으면 false 에러 없으면 true
    if (Object.keys(errors).length > 0) return { valid: false, errors };
    else return { valid: true, errors };
};

export const isEmpty = (string) => {
    if (string.trim() === "") return true;
    else return false;
};

// 아이디 => 10자 이상, 숫자/영어/특수문자를 모두 포함
export const checkRegId = (id) => {
    var reg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/;

    if (!reg.test(id)) {
        return false;
    } else {
        return true;
    }
};

// 비밀번호 => 12자 이상 숫자/영어/특수문자 중 2개
export const checkRegPassword = (password) => {
    var num = password.search(/[0-9]/g);
    var eng = password.search(/[a-z]/gi);
    var spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
        return false;
    } else {
        return true;
    }
};
