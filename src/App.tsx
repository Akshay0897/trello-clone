import React from 'react';
import AddNewItemForm from './AddNewItemForm';
import './App.css';
import { Card } from './Card';
import { Column } from './Column';
import { AppContainer, ColumnContainer } from "./styles";

type Cards = {
  id: number,
  text: string
}

type Columns = {
  id: number,
  text: string,
  cards: Cards[]
}

const App = () => {

  const addNewColumn = (text) => {
    setColumns([...columns, { id: columns.length++, text: text, cards: [] }])
  }

  const [columns, setColumns] = React.useState<Columns[]>([
    {
      id: 0,
      text: "first task list",
      cards: [
        {
          id: 0,
          text: "here it goes"
        }
      ]
    }
  ]);

  return (
    <AppContainer>
      {
        columns.map(column => {
          return (
            <Column text={column.text} key={column.id}>
              {
                column.cards.map(card => {
                  return (<Card key={card.id} text={card.text} />)
                })
              }
            </Column>
          )
        })
      }
      <AddNewItemForm title="Add new column" onClick={addNewColumn} />
    </AppContainer>
  )
}

export default App;
