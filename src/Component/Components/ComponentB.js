import React from 'react';

export default class ComponentB extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            name: "ComponentB",
            data:[],
        }
        console.log("ComponenetB constructor");
    }
    static getDerivedStateFromProps(){
        console.log("ComponenetB getDerivedStateFromProps");
        return null;
    }
    
    componentDidMount(){
        console.log("ComponenetA componentDidMount");
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}));
        
    }
    render(){
        console.log(this.state.data);
        return(
            <>
             <h1>{this.state.name}</h1>
             <ul>
                {
                    this.state.data.map((item) => <li key={item.id}>{item.name}</li>)
                }
             </ul>
            </>
        ) 
    }
}