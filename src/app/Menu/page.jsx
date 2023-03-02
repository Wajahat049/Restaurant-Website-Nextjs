'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google'
import { Col, Row, Button } from 'antd';
import Logo from "../../assets/logo.jpg"
import styles from '../page.module.css'

// const inter = Inter({ subsets: ['latin'] })

const Navbar = dynamic(() => import('../../app/Navbar/page'),{
    ssr: false,
  });
  
  const Header = dynamic(() => import('../../app/Header/page'),{
    ssr: false,
  });

export default function Menu() {
  return (
    <>
    <Navbar/>
      <Header/>
      <Row  >

<Image style={{width:"100%",height:"500px"}} src={require("../../assets/menu.jpg")}/>
      
      {/* <Button className={styles.NavbarButton}   shape="round"   size={"large"}>
            Create Account
          </Button> */}
    </Row>
    </>
  )
}
