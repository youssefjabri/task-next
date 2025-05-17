
"use client"

import { Card, CardHeader, CardTitle } from '@/src/components/ui/card'
import React from 'react'

async function Loading() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-red-500'>
                    Error.....
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default Loading