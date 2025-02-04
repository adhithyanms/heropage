import React, { useState } from 'react'
function Home() {
  const buttonstyle={backgroundColor:"Blue",color:"white" ,border:"none", padding:"5px",borderRadius:"5px"}
  const [name,setName]=useState("Your Name")
  const [count,setCount]=useState(0)
  const [visible,setVisible]=useState("none")
  const [Theme,setTheme]=useState(false)
  const ThemeStyle={backgroundColor:Theme?'white':'black',color:Theme?'black':'white'}
  return (
    <div style={ThemeStyle}>
      <h1>HI! {name}</h1> <button onClick={()=>setName('Adhi')} style={buttonstyle}>Click Me</button>
      <h1>Counter:{count}</h1><button onClick={()=>setCount(count+1)} style={buttonstyle}>Incremenet</button> <button onClick={()=>setCount(count-1)} style={buttonstyle}> Decrement</button>
      <h1 style={{display:visible}}>Visible:{visible}</h1> <button onClick={()=>setVisible('block')} style={buttonstyle}>Display</button> <button onClick={()=>setVisible('none')} style={buttonstyle}>Hide</button>
      <h1>Theme</h1> <button onClick={()=>setTheme(pre=>!pre)} style={buttonstyle}>Change Theme</button>
    
    </div>

  )

}

export default Home
