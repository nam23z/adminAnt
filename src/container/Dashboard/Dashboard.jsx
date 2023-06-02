import LayoutPrimary from "../../component/Layout";
import styled from "styled-components";
import Cardd from "../../component/Card";
import { Chart,ChartRadialBar, ChartBar } from "../../component/Chart/index";
import { Col, Row } from 'antd';
const StyledDashboard = styled.div`
    height: 100vh;
    .chartTop{
        padding-left: 30px;
    }
    .cardd{
        width: 1057px;
        margin: 0 auto;
    }
    .card2{
        width: 800px;
    }
    .card3{
        width: 800px;
    }
`
const Dashboard = () => {
    return(
        <LayoutPrimary>
            <StyledDashboard>
                <div className="chartTop">
                <Cardd className="cardd" title={"Users"} extra={"126,560 Users"}>
                            <Chart></Chart>
                        </Cardd>
                </div>
                {/* <Row className="chartTop">
                    <Col span={24}>
                        <Cardd className="cardd" title={"Users"} extra={"126,560 Users"}>
                            <Chart></Chart>
                        </Cardd>
                    </Col>
                </Row> */}
                <Row>
                    <Col span={12}>
                        <Cardd className="card2" title={"Products"} extra={"8,864 Products"}><ChartRadialBar></ChartRadialBar></Cardd>
                        
                    </Col>
                    <Col span={12}>
                        <Cardd className="card3" title={"Orders"} extra={"126,560 Orders"}><ChartBar></ChartBar></Cardd>
                    </Col>
                </Row>
            </StyledDashboard>
        </LayoutPrimary>
    )
}
export default Dashboard;