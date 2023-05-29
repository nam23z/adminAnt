import LayoutPrimary from "../../component/Layout";
import styled from "styled-components";
import Cardd from "../../component/Card";

const StyledDashboard = styled.div`
    background-color: yellowgreen;
    height: 100vh;
`
const Dashboard = () => {
    return(
        <LayoutPrimary>
            <StyledDashboard>
                <Cardd></Cardd>
            </StyledDashboard>
        </LayoutPrimary>
    )
}
export default Dashboard;