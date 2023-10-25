import { DeleteOutlined, EditOutlined, GlobalOutlined, LockFilled, RightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Link from "next/link";

export default function CardList() {
    return (
        <Row gutter={[0, 10]} className="pr-10 pb-10">
                    <Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col>
                    <Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col><Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col><Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col><Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col><Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col><Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col><Col span={24}>
                        <Link href="/flashcard">
                            <Card className="shadow-md hover:bg-zinc-200 hover:border-zinc-200">
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
                        </Link>
                    </Col>
                </Row>
    )
}