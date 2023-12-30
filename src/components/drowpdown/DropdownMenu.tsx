const DropdownMenu = ({
                          items, onItemClick
                      }: {
    items: string[],
    onItemClick: (item: string) => void
}) => {
    return (
        <div className={'dropdown-menu'}>
            {
                items.map((item, index) => (
                    <div
                        key={index}
                        className={'dropdown-item'}
                        onClick={() => onItemClick(item)}
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    )
}
export default DropdownMenu;

// DropdownMenu는 각 옵션 항복들을 렌더링한다.
// 각 항목을 클릭하면 onItemClick 함수를 호출한다.
