"use client"

import React from 'react'
import { Label } from '@/src/components/ui/label'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Input } from '@/src/components/ui/input'
import { useFormStatus } from 'react-dom'

function page() {

    const creationCitation = async (FormData: FormData) => {
        const result = await fetch('/api/citations', {
            body: JSON.stringify({
                citation: FormData.get('citation'),
                author: FormData.get('author')
            }),
            method: 'POST'
        })
        const json = await result.json()
        console.log(json)
    }

    return (
        <Card className='p-4'>
            <CardHeader>
                <CardTitle>
                    Create Citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action={async (FormData) => {
                    await creationCitation(FormData)
                }}>
                    <Label>
                        Citation
                        <Input type="text" name="citation" />
                    </Label>
                    <Label>
                        Author
                        <Input type="text" name="author" />
                    </Label>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    )
}

export default page


const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type="submit">
            {pending ? "Loading..." : "Create"}
        </Button>
    )
}