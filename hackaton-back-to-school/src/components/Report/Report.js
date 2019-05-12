import React,{Component} from 'react';
import Chart from '../Chart/Chart';
import classes from './Report.css';
import axios from 'axios';
import PdfContainer from './PdfContainer';
import Doc from './DocService';
                                                                                                                                                                                                                                                                                                                                        
class Report extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData:{},
            poppulationData:[],
            populationLabel:[]
        }
        
    }

    componentDidMount(){
        this.getPopulationData();   
    }

    createPdf=(html)=>Doc.createPdf(html);

    getPopulationData(){
        axios.get("https://restcountries.eu/rest/v2/all?fields=name;population")
        .then(response => {
            const data=response.data;
            const pop=[...data];
            let population=[]
            let label=[]
            for(let i=0;i<pop.length;i++){
                population.push(pop[i].population)
                label.push(pop[i].name);
            }

            
            this.setState({poppulationData:population,populationLabel:label});
            }).then(res=>{
                this.getChartData();
            });
            
    }

    getChartData(){
        const label=[...this.state.populationLabel];
        const data=[...this.state.poppulationData];


        this.setState({
          chartData:{
            labels:[...label.splice(0,9)],
            datasets:[
                {
                    label:'Status',
                    data:[...data.splice(0,9)],
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
        
        console.log("State is",this.state);
        return(
        <React.Fragment>
            <PdfContainer createPdf={this.createPdf}>
            <div className={classes.Report}>
                <Chart chartData={this.state.chartData}/>
            </div>
            </PdfContainer>
            </React.Fragment>
        );
    }
}
export default Report;
