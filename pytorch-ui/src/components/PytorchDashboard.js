import React, { Component } from 'react'

export default class PytorchDashboard extends Component {
    constructor(props){
        super(props)  
        
        this.state = {
            showMe:false,
            showME1:false,
            showME2:false,
            showMe3:false,
        }
    }


    onShowElement = ()=>{
        this.setState({
            showMe:true
        })

    }

    
    onShows = () =>{
        console.log("s ")
        this.setState({
            showME1:true
        })
    }

    onShowTHird = () =>{
        this.setState({
            showME2:true
        })
    }

    onShowFourth = () =>{
        this.setState({
            showMe3:true
        })
    }
  
  
    render() {

    return (
        <>    
            <div>
    
                <div className='mainBox'>
                    <div className='row'>
                        <p className='elements-left cursorPointor' disabled ={true} onClick={() =>{
                            console.log("hh")
                        }} >PyTorch Build</p> 
                        <p className='elements-right cursorPointor' onClick={this.onShowElement} >Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor' onClick={this.onShowElement}>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor' onClick={this.onShowElement}>LTS(1.8.2)</p>
                    </div>
                    
                    {this.state.showMe?   <div className='row'>
                        <p className='elements-left cursorPointor' >PyTorch Build</p> 
                        <p className='elements-right cursorPointor' onClick={this.onShows}>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor' onClick={this.onShows}>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor' onClick={this.onShows}>LTS(1.8.2)</p>
                    </div>: null }

                   {
                    this.state.showME1? 
                    <div className='row'>
                    <p className='elements-left cursorPointor' onClick={this.onShowTHird} >PyTorch Build</p> 
                    <p className='elements-right cursorPointor'  onClick={this.onShowTHird}>Stable(1.11.0)</p>
                    <p className='elements-right cursorPointor'  onClick={this.onShowTHird}>Preview(Nightly)</p>
                    <p className='elements-right cursorPointor'  onClick={this.onShowTHird}>LTS(1.8.2)</p>
                </div>:null
                   }
                    
                    { this.state.showME2?   <div className='row'>
                        <p className='elements-left cursorPointor' onClick={this.onShowTHird}>PyTorch Build</p> 
                        <p className='elements-right cursorPointor' onClick={this.onShowTHird}>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor' onClick={this.onShowTHird}>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'onClick={this.onShowTHird}>LTS(1.8.2)</p>
                    </div>: null}
                   
                   {this.state.showMe3?  <div className='row'>
                        <p className='elements-left cursorPointor'>PyTorch Build</p> 
                        <p className='elements-right cursorPointor'>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor'>Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'>LTS(1.8.2)</p>
                    </div> : null}
                  
                   
                </div>
            </div>
    </>
    )
  }
}
