import React, { useState } from 'react';
import AddNewItemForm from './AddNewItemForm';
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

    const [cards, setCards] = useState<Cards[]>([]);

    const addCard = (addText) => {
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
                <AddNewItemForm title="add new card" onClick={addCard} />   
            </div>
        </ColumnContainer>
    )
}