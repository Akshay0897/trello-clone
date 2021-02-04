import React, { useState } from 'react';
import { AddNewItem } from './AddNewItem';
import AddNewItemForm from './AddNewItemForm';
import { useAppState } from './AppStateContext';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles'

interface ColumnProps {
    text: string
    index: number
}

type Cards = {
    id: number,
    text: string
}

export const Column = ({ text, index }: ColumnProps) => {
    const { state } = useAppState()
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card text={task.text} key={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}