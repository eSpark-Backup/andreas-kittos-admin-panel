import moment from "moment";


export const DateConverter = (date)=>{
    return moment(date).format('MMMM DD, YYYY')
}
export const TimeFetcher = (data)=>{
    return moment(data).format("LT")
}

export const DateObjectConverter = (data)=>{
    return moment(data).format('YYYY-MM-DD')
}

export const DateMonthYear = (data)=>{
    return moment(data).format("DD MMMM YYYY")
}