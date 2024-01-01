import { act, renderHook } from '@testing-library/react'; // react v18 이후에는 @testing-library/react-hooks -> @testing-library/react
import useDropdown from "@/components/drowpdown/useDropdown"

const items = [
    'options', 'edit', 'delete'
]

it('드롭다운 토글 테스트', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current.isOpen).toBe(false);

    act(() => {
        result.current.onToggle();
    })

    expect(result.current.isOpen).toBe(true);

    act(() => {
        result.current.onToggle();
    })

    expect(result.current.isOpen).toBe(false);
})