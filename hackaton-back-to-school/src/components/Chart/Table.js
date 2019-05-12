import React,{Component} from 'react';

class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            tableData:[]
        }
    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                    <th>
                        User Id
                    </th>
                    <th>ID</th>
                    <th>Tiitle</th>
                    <th>Content</th>
                    </thead>
                    <tbody>
                        <td>
                            sam
                        </td>
                        <td>
                            roba
                        </td>
                    </tbody>
                    
                </table>
            </div>
        );
    }
}
export default Table;