'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Col, Row, Button } from 'antd';
import Logo from "../../assets/logo.jpg"
import styles from '../page.module.css'
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
      <Row className={styles.Navbar} >
      <Col span={4}>
      <Link className={styles.a} href={"/"}> <Image className={styles.NavbarLogo} src={Logo}/></Link>
      </Col>
      <Col className={styles.NavbarText} span={2}>
      <Link className={styles.a} href={"/"}>Home</Link></Col>
      <Col className={styles.NavbarText} span={2}>
       <Link className={styles.a} href={"/Menu"}> Menu </Link></Col>
      <Col className={styles.NavbarText} span={2}>
      <Link className={styles.a} href={"/Items"}> Items </Link></Col>
      {/* <Col className={styles.NavbarText} span={2}>Blogs</Col> */}
      <Col className={styles.NavbarText} span={2}>
      <Link className={styles.a} href={"/Coupons"}> Coupans </Link></Col>
      <Col className={styles.NavbarText} span={2}>
      <Link className={styles.a} href={"/AboutUs"}> About Us </Link></Col>
      <Col className={styles.NavbarText} span={2}>
      <Link className={styles.a} href={"/Contact"}> Contact </Link> </Col>
      <Col span={2}></Col>
      <Col span={6}>
      <Button className={styles.NavbarButton}   shape="round"   size={"large"}>
        <Image width={20} height={20} style={{marginRight:"10px",color:"white"}} src={require("../../assets/add.png")} />
           
            Order Now

          </Button>
          </Col>
    </Row>
  )
}
