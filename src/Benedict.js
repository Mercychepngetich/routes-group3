import React from 'react';
import {Link} from 'react-router-dom'

function PersonalData() {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80';

  const containerStyle = {
    background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'orange', 
    textAlign: 'center',
    backdropFilter: 'blur(90px)',
  };

  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
  };

  const whiteText = {

    width: '70px',
   justifyContent:'center',
    alignItems: 'right',
    color:'white', 
    fontSize:'30px'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Personal Information</h1>
        <p>Name: Benedict</p>
        <p>Age: 650</p>
        <p>Email: benedictlangat2000@gmail.com</p>
        <p>+25479855627</p>
        <div>
          <img
            src="https://images.unsplash.com/photo-1467010234262-77bada75a47d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile"
            style={imageStyle}
          />
        </div>
        <div>
          <h3>Description: Software Engineer</h3>
          <p>A skilled professional who designs, develops, tests, and maintains software applications and systems. Has technical expertise with problem-solving abilities to create efficient, reliable, and user-friendly software solutions.</p>
        </div>
      </div>
      <div>
        <p><span style={whiteText}>Proficient in the following coding languages
        <ul>
            React <br />
            Ruby <br />
            Javascript <br />
            python <br />
            Wordpress <br />
            php <br />
            JAVA <br />
            


        </ul>
        </span>
        </p>
      </div>
    </div>
  );
}

export default PersonalData;
