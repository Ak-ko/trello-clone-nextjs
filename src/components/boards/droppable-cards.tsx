"use client";

import { defaultDroppableCards } from "@/data/boards";
import React, { useState } from "react";
import DroppableCard from "./droppable-card";
import AddDroppableCardButton from "./add-droppable-card-button";
import { DndContext } from "@dnd-kit/core";
import { DroppableCardT } from "@/@types/board";

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
            (card: DroppableCardT) => {
                if (card.id === id) {
                    return { ...card, name };
                }
                return card;
            }
        );

        setDroppableCards(newDroppableCards || []);
    };

    const handleDrageOver = () => {
        console.log("drag over");
    };

    const handleDragEnd = () => {
        console.log("drag end");
    };

    return (
        <DndContext onDragOver={handleDrageOver} onDragEnd={handleDragEnd}>
            <div className={`flex items-start gap-4`}>
                {droppableCards.map((_dC) => (
                    <DroppableCard
                        key={_dC.id}
                        droppableCard={_dC}
                        onEdit={editDroppableCard}
                    />
                ))}

                <AddDroppableCardButton
                    onAddNewDroppableCard={addDroppableCard}
                />
            </div>
        </DndContext>
    );
}
