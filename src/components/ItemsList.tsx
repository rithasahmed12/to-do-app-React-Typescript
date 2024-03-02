import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Items } from "./types/utils";

type ItemsListProps = {
  items: Items[];
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
};

export const ItemList: React.FC<ItemsListProps> = ({ items, setItems }) => {
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [editedItemValue, setEditedItemValue] = useState<string>("");

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  const handleEdit = (id: string, newValue: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, title: newValue } : item
      )
    );
    setEditItemId(null);
    setEditedItemValue("");
  };

  const handleToggleDone = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center border border-slate-600 pl-2 mb-2 py-2">
          {editItemId === item.id ? (
            <Input
              type="text"
              inputValue={editedItemValue}
              setInputValue={setEditedItemValue}
            />
          ) : (
            <p style={{ textDecoration: item.done ? "line-through" : "none" }}>
              {item.title}
            </p>
          )}
          <div>
            {editItemId === item.id ? (
              <>
                <Button onClick={() => handleEdit(item.id, editedItemValue)}>Save</Button>
                <Button onClick={() => setEditItemId(null)}>Cancel</Button>
              </>
            ) : (
              <>
                <Button onClick={() => setEditItemId(item.id)}>Edit</Button>
                <Button onClick={() => handleDelete(item.id)}>
                  <img src="./src/assets/bin.png" width="16" height="16" alt="delete" />
                </Button>
              </>
            )}
            <Button onClick={() => handleToggleDone(item.id)}>
              {item.done ? "Undo" : "Done"}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};
