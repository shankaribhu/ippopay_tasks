var passwordValidation = function(password) {
    let minLength = 6;
    let maxLength = 20;
    let maxRepeat = 2;
    
    const regval = new RegExp(`(.)\\1{0,${maxRepeat}}(?=\\1{${maxRepeat}})`, 'g');
    const modify_password = (password.match(regval) || []).map(s => s.length).sort((a, b) => b - a);
    
    let min_pass_len = minLength - password.length;
    let lowercase_letter = !/[a-z]/.test(password);
    let uppercase_letter = !/[A-Z]/.test(password);
    let digit_char = !/[0-9]/.test(password);
    let sum = lowercase_letter + uppercase_letter + digit_char;
    const numChanges = Math.max(modify_password.length, sum);
    let max_pass_len = Math.max(0, password.length - maxLength);
    const retval = Math.max(min_pass_len, numChanges + max_pass_len);
    return retval;
};

let password = ['a','aA1','1337C0d3']

const check_password = password.map(items => {
    console.log(passwordValidation(items))
})