import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Col, FloatButton, Row } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
   useEffect(() => {
    console.log(cardsOpen);
   }, [cardsOpen])

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
            <AnimatePresence>
            <motion.div
                initial={{ width: "55.166666%" }} // Initial position
                animate={cardsOpen ? { width: "55.166666%" }: {width: "100%" }} // Animation when component is present
                transition={{ duration: 0.5 }} // Animation duration
                className="grid place-content-center"
            >
                <Image 
                    src={`/strawberry_icecream.png`}
                    width={500} 
                    height={500}
                    alt="Pink Popsicle"
                />
                <Button onClick={() => setCardsOpen(!cardsOpen)}>Start Studying (temp button) &gt;</Button>
            </motion.div>
            {cardsOpen && (
            <motion.div
                key="cards"
                initial={{ x: "100%" }} // Initial position
                animate={{ x: "0%" }} // Animation when component is present
                exit={{ x: "100%" }} // Slide out to the right
                transition={{ duration: 0.5 }} // Animation duration
                className="p-10 pl-0 h-full overflow-auto w-11/24"
            >
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
            </motion.div>
            )}
        </AnimatePresence>
        </Row>
    )
}