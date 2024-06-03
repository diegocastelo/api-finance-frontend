import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { cn } from "@/lib/utils"

const InputGroup = ({label, id, type, className, border, ...props}) => {
    return (
        <div className={cn("flex items-center text-end gap-4", className)}>
            <Label htmlFor={id} className='w-[150px]'>{label}</Label>
            <Input type={type} id={id} name={id} className='h-6' {...props}/>
        </div>
    )
}

export default InputGroup