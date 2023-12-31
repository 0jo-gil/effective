import { useState } from "react";

const useDropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const onToggle = () => {
        setIsOpen(prev => !prev);
    }

    const onSelect = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);
    }

    return {
        isOpen,
        selectedItem,
        onToggle,
        onSelect
    }
}

export default useDropdown;