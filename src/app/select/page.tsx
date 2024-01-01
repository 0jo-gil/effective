'use client';

import SelectUsage from "@/components/drowpdown/SelectUsage";

const SelectPage = () => {
    return (
        <div>
            <h1>Select Components Page</h1>

            {/* <Dropdown /> */}
            <SelectUsage items={['edit', 'delete', 'add']}/>
        </div>
    )
}

export default SelectPage;
