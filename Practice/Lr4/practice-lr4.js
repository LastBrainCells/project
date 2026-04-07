function isValidDateYMD(s){
    const reDate = /^\d{4}-\d{2}-\d{2}$/;
    return reDate.test(s);
}

console.log(isValidDateYMD("2026-02-18"));
console.log(isValidDateYMD("18-02-2026"));
console.log(isValidDateYMD(" "));

function isValidTitle(s){
    const reTitle = /[<>{};]/;
    return reTitle.test(s);
}

console.log(isValidTitle("Hello!"));
console.log(isValidTitle("Hell<>"));
console.log(isValidTitle("Hello;"));