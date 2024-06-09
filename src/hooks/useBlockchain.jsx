import axios from "axios"
import { useState } from "react";

export const useBlockchain = () => {
    const [error, setError] = useState(null);

    // const mineBlock = async () => {
    //     setError(null)


    // }

    const generateBlock = async (transactions) => {
        setError(null)
        
        try {
            const response = await axios.post("http://localhost:3000/new-block", JSON.stringify(transactions), {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            return response.data
        } catch (error) {
            setError(error)
        }
    }


    const getBlockchain = async () => {
        setError(null)

        try {
            const response = await axios.get("http://localhost:3000/blockchain")

            return response.data
        } catch (error) {
            setError(error)
        }
    }   

    return {
        generateBlock,
        getBlockchain,
    }
}