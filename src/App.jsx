import React from 'react'
import Login from './Components/login'
import SignIn from './Components/login'
import { useForm, SubmitHandler } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

const App = () => {
  return (
    <div>
     <Login></Login>
    </div>
  )
}

export default App
