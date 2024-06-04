import axios from "axios"
import { useState } from "react";

export const useTransactions = () => {
    const [error, setError] = useState(null);

    const getTransactions = async () => {
        setError(null)

        try {
            const response = await axios.get("http://localhost:3000/transactions")

            return response.data
        } catch (error) {
            setError(error)
        }
    }

    const addTransaction = async (transaction) => {
        setError(null)

        try {
            const response = await axios.post("http://localhost:3000/transactions", JSON.stringify(transaction), {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            return response.data
        } catch (error) {
            setError(error)
        }
    }

    const getBalance = async () => {
        try {
            const response = await axios.get("http://localhost:3000/balance")
            return response.data
        } catch (error) {
            setError(error)
        }
    }

    return {
        error,
        getTransactions,
        addTransaction,
        getBalance
    }
}