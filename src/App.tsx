import {useState, useEffect} from 'react';
import * as C from './App.styles';
import { Item } from './types/item'
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth , FilterListByMonth} from './helpers/dateFilter';
import {TableArea} from './components/TableArea'
import {InfoArea} from './components/infoArea'
import { InputArea } from './components/inputArea';
const App = () => {
  const [list, setlist] = useState(items);
  const [filteredList, setFilteredList] = useState <Item[]> ([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income,setIncome] = useState(0);
  const [expense,setExpense] = useState(0);


  useEffect(()=>{
    setFilteredList(FilterListByMonth(list,currentMonth))
  },[list,currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for ( const i in filteredList){
        if(categories[filteredList[i].category].expense){
          expenseCount += filteredList[i].value;
        }else{
          incomeCount += filteredList[i].value;
        }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)

  },[filteredList])
  const handleMonthChange = (newMonth : string) => {
      setCurrentMonth(newMonth)
  }
  const handleAddItem = (item : Item) => {
    const newList = [...list];
    newList.push(item);
    setlist(newList);
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de informacoes */}
        <InfoArea  
        onMonthChange = {handleMonthChange}
        currentMonth={currentMonth} 
        income={income}
        expense={expense}
        />
        {/* Area de insercao */}
        <InputArea onAdd={handleAddItem}/>
        {/* Tabela de itens */}
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App