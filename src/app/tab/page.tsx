'use client';

import TabUsage from "@/components/tab/TabUsage";

const TabPage = () => {
    return (
        <div>
            <h1>Tab Components Page</h1>

            <TabUsage
                tabs={[
                    {
                        id: 1,
                        title: 'Tab 1',
                        panel: 'Panel 1'
                    },
                    {
                        id: 2,
                        title: 'Tab 2',
                        panel: 'Panel 2'
                    },
                    {
                        id: 3,
                        title: 'Tab 3',
                        panel: 'Panel 3'
                    }
                ]}
            />
        </div>
    )
}


export default TabPage;
