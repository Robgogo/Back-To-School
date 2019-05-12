import React,{Component} from 'react';
// import Route from 'react-router-dom';
import axios from 'axios';
import ReactPDF, { renderer,Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PdfContainer from './PdfContainer';
import Doc from './DocService';

class Report extends Component{

    state={
        gdpdata:[]
    }
    // https://restcountries.eu/rest/v2/all?fields=name;poppulation;currencies;capital
    componentDidMount(){
        this.getGDPData();
    }
    getGDPData(){
        axios.get("http://api.worldbank.org/v2/country/eth/indicator/NY.GDP.MKTP.CD?format=json&date=2015:2018")
        .then(response => {
            const data=response.data;
            console.log("data is",data);
            this.setState({gdpdata:data[1]})
        })
    }

    createPdf=(html)=>Doc.createPdf(html);

    render(){
        return(
          <React.Fragment>
          <PdfContainer createPdf={this.createPdf}>


            <ul>
                {this.state.gdpdata.map(d => <li key={d.date}>{d.value==null ? 0:d.value} USD</li>)}
            </ul>
            </PdfContainer>
            </React.Fragment>
        )
    }
}

export default Report;  