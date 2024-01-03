import React from "react"

export default class Timer1 extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            time:0,
        }
        this.timer = null;
    }

    static getDerivedStateFromProps(){
        console.log("Timer1 getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;                

    }

    render(){
        console.log("Timer1 render");
        return(
            <>
             <h1>Time Spent:
             {
                new Date(this.state.time+1000).toISOString().slice(11,19)
              }
             </h1>
              
            </>
        )
    }

    componentDidMount(){
        console.log("Timer1 componentDidMount");
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Timer1 getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState,Snapshot){
        console.log("Timer1 componentDidUpdate");
        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(()=>{
                    this.setState({
                        time: this.state.time+1000
                    })
                },1000)
            }else{
                clearInterval(this.timer);
            }
        }
    }
    

    componentWillUnmount(){
        console.log("Timer1 componentWillUnmount");
        clearInterval(this.timer);
    }
}    