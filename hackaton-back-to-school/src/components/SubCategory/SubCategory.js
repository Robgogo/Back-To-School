import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

function subCategoryRow(props) {
  const subcategory = props.subcategory
 
  const subcatLink = `/subcategory/${subcategory.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={subcategory.id.toString()}>
      <th scope="row"><Link to={subcatLink}>{subcategory.id}</Link></th>
      <td><Link to={subcatLink}>{subcategory.ማያያዣ}</Link></td>
      <td>{subcategory.ቀን}</td>
      <td><Link to={subcatLink}><Badge color={getBadge(subcategory.ሁኔታ)}>{subcategory.ሁኔታ}</Badge></Link></td>
    </tr>
  )
}

class Subcategory extends Component {

  render() {

    const subcatList = usersData.filter((subcategory) => subcategory.id < 20)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> መረጃዎች 
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">መለያ ቁጥር</th>
                      <th scope="col">ማያያዣ(link)</th>
                      <th scope="col">ቀን</th>                      
                      <th scope="col">ሁኔታ(status)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subcatList.map((user, index) =>
                      <subCategoryRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Subcategory;
