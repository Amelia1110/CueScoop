import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, FloatButton, Row } from "antd";
import Image from "next/image";

export default function Dashboard() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
                    src={`${prefix}/choco_icecream.png`}
                    width={500} 
                    height={500}
                    alt="Pink Popsicle"
                />
            </Col>
            <Col span={11} className="p-10 pl-0 h-full overflow-auto">
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
            </Col>
        </Row>
    )
}