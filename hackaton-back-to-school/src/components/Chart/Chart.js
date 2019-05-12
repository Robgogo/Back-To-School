import React,{Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import classes from './Chart.css';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData:props.chartData,
            barClicked:true,
            pieClicked:false,
            lineClicked:false
        }
     
    }
    
    barClickHandler=()=>{
        this.setState({
            barClicked:true,
            pieClicked:false,
            lineClicked:false
        });
    }
    pieClickHandler=()=>{
        this.setState({
            barClicked:false,
            pieClicked:true,
            lineClicked:false
        });
    }
    lineClickHandler=()=>{
        this.setState({
            barClicked:false,
            pieClicked:false,
            lineClicked:true
        });
    }
   
    
    render(){
        console.log("props from chart is: ",this.props.chartData);
        let chart=null
        if (this.state.barClicked) {
        chart=<Bar 
        data ={this.props.chartData}
        options ={{
            title:{
                display:true,
                text:'Status of the links using Bar chart',
                fontSize:25
            },
            legend:{
                display:true,
                position:'right'
            } 
        }}
    />
        }
        else if(this.state.pieClicked){
            chart= <Pie 
            data ={this.props.chartData}
            options ={{
                title:{
                    display:true,
                    text:'Status of the links using Pie chart',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }}
        />
        }
        else if(this.state.lineClicked){
            chart= <Line 
            data ={this.props.chartData}
            options ={{
                title:{
                    display:true,
                    text:'Status of the links using Line chart',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }}
        />
        }
    
        
    
   
    
   
        return(
            <div className="chart">
            <div className='row'>
            <h3>Display the Report Using</h3>
             <button className={classes.button} onClick={this.barClickHandler}>Bar Chart</button>
             <button className={classes.button} onClick={this.pieClickHandler}>Pie Chart</button> 
             <button className={classes.button} onClick={this.lineClickHandler}>Line Chart</button>
            </div>
            {chart}
               
            </div>
        )
    }

}
export default Chart;