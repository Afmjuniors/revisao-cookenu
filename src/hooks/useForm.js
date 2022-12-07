import { useState } from "react"

export  const useForm =(inicialState) =>{
const [form, setForm] = useState(inicialState)

const handleOnChangeForm = (e) =>{
    const {value,name} = e.target
    setForm({...form, [name]:value})
}

return [form,handleOnChangeForm]

}