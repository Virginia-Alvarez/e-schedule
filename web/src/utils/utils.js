export function getFormatedDate(today = new Date()) {
    return today.getDate()  + "/" + (today.getMonth()+1) + "/" + today.getFullYear()
}

function getFirstDayofTheWeek() {
    const d = new Date();
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:1);
    return new Date(d.setDate(diff));
  }

export function getCurrentWeek(){
    let day = getFirstDayofTheWeek();
    let week = [];

    for(let i = 0; i < 7; i++){
        week.push(getFormatedDate(day));
        day.setDate(day.getDate() + 1);
    }

    return week;
}