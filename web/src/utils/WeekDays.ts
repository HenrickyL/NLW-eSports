interface WeekDay{
    id: string;
    label: string;
    title: string
}
export const createWeekDays = ()=>{
    let week = ['Domingo', 'Segunda', 'Terça','Quarta','Quinta', 'Sexta', 'Sábado']
    return week.map<WeekDay>((day,i)=>(
        {
            id:`${i}`,
            label: day[0],
            title:day
        }
    ))
}
export const WeekDays = createWeekDays()
// [
//     {
//         id:0,
//         label: 'D',
//         title:'Domingo'
//     },
//     {
//         id:1,
//         label: 'S',
//         title:'Segunda'
//     },
//     {
//         id:2,
//         label: 'T',
//         title:'Terça'
//     },
//     {
//         id:3,
//         label: 'Q',
//         title:'Quarta'
//     },
//     {
//         id:4,
//         label: 'Q',
//         title:'Quinta'
//     },
//     {
//         id:5,
//         label: 'S',
//         title:'Sexta'
//     },
//     {
//         id:6,
//         label: 'S',
//         title:'Sábado'
//     }
// ]