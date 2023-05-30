import { Avatar, List, Space } from 'antd';
import { Pagination } from 'antd';
import Cardd from '../Card';
import styled from 'styled-components';


const StyledList = styled.div`
    
`
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const Listt = () => {
  return (
    <StyledList>
        <Cardd>
        <Space
            direction="vertical"
            style={{
            marginBottom: '20px',
            }}
            size="middle"
        >
        </Space>
        <List
            dataSource={data}
            renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                avatar={
                    <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>Status</div>
            </List.Item>
            )}
        />
            <Pagination defaultCurrent={1} total={50} />;
        </Cardd>
    </StyledList>
  );
};
export default Listt;