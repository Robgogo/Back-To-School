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
    generateRandomColor(min,max){ 
        let random =Math.floor(Math.random() * (+max - +min)) + +min; 
        
        return random;
    }

    randomColorsList(){
        const color=[]
        for(let i=0;i<=50;i++){
            let val='rgba('+this.generateRandomColor(0,255)+','+this.generateRandomColor(0,255)+','+this.generateRandomColor(0,255)+','+0.6+')';
            color.push(val);
        }

        return color;
    }

    getChartData(){
        const label=[...this.state.populationLabel];
        const data=[...this.state.poppulationData];


        this.setState({
          chartData:{
            labels:[...label.splice(0,50)],
            datasets:[
                {
                    label:'Status',
                    data:[...data.splice(0,50)],
                    backgroundColor:this.randomColorsList()
                    
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
