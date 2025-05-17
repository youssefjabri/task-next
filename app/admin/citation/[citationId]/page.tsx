import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import Link from 'next/link'
import React from 'react'

function page(props: {
    params: {
        citationId: string
    }
}) {
    return (
        <Card>

            <CardContent>
                {props.params.citationId}
            </CardContent>
        </Card>)
}

export default page