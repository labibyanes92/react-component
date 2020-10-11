import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './component/profile/ProfilPhoto'
import Name from './component/profile/FullName'
import MyAddress from './component/profile/Address'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <>
      <div className="container">
	
	</div>
	<div className="profile">
		<div className="row">
			<div className="col-md-6">
				<div className="row">
					<div className="col-md-12">
						<div className="profile-image">
							<Profile/>
						</div>			
					</div>
				</div>	
			</div>
			<div className="col-md-12 content">
				<div className="info">
					<Name/>
					<MyAddress/>
					
				</div>
			</div>
		</div>	
	</div>
     
      
      
      
      
    </>



  );
}

export default App;
