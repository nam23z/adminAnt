import { Space, Table, Button, Col, Row, Modal, Form, Input } from "antd";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Excel from '../Excel/index';

const { Column } = Table;

const StyledTable = styled.div`
  .css-dev-only-do-not-override-w8mnev.ant-table-wrapper
    .ant-table-pagination-right {
    justify-content: center;
  }
  .ip-id{
    display: none;
  }
`;
const Tabled = () => {
  // state management
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);
  // Modal
  const [modalAdd, setModalAdd] = useState(false);

  const [form] = Form.useForm();
  // form add user
  const onAddUser = (user) => {
    if(form.getFieldValue("id")){
      const id =  form.getFieldsValue().id;
      const ind = usersStore.listUser.findIndex((ye)=> ye.id === id);
      let ahihi = [...usersStore.listUser]
      ahihi[ind] = form.getFieldsValue();
      dispatch.users.setListUser(ahihi);
    }else{
      const newData = [
        ...usersStore.listUser,
        {
          id: Math.floor(Math.random() * 10000) + 1,
          name: user.name,
          age: user.age,
          address: user.address,
        },
      ];
      dispatch.users.setListUser(newData);
    }
    console.log(form.getFieldsValue());
  };
  const deletee = (idd) =>{
    const id =  form.getFieldsValue().id;
    const ind = usersStore.listUser.findIndex((ye)=> ye.id === idd);
    let ahihi = [...usersStore.listUser]
    ahihi.splice(ind, 1);
    dispatch.users.setListUser(ahihi);
  }
  //show modal edit
  const showModalEdit = (id) => {
    setModalAdd(true);
    const a = usersStore.listUser.find((hi)=>hi.id === id);
    form.setFieldsValue({["id"]: a.id,["name"]: a.name,["username"]: a.username, ["email"]: a.email})
  };
  // const onedit = () => {
  // };
  return (
    <StyledTable>
      <Row align="middle">
        <Col flex={2}>
          <h2>Users</h2>
        </Col>
        <Col flex={2} offset={20}>
          <Button
            onClick={() => {
              setModalAdd(true);
            }}
            type="primary"
          >
            Add User
          </Button>
      <Excel
          fileName="export-user"
          data={[
            {
              columns: [
                {
                  title: "User Id",
                  dataIndex: "id",
                  width: 5,
                },
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 20,
                },
                {
                  title: "Email",
                  dataIndex: "email",
                  width: 50,
                },
              ],
              data: usersStore.listUser,
              tabName: "info",
            },
            {
              columns: [
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 30,
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                  width: 30,
                },
              ],
              data: usersStore.listUser,
              tabName: "contact",
            },
          ]}
        >
          <Button>Export users</Button>
        </Excel>
        </Col>
      </Row>
      <Modal
        title="Modal"
        open={modalAdd}
        onOk={() => {
          setModalAdd(false);
        }}
        onCancel={() => {
          setModalAdd(false);
        }}
        footer={null}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={onAddUser}
        >
          <Form.Item
          className="ip-id"
            name="id"
            label="Id"
            hidden="true"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="username"
            label="UserName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        dataSource={usersStore.listUser}
        // rowSelection={rowSelection}
        pagination={{ showSizeChanger: false }}
      >
        <Column title="Id" dataIndex="id" key="id"></Column>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="UserName" dataIndex="username" key="username" />
        <Column title="Email" dataIndex="email" key="email" />
        {/* <Column
          title="Address"
          dataIndex="address"
          key="address"
          render={(address) => (
            <>
              {address.map((address) => {
                let color = address.length > 5 ? "geekblue" : "green";
          if (address === "tester") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={address}>
              {address.toUpperCase()}
            </Tag>
          );
          })}
            </>
          )}
        /> */}
        <Column
          title="Action"
          key="action"
          dataIndex="id"
          render={(id) => (
            <Space size="middle">
              <Button type="primary" onClick={() => showModalEdit(id)}>
                Edit
              </Button>
              <Button danger onClick={()=>{deletee(id)}}>Delete</Button>
            </Space>
          )}
        />
      </Table>
    </StyledTable>
  );
};
export default Tabled;
