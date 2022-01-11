import React from "react";

class SimpleComponent extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        console.log("*************Simple Component***********");
        return(
            <>
                    <h1>{this.props.value}</h1>
            </>
        )
    }
}

export default SimpleComponent;