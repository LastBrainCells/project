function isValidDateYMD(s){
    const reDate = /^\d{4}-\d{2}-\d{2}$/;
    return reDate.test(s);
}

console.log(isValidDateYMD("2026-02-18"));
console.log(isValidDateYMD("18-02-2026"));
console.log(isValidDateYMD(" "));

function isValidTitle(s){
    const reTitle = /[<>{};]/;
    return !reTitle.test(s);
}

console.log(isValidTitle("Hello!"));
console.log(isValidTitle("Hell<>"));
console.log(isValidTitle("Hello;"));

function extractIds(text){
    return text.match(/\d+/g);
}

console.log(extractIds("id=5; id=12; id=30"));

function normalizeSpaces(s){
    return s.replace(/\s+/g, " ").trim();
}

console.log(normalizeSpaces(" A B\t\tC "));

function validateRequired(value, fieldName){
    
}