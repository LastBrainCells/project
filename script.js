const isWorking = true;
console.log(isWorking);

const output = document.getElementById('output');

const bid = [
    {id: 1, title: "Телевизор", value: 1600,    status: "Done", createdAt: "2026-02-22"},
    {id: 2, title: "Телефон",   value: 200,     status: "Done", createdAt: "2026-03-02"},
    {id: 3, title: "Ноутбук",   value: 1000,    status: "New",  createdAt: "2026-03-04"},
    {id: 4, title: "Планшет",   value: 800,     status: "New",  createdAt: "2026-03-05"},
    {id: 5, title: "Компьютер", value: 2400,    status: "New",  createdAt: "2026-03-12"},
    {id: 6, title: "Монитор",   value: 600,     status: "New",  createdAt: "2026-03-20"},
];

const btnAll = document.getElementById('btnAll');
const btnNew = document.getElementById('btnNew');
const btnStats = document.getElementById('btnStats');

btnAll.addEventListener('click', function() {
    const appName = 'Список заявок';

    output.textContent = `${appName}\n`;

    for (let i = 0; i < bid.length; i++){
        output.textContent += JSON.stringify(bid[i], null, 1);
    }
});

btnNew.addEventListener('click', function() {
    const appName = 'Новые заявки';

    output.textContent = `${appName}\n`;
    for (let i = 0; i < bid.length; i++){
        if(bid[i].status === "New"){
            output.textContent += JSON.stringify(bid[i], null, 1);
        }
    }
});

btnStats.addEventListener('click', function() {
    const appName = 'Статистика';
    
    let bidCount = bid.length;
    let sum = 0;
    let newCount = 0;
    for (let i = 0; i < bid.length; i++){
        sum += bid[i].value;
    }
    for (let i = 0; i < bid.length; i++){
        if(bid[i].status === "New"){
            newCount++;
        }
    }
    output.textContent = `${appName}\nДанные корректны: true
Всего заявок: ${bidCount}\nОбщая сумма: ${sum}\nМаксимальное значение: 
Кол-во новых заявок: ${newCount}\n`;
});
