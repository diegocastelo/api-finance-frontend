import Block from './components/Block'
import { Button } from './components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
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

import { Label } from './components/ui/label'
import { Input } from './components/ui/input'


function App() {

  return (
    <Dialog>
      <header className="fixed top-0 text-center w-screen bg-white shadow-md pb-4">
        <h1 className="mt-4 mb-2 text-3xl font-semibold tracking-tight">
          Blockchain & Financial Application
        </h1>
        <DialogTrigger>
          <Button>
            <PlusIcon className="mr-2" />
            Add transaction
          </Button>
        </DialogTrigger>
      </header>
      <main className="flex justify-center items-center mt-[150px]">
        <div className='flex flex-wrap justify-center gap-4 '>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
        {/* <div className="text-center">
          <p>No blocks registered yet. Start by adding a new transaction.</p>
          <DialogTrigger>
            <Button className="mt-2">
              <PlusIcon className="mr-2" />
              Add transaction
            </Button>
          </DialogTrigger>
        </div> */}
      </main>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Transaction</DialogTitle>
          <DialogDescription>
            Please fill in the details below to add a new transaction.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Label>Type:</Label>
            <Select>
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
            <Input type="number" step={0.1} placeholder="Amount" className="w-[180px]" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">
              Save Transaction
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default App
