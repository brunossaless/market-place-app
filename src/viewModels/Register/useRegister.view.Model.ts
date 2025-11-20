import { useState } from "react"

export const useRegisterViewModel = () => {
    const [userDate, setUserDate] = useState({})

    return {
        userDate,
        setUserDate
    }

}