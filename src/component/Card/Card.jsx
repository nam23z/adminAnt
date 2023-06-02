import { Card } from 'antd';
import styled from 'styled-components';
const StyledCard = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
const Cardd = ({title, extra, children, ...rest}) => (
  <StyledCard>
      <Card
        title={title}
        extra={<p>{extra}</p>}
        {...rest}
        children={children}
        >
        {children}
      </Card>
  </StyledCard>
);
export default Cardd;