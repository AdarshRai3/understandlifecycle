import React from 'react';

export default class ComponenetA extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            name: "ComponenetA",
        }
        console.log("ComponenetA constructor");
    }
    static getDerivedStateFromProps(){
        console.log("ComponenetA getDerivedStateFromProps");
        return null;
    }
    
    componentDidMount(){
        console.log("ComponenetA componentDidMount");
        
    }
    render(){
        console.log("ComponenetA render");
        return(
            <>
             <h1>{this.state.name}</h1>
            </>
        ) 
    }
}