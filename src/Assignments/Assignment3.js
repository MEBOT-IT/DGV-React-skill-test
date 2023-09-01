import React from 'react'

function Assignment3() {
  
       var name = `PASUPATHI R`;
       var city = `CHENNAI`;
  return (
    <div>
      <h1
        style={{
          marginLeft: `350px`,
          marginTop: `100px`,
          fontFamily: `revert`,
          fontSize: `50px`,
        }}
      >
        My name is {name}.
      </h1>
      <p
        style={{
          fontFamily: `sans-serif`,
          fontSize: `25px`,
          marginTop: `100px`,
          marginLeft: `250px`,
          position: `absolute`,
          color: `black`,
        }}
      >
        I am {name} I am pursuing MCA in DG vaishnav Collage.
       I Am located in {city}.
       
      </p>
    </div>
  );
    
}

export default Assignment3
