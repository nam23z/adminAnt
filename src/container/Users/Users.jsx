import styled from "styled-components";
import Tabled from "../../component/Table";

const StyledListUser = styled.div`
  background-color: tomato;
  height: 100vh;
`;
const Users = () => {

  return (

      <StyledListUser>
        <Tabled></Tabled>
      </StyledListUser>
  );
};
export default Users;
