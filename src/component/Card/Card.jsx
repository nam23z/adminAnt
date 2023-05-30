import { Card, Space } from 'antd';
import styled from 'styled-components';
const StyledCard = styled.div`
`
const Cardd = ({title, extra, children, ...rest}) => (
  <StyledCard>
    <Space direction="horizontal" size={16}>
      <Card
        title={title}
        extra={<p>{extra}</p>}
        {...rest}
        children={children}
        >
        {children}
      </Card>
    </Space>
  </StyledCard>
);
export default Cardd;