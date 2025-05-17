import React from 'react'
import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import Link from 'next/link'

async function page() {

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h1 className="scroll-m-20 text-3xl font-light tracking-tight">
                            Admin Page
                        </h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
                        Home Page
                    </Link>
                </CardContent>
                <CardContent>
                    <Link href="/admin/citation/Citation-Page" className={buttonVariants({ variant: "outline", size: "lg" })}>
                        Citation Page
                    </Link>
                </CardContent>
            </Card>

        </>
    )
}

export default page 