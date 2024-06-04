import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TransactionsTable = ({ data, balance }) => {
  return (
    <div>
      <Table className='w-full'>
        <TableHeader className='sticky top-0 bg-white shadow'>
          <TableRow>
            <TableHead className='min-w-[50px] py-2'>ID</TableHead>
            <TableHead className='min-w-[100px] py-2'>Type</TableHead>
            <TableHead className='min-w-[100px] py-2'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell className='py-2'>{index + 1}</TableCell>
              <TableCell className='capitalize py-2'>{transaction.type}</TableCell>
              <TableCell className='font-medium py-2'>${transaction.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-end">
        <h4 className="text-md tracking-tight">Balance: <span className="font-bold">${balance.balance}</span></h4>
      </div>
    </div>
  )
}

export default TransactionsTable