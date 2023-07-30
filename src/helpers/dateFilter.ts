// Tudo relacionado a manipulação de data tem aqui
import { Item } from '../types/item';

export const getCurrentMonth  = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const FilterListByMonth = (list : Item[],date : string) : Item[]=> {
    const newlist : Item[] = [];
    const [year,month] = date.split('-');
    
    for (const i in list) {
        if ( list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() + 1 ===  parseInt(month) ) {
            newlist.push(list[i]);
        }
    }
    return newlist
}

export const formatDate = (date: Date) : string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

export const formatCurrentMonth = (currentMonth : string) : string => {
    const [year,month] = currentMonth.split('-');
    const months = ['Janeiro','Fevereiro','Março','Abriu','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return `${months[parseInt(month)-1]} de ${year}`
}
const addZeroToDate = (number : number) : string =>  number < 10 ? `0${number}` : `${number}`;

export const newDateAdjusted = (dateField: string) => {
    const [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }
