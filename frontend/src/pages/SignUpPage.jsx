import React from 'react'

const SignUpPage = () => {
  const [ showPassword, setShowPasswprd ] = useState(false);
  const [formData, setFormData ] = useState({
    fullName: "",
    email: "",
    password: "",
  }) 

  return (
    <div>SignUpPage</div>
  )
}

export default SignUpPage