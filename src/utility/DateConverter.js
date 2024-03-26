import moment from "moment";


export const DateConverter = (date)=>{
    return moment(date).format('MMMM Do, YYYY')
}
export const TimeFetcher = (data)=>{
    return moment(data).format("LT")
}

export const DateObjectConverter = (data)=>{
    return moment(data).format('YYYY-MM-DD')
}