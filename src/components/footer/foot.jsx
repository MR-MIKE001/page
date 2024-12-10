import React from 'react'
import './footer.css'
import wave from '../../img/wave.png'
import { UilFacebook, UilInstagram,UilGithub} from '@iconscout/react-unicons';


function Foot() {
  return (
    <div className='footer'>
        <img src={wave} alt='' style={{width:"100%",height:'300px'}}/>
       <div className='f-content'>
        <span>mickyebira@gmail.com</span>
        <div className='f-icons'>
            <UilInstagram color='white' size='3rem'/>
            <UilFacebook color='white' size='3rem'/>
            <UilGithub color='white' size='3rem'/>
            </div>
       </div>
    </div>
  )
}

export default Foot