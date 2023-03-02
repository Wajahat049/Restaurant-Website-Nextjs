'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Col, Row, Button } from 'antd';
import Carousel, { consts } from 'react-elastic-carousel'
import styles from '../page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function CarouselSection() {

//     fetch('https://free-food-menus-api-production.up.railway.app/best-foods')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

   const myArrow=({ type, onClick, isEdge })=>{
        const pointer = type === consts.PREV ? <Image width={25} height={25} src={require("../../assets/left-arrow.png")} /> : <Image width={25} height={25} src={require("../../assets/right-arrow.png")} />
        return (
          <Button style={{alignSelf:"center"}}  onClick={onClick} disabled={isEdge}>
            {pointer}
          </Button>
        )
      }

  return (
      <Row style={{marginTop:"10px"}}>
      <Carousel pagination={false} renderArrow={myArrow} itemPadding={[0, 10]} itemPosition={consts.START} itemsToShow={3}  enableSwipe enableAutoPlay >
      <Image width={600} height={200} src={require("../../assets/carousel (1).jpg")}/>
      <Image width={600} height={200} src={require("../../assets/carousel (2).jpg")}/>
      <Image width={600} height={200} src={require("../../assets/carousel (3).jpg")}/>
      <Image width={600} height={200} src={require("../../assets/carousel (4).jpg")}/>
      <Image width={600} height={200} src={require("../../assets/carousel (5).jpg")}/>
      <Image width={600} height={200} src={require("../../assets/carousel (6).jpg")}/>

</Carousel>
{/* <Image style={{width:"100%",height:"400px",marginTop:"20px"}} src={require("../../assets/banner1.jpeg")}/> */}

    </Row>
  )
}
