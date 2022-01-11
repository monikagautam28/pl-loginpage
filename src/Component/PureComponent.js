import React from "react";

class PureComponent extends React.PureComponent{
    constructor(props){
        super(props)
    }


    render(){

        console.log("*************Pure Component***********");
        return(
            <>
            <h1>{this.props.value}</h1>
            </>
        )
    }
}

export default PureComponent;