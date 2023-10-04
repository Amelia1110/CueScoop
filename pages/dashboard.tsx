import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Col, FloatButton, Row } from "antd";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
    const [cardsOpen, setCardsOpen] = useState(true);


    //TODO when changing to list:
    /*
    export const Notifications = ({ messages }) => (
  <AnimatePresence>
    {messages.map(({ id, content }) => (
      <motion.li
        key={id}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {content}
      </motion.li>
    ))}
  </AnimatePresence>
)
    */

    return (
        <Row className="h-screen"> 
            <FloatButton.Group 
                icon={<UserOutlined />} 
                trigger="hover" 
                style={{ left: 30}}  
            >
                <FloatButton icon={<LogoutOutlined />}/>
                <FloatButton/>
                <FloatButton/> 
            </FloatButton.Group> 
            <Col span={13} className="grid place-content-center">
                <Image 
                    src={`/strawberry_icecream.png`}
                    width={500} 
                    height={500}
                    alt="Pink Popsicle"
                />
                <Button onClick={() => setCardsOpen(!cardsOpen)}>Start Studying (temp button)</Button>
            </Col>
            <Col span={11} className="p-10 pl-0 h-full overflow-auto">

                <AnimatePresence>
                <Row gutter={[0, 10]}>
                    <Col span={24}>
                        <Card title="hello" className="shadow-md">
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="hello" className="shadow-md">
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="hello" className="shadow-md">
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="hello" className="shadow-md">
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="hello" className="shadow-md">
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="hello" className="shadow-md">
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
                </AnimatePresence>
            </Col>
        </Row>
    )
}