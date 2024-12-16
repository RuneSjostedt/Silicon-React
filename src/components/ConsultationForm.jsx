import React, { useState } from 'react'

const ConsultationForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', Specialist: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {name, value } = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} is required`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmbit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '' ) {
                newErrors[field] = `The ${field} is required.`
            }
        })

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({ name: '', email: '', Specialist: '' })
        }
    }

    if (submitted) {
        return (
            <div>
            <h1>Tack för ditt meddelande!</h1>
            <p>Vi återkommer till dig så snart vi kan</p>
            <button>ok</button>
            </div>
        )
    }
 
  return (
    <form onSubmit={handleSubmbit} noValidate className="consult-forms">
    <div  className="consult-form" action="">
        <label  className="label-consult" >Full Name</label>
        <input className="input-consult" name="name" value={formData.name} type="text" onChange={handleChange} required />
        <span>{errors.name && errors.name}</span>
    </div>
    <div  className="consult-form" action="">
        <label className="label-consult" >Email address</label>
        <input className="input-consult"  type="email" name="email" value={formData.email} onChange={handleChange} required />
        <span>{errors.email && errors.email}</span>
    </div>
    <div  className="consult-form" action="">
        <label className="label-consult" >Specialist</label>
        <input className="input-consult" value={formData.Specialist} type="text" name="Specialist" onChange={handleChange} required />
        <span>{errors.Specialist && errors.Specialist}</span>
    </div>

    <button type="submit" className="btn-primary">
    <p>Make an appointment</p>
    </button>
    </form>
  )
}

//lista inte ut varför det aldrig blir ok (200) på api
export default ConsultationForm