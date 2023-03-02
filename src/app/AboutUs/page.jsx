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

export default function AboutUs() {
  return (
    <div className={styles.main}>
    <Navbar/>
      <Header/>
      <Row style={{margin:"10px"}}  >
<Image style={{width:"100%",height:"500px",margin:"10px",borderRadius:"10px"}} src={require("../../assets/about.jpg")}/>
        <Col style={{color:"rgb(241,127,22)",fontWeight:"bold",margin:"25px"}} span={24}>
        <h1>Our Story</h1>
        </Col>
        {/* <Col span={1}></Col> */}
        <Col style={{marginLeft:"30px",textAlign:"justify",fontSize:"15px"}} span={7}>
        Sometimes we forget that businesses are run by people. And people connect with other people by sharing stories—where they’ve been, what they’ve learned, how they’ve grown. 
        The About Us page is a chance to tell your story. For some restaurants, they’ll want to focus on the executive chef and their background. For others, they may prefer to share the company history. Whatever the story is, it needs to be engaging and interesting if the potential customer is going to read it. 
        </Col>
        
        <Col style={{marginLeft:"30px",textAlign:"justify",fontSize:"15px"}} span={7}>
        “My Italian grandmother taught me how to make pasta from scratch, so here I am,” is not a story.
        “Grandma Giovanna was born in Sicily in 1927. She spent an idyllic childhood eating grapes off the vines from the family vineyard and learning to cook traditional Sicilian food alongside her mother. But when she was 13, a German Panzer division occupied her village, and her life changed forever…” That’s the beginning of an interesting story.
        </Col>
        <Col style={{marginLeft:"30px",textAlign:"justify",fontSize:"15px"}} span={7}>
        “After the occupation, Grandma Giovanna was sent to live with relatives in America, but she continued to cook her traditional Sicilian dishes to remind her of home. Years later, she shared her family recipes with her granddaughter, Marisa, and now Chef Marisa is bringing them to you…”
        Clearly, not every restaurant’s roots are placed in something so dramatic as a daring escape from Sicily during WWII. Sometimes, a few friends just thought it would be cool to open a restaurant. But I’d argue that you can always find an interesting angle. For a good example, check out this About Us page that I wrote for a client, the Stonewall Motor Lodge.
        </Col>
    </Row>
    </div>
  )
}
