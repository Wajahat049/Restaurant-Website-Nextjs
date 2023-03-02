'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Col, Row, Button } from 'antd';
import Logo from "../../assets/logo.jpg"
import styles from '../page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
      <Row className={styles.Header} >
      <Col className={styles.HeaderText} span={4}>Pakistani Food</Col>
      <Col className={styles.HeaderText} span={4}>Chinese Food</Col>
      <Col className={styles.HeaderText} span={4}>Italian Food</Col>
      <Col className={styles.HeaderText} span={4}>French Food</Col>
      <Col className={styles.HeaderText} span={4}>African Food</Col>
      <Col className={styles.HeaderText} span={4}>UK Food</Col>
      {/* <Col className={styles.HeaderText} span={3}>Lunch</Col>
      <Col className={styles.HeaderText} span={3}></Col>
      <Col className={styles.HeaderText} span={3}>Drinks</Col> */}
    </Row>
  )
}
