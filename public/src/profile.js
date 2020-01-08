const profile = new Vue({
    el: '#profile',
    data: {
        getAge: this.calcAge(),
    }
});

function calcAge() {
    const birthday; //生年月日
    const getToday = new Date();
    const getYear = getToday.getFullYear().toString().padStart(4, '0');
    const getMonth = (getToday.getMonth() + 1).toString().padStart(2, '0');
    const getDate = getToday.getDate().toString().padStart(2, '0');
    let adder = getYear + getMonth + getDate;
    let calc = Math.floor((Number(adder) - birthday) / 10000);
    console.log(calc);
    return calc;
}