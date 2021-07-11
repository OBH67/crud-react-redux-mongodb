import {useState } from "react";

const useForm = (initialFieldValues,setCurrentId) => {

    // here we store the data from the inputs
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    // This function permit to get the changes on the inputs
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm =() =>{
        setValues(initialFieldValues)
        setErrors({})
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    };
}

export default useForm;
