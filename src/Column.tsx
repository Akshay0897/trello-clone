import React, { useState } from 'react';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles'

interface ColumnProps {
    text: string
}

type Cards = {
    id: number,
    text: string
}

export const Column = ({
    text,
    children
}: React.PropsWithChildren<ColumnProps>) => {

    const [isOpen, setisOpen] = React.useState(false);
    const [addText, setaddText] = React.useState("");
    const [cards, setCards] = useState<Cards[]>([]);

    const addCard = () => {
        setCards([...cards, { id: cards.length++, text: addText }]);
    }

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            { children}
            {
                cards.map(card => <Card key={card.id} text={card.text} />)
            }
            <div>
                {
                    isOpen ? (
                        <div>
                            <input placeholder="type here..." id="add" value={addText} onChange={(e) => setaddText(e.currentTarget.value)}></input>
                            <button type="button" disabled={addText.length > 0 ? false : true} onClick={() => addCard()}>Add to List</button>
                            <button type="button" onClick={() => setisOpen(!isOpen)}> X </button>
                        </div>
                    )
                        :
                        <button type="button" onClick={() => setisOpen(!isOpen)}> Add </button>
                }
            </div>
        </ColumnContainer>
    )
}