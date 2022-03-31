import React, { Component } from 'react'

export default class PytorchDashboard extends Component {
    constructor(props){
        super(props)  
        
        this.state = {
            showOS:false,
            showPackages:false,
            showLanguages:false,
            showCompute:false,
            showDisplayed:false,
            buildpy:"",
            yourOS :"",
            packages:"",
            language:"",
            computePlaform: "",
            displayRunCommand:"",
            computes:"Cuda 11.3",
            backgroundColor:"",
            disableds:false,
        }
    }


    onShowBuild = (e)=>{
       // console.log(e.target.id)
       console.log(e.target.id)

       if(e.target.id === 'Preview'){
        this.setState({
            buildpy:e.target.id,
            computes:'Cuda 11.1',
            showOS:true,
            backgroundColor:"bgColor"
         }, ()=>{
             this.ongetRunCommand()
         })


       }
       else {
        this.setState({
            buildpy:e.target.id,
            showOS:true,
            computes:'Cuda 11.1',
           backgroundColor:"bgColor"

         }, ()=>{
             this.ongetRunCommand()
         })



       }


     
        

    }

    
    onShowOS = (e) =>{
        
       // console.log("s ")


        if(e.target.id === "Mac"  && (this.state.buildpy === "stable" || this.state.buildpy ===  "Preview" || this.state.buildpy === 'LTS') ){

            console.log(e.target.id)
            this.setState({
                yourOS:e.target.id,
                showLanguages:true,
                disableds:true
            },()=>{
                this.ongetRunCommand()
            })
        
        }else if(e.target.id === "Window"  && (this.state.buildpy === "stable" || this.state.buildpy ===  "Preview" || this.state.buildpy === 'LTS') ){

            console.log(e.target.id)
            this.setState({
                yourOS:e.target.id,
                showLanguages:true,
                disableds:true
            },()=>{
                this.ongetRunCommand()
            })
        }

        else{
            console.log(e.target.id)
            this.setState({
                yourOS:e.target.id,
                showLanguages:true,
                disableds:false
            },()=>{
                this.ongetRunCommand()
            })

        }

      
    }

    onShowPackage = (e) =>{
        this.setState({
            packages:e.target.id,
            showCompute:true
        }, ()=>{
            this.ongetRunCommand()
        })
    }

    onShowLanguages = (e) =>{
        this.setState({
            language:e.target.id,
            showPackages:true
        },()=>{
            this.ongetRunCommand()
        })
    }
  
    onShowPlatform= (e) =>{
        this.setState({
            computePlaform: e.target.id,
            showDisplayed:true
        }, ()=>{
            this.ongetRunCommand()
        })

    }


    ongetRunCommand = () =>{
        
      //  let [buildpy,yourOS,packages,language,computePlaform] =[...this.state]
      console.log("followup",this.state.buildpy,this.state.yourOS,this.state.packages,this.state.language,this.state.computePlaform)
       
      if(this.state.buildpy === "stable" && this.state.yourOS === "linux" && this.state.packages === "conda" && this.state.language === "Python" && this.state.computePlaform === "Cuda10")
        {
            console.log("sux")
            this.setState({
                displayRunCommand:"Install this command"
            })
            
        } else  if(this.state.buildpy === "stable" && this.state.yourOS === "Mac" && this.state.packages === "conda" && this.state.language === "Python" && this.state.computePlaform === "Cuda10")
        {
            console.log("sux")
            this.setState({
                displayRunCommand:"Install this command for the mac"
            })
            
        } 
         
    }



  
    // onPyBuild =(e)=>{

    //     console.log("as")
    //    this.setState({
    //         buildpy:e.target.value
    //    }) 
    // }


