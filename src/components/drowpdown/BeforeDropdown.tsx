'use client';

// dropdown basic component
import {useState} from "react";

const Dropdown = () => {
    // dropdown menu 디스플레이 상태
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // dropdown menu 선택된 아이템
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className={'dropdown'}>

            <div className={'trigger'} onClick={() => setIsOpen(prev => !prev)}>
                <span className={'selection'}>
                    {selectedItem ? selectedItem : 'Select an option'}
                </span>
            </div>
            {
                isOpen && (
                    <div className={'dropdown-menu'}>
                        {
                            ['options', 'edit', 'delete'].map((item, index) => (
                                <div
                                    key={index}
                                    className={'dropdown-item'}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    {item}
                                </div>
                            ))
                        }

                    </div>
                )
            }
        </div>
    )
}
export default Dropdown;
