import React from 'react'

const sami = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
  })
  const handleChange = (e) => {
    setValue({
        ...value,
        [e.target.name]: e.target.value
    })
  }

  console.log(value)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name"  value={value.name}onChange={handleChange}/>
            <input type="email" name="email" placeholder="Email" value={value.email} onChange={handleChange}/>
            {/* <input type="password" name="password" placeholder="Password" /> */}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default sami