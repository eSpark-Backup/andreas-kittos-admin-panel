import moment from "moment";


export const DateConverter = (date)=>{
    return moment(date).format('MMMM Do, YYYY')
}
export const TimeFetcher = (data)=>{
    return moment(data).format("LT")
}