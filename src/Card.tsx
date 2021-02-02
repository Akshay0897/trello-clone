import React from "react"
import { CardContainer } from "./styles";

interface CardProps {
    text: string
}

export const Card = ({ text }: CardProps) => {

    const [editing, setEditing] = React.useState<boolean>(false);
    const [currText, setCurrText] = React.useState<string>(text);

    return (
        <CardContainer>
            {!editing ? currText : (
                <input value={currText} onChange={(e) => setCurrText(e.currentTarget.value)}></input>
            )}
            <button onClick={() => { setEditing(!editing) }}> {editing ? "save" : "edit"} </button>
        </CardContainer>
    )
}