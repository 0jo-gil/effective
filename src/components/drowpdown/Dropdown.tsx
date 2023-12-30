'use client';

// dropdown basic component
import {useState} from "react";
import Trigger from "@/components/drowpdown/Trigger";
import DropdownMenu from "@/components/drowpdown/DropdownMenu";

const Dropdown = () => {
    // dropdown menu 디스플레이 상태
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // dropdown menu 선택된 아이템
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className={'dropdown'}>
            <Trigger
                label={selectedItem ? selectedItem : 'Select an option'}
                onClick={() => setIsOpen(prev => !prev)}
            />

            {isOpen && <DropdownMenu items={['options', 'edit', 'delete']} onItemClick={setSelectedItem}/>}
        </div>
    )
}
export default Dropdown;
