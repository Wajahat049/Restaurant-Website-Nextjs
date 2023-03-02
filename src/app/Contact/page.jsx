'use client'
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google'
import Logo from "../../assets/logo.jpg"
import styles from '../page.module.css'

const Navbar = dynamic(() => import('../../app/Navbar/page'),{
    ssr: false,
  });
  
  const Header = dynamic(() => import('../../app/Header/page'),{
    ssr: false,
  });

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const { TextArea } = Input;

const ContactUs = () => (
    <div className={styles.main}>
         <Navbar/>
      <Header/>
      <Row style={{justifyContent:'center',margin:"1%"}}>
<Image style={{width:"100%",height:"500px",borderRadius:"10px"}} src={require("../../assets/contact.jpg")}/>

        <Col style={{textAlign:'center',fontWeight:"bold",margin:"2%"}} span={24}>
        <h1>CONTACT US</h1>
        </Col>
        <Col style={{margin:"20px 0px 20px 35%"}} span={24}>
  <Form
  size='large'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="Name"
      rules={[
        {
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
      </Form.Item>

      <Form.Item
      label="Phone No."
      name="Phone No."
      rules={[
        {
          message: 'Please input your phone no.!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      label="Message"
      name="Message"
      rules={[
        {
          message: 'Please input your message!',
        },
      ]}
    >
       <TextArea rows={4} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Col>
  </Row>
  </div>
);

export default ContactUs;