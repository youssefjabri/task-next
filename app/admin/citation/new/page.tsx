import React from 'react'
import { Label } from '@/src/components/ui/label'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Input } from '@/src/components/ui/input'

function page() {
    return (
        <Card className='p-4'>
            <CardHeader>
                <CardTitle>
                    Create Citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action="/api/citations" method="POST">
                    <Label>
                        Citation
                        <Input type="text" name="citation" />
                    </Label>
                    <Label>
                        Author
                        <Input type="text" name="author" />
                    </Label>
                    <Button type="submit">Submit</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default page