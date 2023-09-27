import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, FloatButton, Row } from "antd";

export default function Dashboard() {
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
            <Col span={14}>
            </Col>
            <Col span={10} className="p-10 h-full overflow-auto">
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