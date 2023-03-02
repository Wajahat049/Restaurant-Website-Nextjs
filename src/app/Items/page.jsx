'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google'
import { Col, Row, Button, Card } from 'antd';
import styles from '../page.module.css'
import { Tabs } from 'antd';
import { TabsProps } from 'antd';


const Navbar = dynamic(() => import('../../app/Navbar/page'),{
    ssr: false,
  });
  
  const Header = dynamic(() => import('../../app/Header/page'),{
    ssr: false,
  });

const onChange = (key) => {
  console.log(key);
};

function FoodItem({type,heading}) {

  const { Meta } = Card;
  const [food,setFood] = useState([])

    useEffect(()=>{


        fetch(`https://free-food-menus-api-production.up.railway.app/${type}`)
        .then((response) => response.json())
        .then((data) => setFood(data));
      
      },[])


    return (
        <Row>
        <Col style={{textAlign:"center",fontWeight:"bold",margin:20,marginTop:50,color:"black"}} span={24}>
        <h1>{heading}</h1>
        </Col>
        {food?.map((item)=>(
        <Col span={4}>
        <Card
    hoverable
    style={{ width: 180,margin:20,height:350 }}
    cover={<img alt="example" src={item.img} />}
  >
    <Meta title={`${item.name}`} description={item.dsc} />
    <span style={{fontSize:"16px",fontWeight:"bold",marginTop:"15px"}}>${item.price}</span>
  </Card>
        </Col>
        ))}
      </Row>
    )
  }

const items = [
  {
    key: '1',
    label: `BBQs`,
    children: <FoodItem type={"bbqs"} heading={"BBQs"} />,
  },
  {
    key: '2',
    label: `BURGERS`,
    children: <FoodItem type={"burgers"} heading={"BURGERS"} />,
  },
  {
    key: '3',
    label: `FRIED CHICKEN`,
    children: <FoodItem type={"fried-chicken"} heading={"FRIED CHICKEN"} />,
  },
  {
    key: '4',
    label: `SANDWICHES`,
    children: <FoodItem type={"sandwiches"} heading={"SANDWICHES"} />,
  },
  {
    key: '5',
    label: `STEAKS`,
    children: <FoodItem type={"steaks"} heading={"STEAKS"} />,
  },
  {
    key: '6',
    label: `PIZZAS`,
    children: <FoodItem type={"pizzas"} heading={"PIZZAS"} />,
  },
  {
    key: '7',
    label: `ICE CREAMS`,
    children: <FoodItem type={"ice-cream"} heading={"ICE CREAMS"} />,
  },
];



export default function Items() {
    return (
        <div className={styles.main}>
         <Navbar/>
      <Header/>
      <Tabs style={{margin:"10px",fontSize:"20px",fontWeight:"bold",color:"rgb(241,127,22)"}} centered defaultActiveKey="1" items={items} onChange={onChange} />

      </div>
    )
  }
  