    render() {

        let yles = this.state.backgroundColor;

    return (
        <>    
            <div>
    
                <div className='mainBox'>
                    <div className='row'>
                        <p className='elements-left cursorPointor' disabled ={true} onClick={() =>{
                            console.log("hh")
                        }} >PyTorch Build</p> 
                        <p className={`elements-right cursorPointor ${(this.state.buildpy==='stable')? 'bgColor': ""}`}  onClick={this.onShowBuild} id="stable" value={this.state.buildpy}>Stable(1.11.0)</p>
                        <p className={`elements-right cursorPointor ${(this.state.buildpy==='Preview')? 'bgColor': ""}`}  onClick={this.onShowBuild} id="Preview">Preview(Nightly)</p>
                        <p className={`elements-right cursorPointor ${(this.state.buildpy==='LTS')? 'bgColor': ""}`}   style={{  width: "111px"}} onClick={this.onShowBuild} id="LTS" >LTS(1.8.2)</p>
                    </div>
                    
                    {this.state.showOS?   <div className='row'>
                        <p className='elements-left cursorPointor' style={{width:"95px"}} >Your OS</p> 
                        <p className={`elements-right cursorPointor ${(this.state.yourOS==='linux')? 'bgColor': ""}`}  id="linux" onClick={this.onShowOS}>Linux</p>
                        <p className={`elements-right cursorPointor ${(this.state.yourOS==='Mac')? 'bgColor': ""}`}  id="Mac" onClick={this.onShowOS}>Mac</p>
                        <p className={`elements-right cursorPointor ${(this.state.yourOS==='Window')? 'bgColor': ""}`}  id="Window" style={{  width: "111px"}} onClick={this.onShowOS}>Windows</p>
                    </div>: null }


                    { this.state.showLanguages?   <div className='row'>
                        <p className='elements-left cursorPointor' onClick={this.onShowPackage}>Language</p> 
                        <p className={`elements-right cursorPointor ${(this.state.language==='Python')? 'bgColor': ""}`}  id="Python" style={{width:"173px", marginLeft:"24px"}} onClick={this.onShowLanguages}>Python</p>
                        <p className={`elements-right cursorPointor ${(this.state.language==='Java')? 'bgColor': ""}`}  id="Java" style={{  width: "192px"}} onClick={this.onShowLanguages}>C++/Java</p>
                    </div>: null}
                   

                   {
                    this.state.showPackages? 
                    <div className='row'>
                    <p className='elements-left cursorPointor'  onClick={this.onShowPackage} >Package</p> 
                    <p className={`elements-right ${this.state.language==='Python'?'cursorPointor': 'disabled'} ${(this.state.packages==='conda')? 'bgColor': ""}`}  id="conda"  style={{width:"71px", marginLeft:"36px"}} onClick={this.onShowPackage}>Conda</p>
                    <p className={`elements-right ${this.state.language==='Python'?'cursorPointor': 'disabled'} ${(this.state.packages==='Pip')? 'bgColor': ""}`}   id="Pip" style={{width:"fit-content"}} onClick={this.onShowPackage}>Pip</p>
                    <p className={`elements-right ${this.state.language==='Java'?'cursorPointor': 'disabled'} ${(this.state.packages==='LibTorch')? 'bgColor': ""}`}   id="LibTorch" onClick={this.onShowPackage}>LibTorch</p>
                    <p className={`elements-right ${this.state.language==='Python'?'cursorPointor': 'disabled'} ${(this.state.packages==='Source')? 'bgColor': ""}`}  id="Source" style={{  width: "70px"}} onClick={this.onShowPackage}>Source</p>

                </div>:null
                   }
                    
                   
                   {this.state.showCompute?  <div className='row' style={{height:"42px", marginLeft:"0px"}}>
                        <p className='elements-left cursorPointor'>Compute Platform</p> 
                        <p className={`elements-right  ${this.state.yourOS === 'Mac'?'disabled': 'cursorPointor'} ${(this.state.computePlaform==='Cuda10')? 'bgColor': ""}`}   id="Cuda10" style={{  marginLeft: "-36px", width:"auto"}} onClick={this.onShowPlatform}>Cuda 10.2</p>
                        <p className={`elements-right  ${this.state.yourOS === 'Mac'?'disabled': 'cursorPointor'} ${(this.state.computePlaform=== 'Cuda11')? 'bgColor': ""}`}  id="Cuda11" style={{ width:"auto"}} onClick={this.onShowPlatform}>Cuda11</p>
                        <p className={`elements-right  ${(this.state.yourOS === 'Mac' || this.state.yourOS === 'Window' )?'disabled': 'cursorPointor'} ${(this.state.computePlaform==='ROCM')? 'bgColor': ""}`}  id="ROCM" style={{ width:"auto"}} onClick={this.onShowPlatform} >ROCM 4.2(BETA)</p>
                        <p className={`elements-right   ${(this.state.computePlaform==='CPU')? 'bgColor': ""}`}   id="CPU" style={{ width:"10px"}} onClick={this.onShowPlatform} >CPU</p>

                    </div> : null}
                  
                   { this.state.showDisplayed?   <div className='row'>
                        <p className='elements-left cursorPointor'>Run this Command:</p> 
                        <input type="text" id="lname" name="lname"  value={this.state.displayRunCommand} className='commad-runs'/> 
                                          </div>: null}
                   
                </div>
            </div>
    </>
    )
  }
}
