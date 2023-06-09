import styled from "styled-components";
import Cardd from "../../component/Card";
import { Chart, ChartRadialBar, ChartBar } from "../../component/Chart/index";
import { Col, Row } from "antd";
const StyledDashboard = styled.div`
  height: 100vh;
  .chartTop {
    padding-left: 30px;
  }
  .cardd {
    width: 1057px;
    margin: 0 auto;
  }
  .card2 {
    width: 800px;
  }
  .card3 {
    width: 800px;
  }
`;
const Dashboard = () => {
  return (
    <StyledDashboard>
      <div className="chartTop">
        <Cardd className="cardd" title={"Token Price"}>
          <Chart></Chart>
        </Cardd>
      </div>
      <Row>
        <Col span={12}>
          <Cardd className="card2" title={"Money Allocation"}>
            <ChartRadialBar></ChartRadialBar>
          </Cardd>
        </Col>
        <Col span={12}>
          <Cardd className="card3" title={"Profit"}>
            <ChartBar></ChartBar>
          </Cardd>
        </Col>
      </Row>
    </StyledDashboard>
  );
};
export default Dashboard;
