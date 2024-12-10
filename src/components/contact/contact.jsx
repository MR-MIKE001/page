import React from 'react'
import './contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  
          const form = useRef();
        
          const sendEmail=(e)=>{
           e.preventDefault();
           emailjs.sendForm('service_n1uaqvd', 'template_njdb4ji', form.current, '40FBwbA7TtkG8a-e9')
           .then((result)=>{
            alert("successful")
           })
           .catch((err)=>{alert("failled")
            console.log(err)
           });
          }
          
    
  return (
    <div className='contact' id='contact'>
        <div className='c-left'>
            <div className='awesome'>
                <span>get in touch</span>
                <span>contact me</span>
                <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>
     
            </div>
        </div>
        <div className='c-right'> 
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user-name' className='user' placeholder='name'/>
            <input type="email" name='user-email' className='user' placeholder='email'/>
            <textarea name='message' className='user' placeholder='message'>

            </textarea>
            <button type='summit' value="send" className='button ebutton'>sent</button>
            <div className='blur c-blur1' style={{background:"var(--purple)"}}></div>
        </form>
        </div>
    </div>
  )
}

export default Contact