'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from "next/link"
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Col, Row, Card } from 'antd'

const Navbar = dynamic(() => import('../app/Navbar/page'),{
  ssr: false,
});

const Header = dynamic(() => import('../app/Header/page'),{
  ssr: false,
});

const Carousel = dynamic(() => import('../app/Carousel/page'),{
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { Meta } = Card;
  const [bestFoods,setBestFoods] = useState([])

  useEffect(()=>{


  fetch('https://free-food-menus-api-production.up.railway.app/best-foods')
  .then((response) => response.json())
  .then((data) => setBestFoods(data));

},[])


  return (
    <div className={styles.main}>
      <Navbar/>
      <Header/>
      <Carousel/>
      <Row>
        <Col style={{textAlign:"center",fontWeight:"bold",margin:20,marginTop:50}} span={24}>
        <h1>BEST FOOD ITEMS</h1>
        </Col>
        {bestFoods?.map((item)=>(
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
    </div>
  )
}
