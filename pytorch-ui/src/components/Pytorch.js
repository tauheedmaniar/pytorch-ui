import React from 'react'

function Pytorch() {

            

  return (
      <>    
            <div>
    
                <div className='mainBox'>
                    <div className='row'>
                        <button className='elements-left cursorPointor' disabled ={true} onClick={() =>{
                            console.log("hh")
                        }} >PyTorch Build</button> 
                        <p className='elements-right cursorPointor' >Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor'>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'>LTS(1.8.2)</p>
                    </div>
                    <div className='row' style={{visibility:"hidden"}}>
                        <p className='elements-left cursorPointor'>PyTorch Build</p> 
                        <p className='elements-right cursorPointor'>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor'>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'>LTS(1.8.2)</p>
                    </div>
                    <div className='row'>
                        <p className='elements-left cursorPointor'>PyTorch Build</p> 
                        <p className='elements-right cursorPointor'>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor'>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'>LTS(1.8.2)</p>
                    </div>
                    <div className='row'>
                        <p className='elements-left cursorPointor'>PyTorch Build</p> 
                        <p className='elements-right cursorPointor'>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor'>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'>LTS(1.8.2)</p>
                    </div>
                    <div className='row'>
                        <p className='elements-left cursorPointor'>PyTorch Build</p> 
                        <p className='elements-right cursorPointor'>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor'>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'>LTS(1.8.2)</p>
                    </div>
                </div>
            </div>
    </>

  )
}

export default Pytorch