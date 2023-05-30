import LayoutPrimary from "../../component/Layout";
import styled from "styled-components";
import Cardd from "../../component/Card";
import Chart from "../../component/Chart";
import { Col, Row } from 'antd';
const StyledDashboard = styled.div`
    height: 100vh;
    .chartTop{
        padding-left: 30px;
    }
    .cardd{
        width: 500px;
    }
`
const Dashboard = () => {
    return(
        <LayoutPrimary>
            <StyledDashboard>
                <Row className="chartTop">
                    <Col span={8}>
                        <Cardd className="cardd" title={"Users"} extra={"126,560 Users"} width={"500px"}><Chart></Chart></Cardd>
                    </Col>
                    <Col span={8}>
                        <Cardd className="cardd" title={"Products"} extra={"8,864 Products"} width={"500px"}><Chart></Chart></Cardd>                    
                    </Col>
                    <Col span={8}>
                        <Cardd className="cardd" title={"Orders"} extra={"126,560 Orders"} width={"500px"}><Chart></Chart></Cardd>
                    </Col>
                </Row>
            </StyledDashboard>
        </LayoutPrimary>
    )
}
export default Dashboard;