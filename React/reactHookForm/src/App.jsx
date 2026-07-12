import { useForm } from "react-hook-form"
import './App.css'

/*
basic form handling
  create
  field registration,
  onSubmit,
  Velidation,
  error Handle,
  error Styling,
  multiple submittion prevention,
  patterns for password
  error message
*/


function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
    //isSubmitting flag shows the form is submited or not (form in submitting state)
  } = useForm()
  const  formSubmit =async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log('Form is submited', data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label>First Name:</label>
          <input type="text" {...register("firstName",
            {
              required: true,
              minLength: { value: 3, message: 'min length is 3' }
            })} />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
          {/* the above line required and minlength is used for velidation  user are not able to submit without this field and also it has minimum 3 characters./ and also we can use maxLength */}
        </div>
        <div>
          <label>Middle Name:</label>
          <input type="text" {...register("middleName",
            {
              required: true,
              maxLength: { value: 15, message: 'maximum lenge is 15/- only' }
            })} />
          {errors.middleName && <p style={{ color: 'red' }}>{errors.middleName.message}</p>}
          {/* line no. 39 and 30 is used to show error message and set velidation for middleName */}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" {...register("lastName")} />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" {...register("Password",
            {
              required: true,
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Password must contains /^[A-Za-z]+$/i'
              }
            }
          )} />
          {errors.Password && <p style={{ color: 'red' }}>{errors.Password.message}</p>}

        </div>
        <input type="submit" value={isSubmitting?"submitting":"submit"} disabled={isSubmitting}/>
      </form>
    </>
  )
}

export default App
