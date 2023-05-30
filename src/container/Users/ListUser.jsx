import LayoutPrimary from "../../component/Layout";
import styled from "styled-components";
import Tabled from "../../component/Table";


const StyledListUser = styled.div`
  background-color: tomato;
  height: 100vh;
`;
const ListUser = () => {

  return (
    <LayoutPrimary>
      <StyledListUser>
        <Tabled></Tabled>
      </StyledListUser>
    </LayoutPrimary>
  );
};
export default ListUser;
