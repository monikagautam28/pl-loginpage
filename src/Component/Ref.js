import React from "react";

class Ref  extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            name:""
        }
        this.myinput = React.createRef();
       // this.myinput1 = React.createRef();

    }
  
    focusInput(){
     
       
        //this.myinput1.current.focus();
this.setState({name:this.myinput.current.value});
//this.setState({name:this.myinput1.current.value});
    }
    componentDidMount(){
        this.myinput.current.focus();
    }
render(){
    console.log(this.state.name);
    return(
        <React.Fragment>
            <input type="text" ref={this.myinput} onChange={()=>this.focusInput()}/>
            {/* //<input type="text" ref={this.myinput1} onChange={()=>this.focusInput()}></input> */}
            <input type = "button"  value = "Click"/>
        </React.Fragment>
    )
}

}

export default Ref;