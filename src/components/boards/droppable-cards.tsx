"use client";

import { defaultDroppableCards } from "@/data/boards";
import React, { useState } from "react";
import DroppableCard from "./droppable-card";
import AddDroppableCardButton from "./add-droppable-card-button";

export default function DroppableCards() {
    const [droppableCards, setDroppableCards] = useState(defaultDroppableCards);

    const addDroppableCard = (name: string) => {
        if (!name) return;

        setDroppableCards([
            ...droppableCards,
            {
                id: droppableCards[droppableCards.length - 1].id + 1,
                name,
            },
        ]);
    };

    const editDroppableCard = (id: number, name: string) => {
        if (!name) return;

        const newDroppableCards = droppableCards?.map(
            (card: { id: number; name: string }) => {
                if (card.id === id) {
                    return { ...card, name };
                }
                return card;
            }
        );

        setDroppableCards(newDroppableCards || []);
    };

    return (
        <div className={`flex items-start gap-4`}>
            {droppableCards.map((_dC) => (
                <DroppableCard
                    key={_dC.id}
                    droppableCard={_dC}
                    onEdit={editDroppableCard}
                />
            ))}

            <AddDroppableCardButton onAddNewDroppableCard={addDroppableCard} />
        </div>
    );
}
