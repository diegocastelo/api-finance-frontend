import Block from './components/Block'
import { Button } from './components/ui/button'
import { CountdownTimerIcon, PlusIcon } from '@radix-ui/react-icons'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Label } from './components/ui/label'
import { Input } from './components/ui/input'

import { useTransactions } from './hooks/useTransactions'
import { useState, useEffect } from 'react'
import TransactionsTable from './components/TransactionsTable'
import Blocks from './components/Blocks'

function App() {
  const { getTransactions, addTransaction, getBalance, error } = useTransactions()
  const [open, setOpen] = useState(false)
  const [transactions, setTransactions] = useState(null)
  const [balance, setBalance] = useState(null)
  const [transaction, setTransaction] = useState({
    type: '',
    value: '',
  })

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const fetchedTransactions = await getTransactions()
        const balance =await getBalance()
  
        setTransactions(fetchedTransactions)
        setBalance(balance)
      } catch (err) {
        console.error("Error fetching transactions:", err)
      }
    }

    loadTransactions()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (transaction.type && transaction.value > 0) {
      try {
        const result = await addTransaction(transaction)
        const balance = await getBalance()
        const fetchedTransactions = await getTransactions()

        setTransactions(fetchedTransactions)
        setBalance(balance)
      } catch (err) {
        console.error("Error adding transaction:", err)
      }
    } else {
      console.error("Invalid transaction data:", transaction)
    }

    setTransaction({
      type: '',
      value: '',
    })
    setOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 text-center w-screen bg-white shadow-md pb-4">
        <div>
          <h1 className="mt-4 mb-2 text-3xl font-semibold tracking-tight">Blockchain & Financial Application</h1>
          <div className='flex justify-center gap-2 w-full'>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusIcon className="mr-2" />
                  Add transaction
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Transaction</DialogTitle>
                  <DialogDescription>Please fill in the details below to add a new transaction.</DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Label>Type:</Label>
                    <Select value={transaction.type} onValueChange={(value) => setTransaction({ ...transaction, type: value })}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="income">Income</SelectItem>
                        <SelectItem value="expenditure">Expenditure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Amount:</Label>
                    <Input type="number" step={0.1} placeholder="Amount" className="w-[180px]" name="amount" value={transaction.value} onChange={(e) => setTransaction({ ...transaction, value: parseFloat(e.target.value) })} />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save Transaction</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            {transactions && <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline'>
                  <CountdownTimerIcon className="mr-2" />
                  Show transactions history
                </Button>
              </SheetTrigger>
              <SheetContent className='w-fit'>
                <SheetHeader>
                  <SheetTitle>Transactions History</SheetTitle>
                  <SheetDescription>
                    <TransactionsTable data={transactions} balance={balance}/>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>}
          </div>
        </div>
      </header>
      <main className="flex justify-center mt-[150px]">
        <Blocks />
      </main>
    </>
  )
}

export default App
