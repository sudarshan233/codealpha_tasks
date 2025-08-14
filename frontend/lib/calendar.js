
export const getCalendar = (month = new Date().getMonth(), year = new Date().getFullYear()) => {
    var d = new Date();
    const array = [];
    let startValue = d.getDate();
    let endValue = getEndDate(month, year);

    var remaining = 7 - (7 - new Date(year, month - 1, getEndDate(month - 1)).getDay());
    console.log(remaining);
    console.log(getEndDate(month));

    for(let i = getEndDate(d.getMonth()) - remaining; i <= getEndDate(d.getMonth(), d.getFullYear()); i++) {
        console.log(i);
        array.push(i);
    }
    for(let i = 1; i < startValue; i++) {
        array.push(i);
    }
    for(let i = startValue; i <= endValue; i++) {
        array.push(i);
    }

    remaining = 42 - array.length;
    for(let i = 1; i <= remaining; i++) {
        if(remaining === 0) break;
        array.push(i);
    }
    return array;
}

const getEndDate = (month, year) => {
    switch (month + 1) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;

        case 4: case 6: case 9: case 11 :
            return 30;

        case 2 : {
            if(year % 4 === 0)
                return 29;
            else
                return 28;
        }
    }
}

getCalendar();