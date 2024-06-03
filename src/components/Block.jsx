import React from 'react'
import InputGroup from './InputGroup'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'

const Block = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Block</CardTitle>
                <CardDescription>Block Number 1</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <InputGroup label='Nonce:' id='nonce' type='text' />
                <InputGroup label='Data:' id='data' type='text' />
                <InputGroup label='Previous Hash:' id='previous-hash' type='text' disabled/>
                <InputGroup label='Hash:' id='hash' type='text' disabled/>
            </CardContent>  
            <CardFooter>
                <Button className='ml-auto'>Mine</Button>
            </CardFooter>
        </Card>
    )
}

export default Block