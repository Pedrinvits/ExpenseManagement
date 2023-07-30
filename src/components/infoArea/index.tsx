import * as C from './styles'
import { formatCurrentMonth } from '../../helpers/dateFilter' 
import { Resumeitem } from '../resumeItem'
type Props = {
    currentMonth : string;
    onMonthChange : (newMonth : string) => void;
    income : number;
    expense : number;
}
export const InfoArea  = ({ currentMonth , onMonthChange , income , expense} : Props) =>{
    // console.log(currentMonth)
    const handlePrevMonth = () => {
        const [year,month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year),parseInt(month) - 1,1)
        currentDate.setMonth(currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        const [year,month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year),parseInt(month) - 1,1)
        currentDate.setMonth(currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return (
            <C.Container>

                <C.MonthArea>
                    <C.MonthArrow onClick={handlePrevMonth}>🡨</C.MonthArrow>
                        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                    <C.MonthArrow onClick={handleNextMonth}>🡪</C.MonthArrow>
                </C.MonthArea>

                <C.ResumeArea>
                       <Resumeitem title={'Receitas'} value={income}/>
                       <Resumeitem title={'Despesas'} value={expense}/>
                       <Resumeitem title={'Balanço'} value={income - expense} color={income - expense < 0 ? 'red' : 'green'}/>
                </C.ResumeArea>
            </C.Container>
    );
}