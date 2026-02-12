import "@fontsource/poppins"

const MarqueeBar = () => {
  return (
    <>
    <div style={{fontFamily:"",backgroundColor:"yellow",color:"red",fontWeight:"bold",padding:"8px",fontSize:"17px",borderBottom:"1px solid orange"}}>
       <marquee behavior="scroll" direction="left" scrollamount="5">
        {/* Agrofresh - Fresh fruits and vegetables directly from farmers, with no middlemen! Get 10% off on vegetables every friday  */}
        AgroFresh — ताजे फल और सब्ज़ियां सीधे किसान से, बिना बिचौलिये के! हर शुक्रवार को सब्ज़ियों पर 10% की छूट! ऑफर सीमित समय के लिए।
        </marquee> 
    </div>
    </>
  )
}

export default MarqueeBar
