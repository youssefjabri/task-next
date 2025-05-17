
import { Card, CardHeader, CardTitle } from '@/src/components/ui/card'
import React from 'react'

async function Loading() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Loading.......
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default Loading