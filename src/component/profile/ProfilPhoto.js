import React from 'react' ;
import imgP from '../img/labibyanes.jpg'; 
import './style.css'


function ProfilePhoto(){
return (

<div className='imgProfile'>
<img src={imgP} alt="profile-img"></img>
</div>

);


}
export default ProfilePhoto;