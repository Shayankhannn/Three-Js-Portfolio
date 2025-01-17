import { useRef, useState } from "react"

const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);


  // skipped email js  part
  // emailjs
  // .send(
  //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //   {
  //     from_name: form.name,
  //     to_name: 'your name',
  //     from_email: form.email,
  //     to_email: 'your email',
  //     message: form.message,
  //   },
  //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  // )
  

    const handleChange = ({target:{name,value}})=>{
      setForm({...form,[name]:value})
    }
    const handleSubmit = async(e) => {

      try {
         // await emailjs
  // .send(
  //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //   {
  //     from_name: form.name,
  //     to_name: 'your name',
  //     from_email: form.email,
  //     to_email: 'your email',
  //     message: form.message,
  //   },
  //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  // )

  setLoading(false)

      } catch (error) {
        console.log(error)
      }


      e.preventDefault()
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        alert("Form submitted successfully!")
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      },2000)
    }
  
  
    return (
    <section className="c-space my-20">
      
      <div className="min-h-screen relative flex items-center justify-center flex-col">
      <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />
      <div className="contact-container">
      <h3 className="head-text">
        Lets
        <span className="text-purple-400"> Connect</span>
      </h3>
      <p className="text-lg text-white-600 mt-3">Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
      life, I’m here to help.</p>

      {/* <div className="">
        <div className=""></div>
        <div className="">fffffff</div>
      </div> */}
      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
          <label className="space-y-3">
          <span className="field-label">Full Name</span>
          
          <input
           type="text" 
           name="name" 
           value={form.name} 
           onChange={handleChange} 
           className="field-input" 
           placeholder="Your Name.." 
           required
           />
           </label>
          <label className="space-y-3">
          <span className="field-label">Email</span>
          
          <input
           type="email" 
           name="email" 
           value={form.email} 
           onChange={handleChange} 
           className="field-input" 
           placeholder="Your Email.." 
           required
           />
           </label>
          <label className="space-y-3">
          <span className="field-label">Message</span>
          
           </label>
          <textarea
           
           name="message" 
           rows={6}
           value={form.message} 
           onChange={handleChange} 
           className="field-input" 
           placeholder="Your Message.." 
           required
           />
          {/* <label className="space-y-3">
          <span className="field-label">Subject</span>
          
          <input
           type="text" 
           name="name" 
           value={form.name} 
           onChange={handleChange} 
           className="field-input" 
           placeholder="Your Name.." 
           required
           />
           </label> */}
           <button className="field-btn" type="submit " disabled={loading}>
              {loading ? 'Sending Message....': 'Send Message...'}
               <img src="/assets/arrow-up.png" alt="send" className="field-btn_arrow" />
           </button>
      </form>
      </div>
      </div>
    </section>
  )
}

export default Contact