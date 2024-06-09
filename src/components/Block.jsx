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
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const Block = ({ data }) => {
    let transactions = ''

    if (data.id === 0) {
        transactions = data.transactions
    } else {
        data.transactions.forEach(element => {
            transactions += `ID: ${element.id} Type: ${element.type}, Value: ${element.value} \n`
        });
    }

    return (
        <Card>
            <CardHeader className='flex-row justify-between'>
                <div>
                    <CardTitle>Block</CardTitle>
                    <CardDescription>Block Number {data.id}</CardDescription>
                </div>
                <CheckCircledIcon className='w-6 h-6 text-constructive' />
                {/* <CrossCircledIcon className='w-6 h-6 text-destructive'/> */}
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <InputGroup label='Nonce:' id='nonce' type='text' value={data.nonce} disabled />
                <div className="flex items-center text-end gap-4">
                    <Label htmlFor='data' className='w-[150px]'>Data:</Label>
                    <Textarea id='data' name='data' className='min-h-36' value={transactions} disabled />
                </div>
                <InputGroup label='Previous Hash:' id='previous-hash' type='text' value={data["previous-hash"]} disabled />
                <InputGroup label='Hash:' id='hash' type='text' value={data.hash} disabled />
            </CardContent>
            <CardFooter>
                {/* <Button className='ml-auto'>Mine</Button> */}
            </CardFooter>
        </Card>
    )
}

export default Block