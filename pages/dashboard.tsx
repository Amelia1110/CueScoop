import { DeleteOutlined, EditOutlined, GlobalOutlined, LockFilled, LogoutOutlined, PlusOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
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
        <Row className="h-screen w-screen"> 
            <FloatButton.Group 
                icon={<UserOutlined />} 
                trigger="hover" 
                style={{ left: 30}}  
            >
                <FloatButton icon={<LogoutOutlined />}/>
                <FloatButton/>
                <FloatButton/> 
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
                <Button onClick={() => setCardsOpen(!cardsOpen)}>Start Studying (temp button) &gt;</Button>
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
                    <Col span={24}>
                        <Card className="shadow-md h-12 flex items-center justify-center">
                            <div style={{ lineHeight: '1' }}>
                                <PlusOutlined className="text-xl text-gray-600" />
                            </div>
                        </Card>
                    </Col>
                </div>
                <Row gutter={[0, 10]} className="pr-10 pb-10">
                    <Col span={24}>
                        <Card className="shadow-md">
                            <div className="grid grid-cols-2 grid-rows-2 items-center">
                                <div className="flex gap-5">
                                    <h1 className="font-bold text-lg">Set Title</h1>
                                    <div className="flex gap-2">
                                        <EditOutlined className="text-gray-400 text-lg"/>
                                        <DeleteOutlined className="text-gray-400 text-lg"/>
                                    </div>
                                </div>
                                <RightOutlined className="justify-self-end text-xl row-span-2 p-2 text-gray-600"/>
                                <div className="flex gap-2 text-gray-500">
                                    <LockFilled/>
                                    <p className="font-semibold">20 Terms</p>
                                </div>  
                            </div>     
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="shadow-md">
                            <div className="grid grid-cols-2 grid-rows-2 items-center">
                                <div className="flex gap-5">
                                    <h1 className="font-bold text-lg">Set Title</h1>
                                    <div className="flex gap-2">
                                        <EditOutlined className="text-gray-400 text-lg"/>
                                        <DeleteOutlined className="text-gray-400 text-lg"/>
                                    </div> 
                                </div>
                                <RightOutlined className="justify-self-end text-xl row-span-2 p-2 text-gray-600"/>
                                <div className="flex gap-2 text-gray-500">
                                    <GlobalOutlined/>
                                    <p className="font-semibold">20 Terms</p>
                                </div>  
                            </div>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="shadow-md">
                            <div className="grid grid-cols-2 grid-rows-2 items-center">
                                <div className="flex gap-5">
                                    <h1 className="font-bold text-lg">Set Title</h1>
                                    <div className="flex gap-2">
                                        <EditOutlined className="text-gray-400 text-lg"/>
                                        <DeleteOutlined className="text-gray-400 text-lg"/>
                                    </div> 
                                </div>
                                <RightOutlined className="justify-self-end text-xl row-span-2 p-2 text-gray-600"/>
                                <div className="flex gap-2 text-gray-500">
                                    <GlobalOutlined/>
                                    <p className="font-semibold">20 Terms</p>
                                </div>  
                            </div>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="shadow-md">
                            <div className="grid grid-cols-2 grid-rows-2 items-center">
                                <div className="flex gap-5">
                                    <h1 className="font-bold text-lg">Set Title</h1>
                                    <div className="flex gap-2">
                                        <EditOutlined className="text-gray-400 text-lg"/>
                                        <DeleteOutlined className="text-gray-400 text-lg"/>
                                    </div> 
                                </div>
                                <RightOutlined className="justify-self-end text-xl row-span-2 p-2 text-gray-600"/>
                                <div className="flex gap-2 text-gray-500">
                                    <GlobalOutlined/>
                                    <p className="font-semibold">20 Terms</p>
                                </div>  
                            </div>     
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="shadow-md">
                            <div className="grid grid-cols-2 grid-rows-2 items-center">
                                <div className="flex gap-5">
                                    <h1 className="font-bold text-lg">Set Title</h1>
                                    <div className="flex gap-2">
                                        <EditOutlined className="text-gray-400 text-lg"/>
                                        <DeleteOutlined className="text-gray-400 text-lg"/>
                                    </div>
                                </div>
                                <RightOutlined className="justify-self-end text-xl row-span-2 p-2 text-gray-600"/>
                                <div className="flex gap-2 text-gray-500">
                                    <LockFilled/>
                                    <p className="font-semibold">20 Terms</p>
                                </div>  
                            </div>     
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="shadow-md">
                            <div className="grid grid-cols-2 grid-rows-2 items-center">
                                <div className="flex gap-5">
                                    <h1 className="font-bold text-lg">Set Title</h1>
                                    <div className="flex gap-2">
                                        <EditOutlined className="text-gray-400 text-lg"/>
                                        <DeleteOutlined className="text-gray-400 text-lg"/>
                                    </div>
                                </div>
                                <RightOutlined className="justify-self-end text-xl row-span-2 p-2 text-gray-600"/>
                                <div className="flex gap-2 text-gray-500">
                                    <LockFilled/>
                                    <p className="font-semibold">20 Terms</p>
                                </div>  
                            </div>     
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card className="shadow-md">
                            <div className="grid grid-cols-2 grid-rows-2 items-center">
                                <div className="flex gap-5">
                                    <h1 className="font-bold text-lg">Set Title</h1>
                                    <div className="flex gap-2">
                                        <EditOutlined className="text-gray-400 text-lg"/>
                                        <DeleteOutlined className="text-gray-400 text-lg"/>
                                    </div> 
                                </div>
                                <RightOutlined className="justify-self-end text-xl row-span-2 p-2 text-gray-600"/>
                                <div className="flex gap-2 text-gray-500">
                                    <GlobalOutlined/>
                                    <p className="font-semibold">20 Terms</p>
                                </div>  
                            </div>
                        </Card>
                    </Col>
                </Row>
            </motion.div>
            )}
        </AnimatePresence>
        </Row>
    )
}