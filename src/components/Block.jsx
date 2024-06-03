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
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons"

const Block = () => {
    return (
        <Card>
            <CardHeader className='flex-row justify-between'>
                <div>
                    <CardTitle>Block</CardTitle>
                    <CardDescription>Block Number 1</CardDescription>
                </div>
                <CheckCircledIcon className='w-6 h-6 text-constructive'/>
                {/* <CrossCircledIcon className='w-6 h-6 text-destructive'/> */}
                
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <InputGroup label='Nonce:' id='nonce' type='text' />
                <InputGroup label='Data:' id='data' type='text' />
                <InputGroup label='Previous Hash:' id='previous-hash' type='text' disabled />
                <InputGroup label='Hash:' id='hash' type='text' disabled />
            </CardContent>
            <CardFooter>
                <Button className='ml-auto'>Mine</Button>
            </CardFooter>
        </Card>
    )
}

export default Block