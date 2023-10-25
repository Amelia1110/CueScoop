import CardList from "@/components/ToDeleteCardList";
import { CalendarOutlined, DeleteOutlined, EditOutlined, GlobalOutlined, LockFilled, LogoutOutlined, PlusOutlined, QuestionOutlined, RightOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Col, FloatButton, Row } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
        <Row className="h-screen w-screen">
            <FloatButton.Group 
                icon={<UserOutlined />} 
                trigger="hover" 
                style={{ left: 30}}  
            >
                <FloatButton icon={<LogoutOutlined />}/>
                <FloatButton icon={<QuestionOutlined />}/>
                <FloatButton icon={<SettingOutlined />}/> 
            </FloatButton.Group> 
            <motion.div 
                initial={{ x: "100%" }} // Initial position
                animate={cardsOpen ? { x: "0%" } : {x: "41.66666%"}} // Animation when component is present
                transition={{ duration: 0.4 }} // Animation duration
                className="grid place-content-center w-13/24">
                <Image 
                    src={`/CueScoop/strawberry_icecream.png`}
                    width={500} 
                    height={500}
                    alt="Pink Popsicle"
                />
                <h1 onClick={() => setCardsOpen(!cardsOpen)} className="justify-self-center font-semibold text-2xl pt-4 text-zinc-500">Start Studying &gt;</h1>
            </motion.div>
            <AnimatePresence>
            {cardsOpen && (
            <motion.div
                key="cards"
                initial={{ x: "100%" }} // Initial position
                animate={{ x: "0%" }} // Animation when component is present
                exit={{ x: "100%" }} // Slide out to the right
                transition={{ duration: 0.4 }} // Animation duration
                className="h-full overflow-auto w-11/24 bg-green"
            >
                <div className="sticky top-0 z-10 bg-zinc-100 pt-10 pr-10 pb-4">
                    <Row gutter={[8, 0]}>
                    <Col span={21}>
                        <Card className="shadow-md h-12 flex items-center justify-center hover:bg-zinc-200 hover:border-zinc-200">
                            <div style={{ lineHeight: '1' }}>
                                <PlusOutlined className="text-xl text-gray-600" />
                            </div>
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card className="shadow-md h-12 flex items-center justify-center hover:bg-zinc-200 hover:border-zinc-200">
                            <div style={{ lineHeight: '1' }}>
                                <CalendarOutlined className="text-xl text-gray-600" />
                            </div>
                        </Card>
                    </Col>
                    </Row>
                </div>
                <CardList/>
            </motion.div>
            )}
        </AnimatePresence>
        </Row>
    )
}