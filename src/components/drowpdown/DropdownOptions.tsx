const DropdownOptions = ({ item, onSelect }: { item: string, onSelect: (item: string) => void }) => {
    return (
        <div onClick={() => onSelect(item)}>{item}</div>
    )
}

export default DropdownOptions;
