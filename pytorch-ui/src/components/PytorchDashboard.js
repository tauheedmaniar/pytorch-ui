import React, { Component } from 'react'

export default class PytorchDashboard extends Component {
    constructor(props){
        super(props)  
        
        this.state = {
            showMe:false,
            showME1:false,
            showME2:false,
            showMe3:false,
            showMe4:false,
            buildpy:"",
        }
    }


    onShowElement = (e)=>{
        console.log(e.target.id)
        this.setState({
            buildpy:e.target.id,
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
  
    onShowFive= () =>{
        this.setState({
            showMe4:true
        })
    }
  
    // onPyBuild =(e)=>{

    //     console.log("as")
    //    this.setState({
    //         buildpy:e.target.value
    //    }) 
    // }


    render() {

    return (
        <>    
            <div>
    
                <div className='mainBox'>
                    <div className='row'>
                        <p className='elements-left cursorPointor' disabled ={true} onClick={() =>{
                            console.log("hh")
                        }} >PyTorch Build</p> 
                        <p className='elements-right cursorPointor' onClick={this.onShowElement} id="stable" value={this.state.buildpy}>Stable(1.11.0)</p>
                        <p className='elements-right cursorPointor' onClick={this.onShowElement} id="Preview">Preview(Nightly)</p>
                        <p className='elements-right cursorPointor'   style={{  width: "111px"}} onClick={this.onShowElement} id="LTS" >LTS(1.8.2)</p>
                    </div>
                    
                    {this.state.showMe?   <div className='row'>
                        <p className='elements-left cursorPointor' style={{width:"95px"}} >Your OS</p> 
                        <p className='elements-right cursorPointor' onClick={this.onShows}>Linux</p>
                        <p className='elements-right cursorPointor' onClick={this.onShows}>Mac</p>
                        <p className='elements-right cursorPointor' style={{  width: "111px"}} onClick={this.onShows}>Windows</p>
                    </div>: null }

                   {
                    this.state.showME1? 
                    <div className='row'>
                    <p className='elements-left cursorPointor'  onClick={this.onShowTHird} >Package</p> 
                    <p className='elements-right cursorPointor'   style={{width:"71px", marginLeft:"36px"}} onClick={this.onShowTHird}>Conda</p>
                    <p className='elements-right cursorPointor'   style={{width:"fit-content"}} onClick={this.onShowTHird}>Pip</p>
                    <p className='elements-right cursorPointor'  onClick={this.onShowTHird}>LibTorch</p>
                    <p className='elements-right cursorPointor' style={{  width: "70px"}} onClick={this.onShowTHird}>Source</p>

                </div>:null
                   }
                    
                    { this.state.showME2?   <div className='row'>
                        <p className='elements-left cursorPointor' onClick={this.onShowTHird}>Language</p> 
                        <p className='elements-right cursorPointor' style={{width:"173px", marginLeft:"24px"}} onClick={this.onShowFourth}>Python</p>
                        <p className='elements-right cursorPointor' style={{  width: "192px"}} onClick={this.onShowFourth}>C++/Java</p>
                    </div>: null}
                   
                   {this.state.showMe3?  <div className='row' style={{height:"42px", marginLeft:"0px"}}>
                        <p className='elements-left cursorPointor'>Compute Platform</p> 
                        <p className='elements-right cursorPointor' style={{  marginLeft: "-36px", width:"auto"}} onClick={this.onShowFive}>Cuda 10.2</p>
                        <p className='elements-right cursorPointor' style={{ width:"auto"}}>Cuda 11.3</p>
                        <p className='elements-right cursorPointor' style={{ width:"auto"}}>ROCM 4.2(BETA)</p>
                        <p className='elements-right cursorPointor'style={{ width:"10px"}}>CPU</p>

                    </div> : null}
                  
                   { this.state.showMe4?   <div className='row'>
                        <p className='elements-left cursorPointor'>Run this Command:</p> 
                        <input type="text" id="lname" name="lname"  className='commad-runs'/> 
                                          </div>: null}
                   
                </div>
            </div>
    </>
    )
  }
}
