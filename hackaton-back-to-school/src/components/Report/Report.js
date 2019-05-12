import React,{Component} from 'react';
import Chart from '../Chart/Chart';
import classes from './Report.css';

class Report extends Component{
    constructor(){
        super();
        this.state ={
            chartData:{}
        }
    }
    componentWillMount(){
        this.getChartData();
    }
    getChartData(){
        this.setState({
          chartData:{
            labels:['2010','2011','2012','2013','2014','2015','2016','2017','2018'],
            datasets:[
                {
                    label:'Status',
                    data:[
                        250,
                        200,
                        150,
                        100,
                        80,
                        40,
                        25,
                        160,
                        200,
              
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(153,102,255,0.6)',
                        'rgba(255,159,64,0.6)',
                        'rgba(125,99,132,0.6)',
                        'rgba(54,91,235,0.6)',
                        'rgba(12,206,86,0.6)'
                
                    ]
                }
            ]
        }
        })
      }
    render(){
        return(
            <div className={classes.Report}>
                <Chart chartData={this.state.chartData}/>
            </div>
        );
    }
}
export default Report;
