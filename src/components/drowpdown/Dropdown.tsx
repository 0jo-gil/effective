'use client';

// dropdown basic component
import { useState } from "react";
import Trigger from "@/components/drowpdown/Trigger";
import DropdownMenu from "@/components/drowpdown/DropdownMenu";
import useDropdown from "./useDropdown";
import DropdownOptions from "./DropdownOptions";

const Dropdown = ({
    children
}: {
    children: React.ReactNode
}) => {
    // dropdown menu 디스플레이 상태
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    // dropdown menu 선택된 아이템
    // const [selectedItem, setSelectedItem] = useState<string | null>(null);

    // const {
    //     isOpen,
    //     selectedItem,
    //     onToggle,
    //     onSelect
    // } = useDropdown();

    return (
        <div className={'dropdown'}>
            {/* <Trigger
                label={selectedItem ? selectedItem : 'Select an option'}
                onClick={onToggle}
            />

            {isOpen && <DropdownMenu items={['options', 'edit', 'delete']} onItemClick={onSelect} />} */}
            <div>{children}</div>
        </div>
    )
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Option = DropdownOptions;

export default Dropdown;
