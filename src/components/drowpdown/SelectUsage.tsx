import Dropdown from "./Dropdown";
import useDropdown from "./useDropdown";

const SelectUsage = ({ items }: {
    items: string[];
}) => {
    const {
        isOpen,
        selectedItem,
        onToggle,
        onSelect
    } = useDropdown();

    return (
        <Dropdown>
            <Dropdown.Trigger
                as={<input value={selectedItem ? selectedItem : 'select options' as string} />}
                onClick={onToggle}
            />

            {isOpen &&
                <Dropdown.Menu>
                    {
                        items.map((item, index) => (
                            <Dropdown.Option key={index} item={item} onSelect={onSelect} />
                        ))
                    }
                </Dropdown.Menu>
            }

        </Dropdown>
    )
}

export default SelectUsage;