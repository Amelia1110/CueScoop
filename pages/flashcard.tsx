import { LeftOutlined, RightOutlined, StarFilled, StarOutlined, SyncOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";

export default function FlashCard() {
    const [cardStatus, setCardStatus] = useState("definition");

    // TODO: Change this so it's based on database properties
    const [starred, setStarred] = useState(false);
    const [comfort, setComfort] = useState("Yellow");

    const renderStar = (starred: any) => {
        if (starred) {
            return (
                <div onClick={() => setStarred(!starred)}>
                    <StarFilled className="absolute top-8 right-8 text-2xl text-gray-400"/>
                </div>
            );
        }
        else {
            return (
                <div onClick={() => setStarred(!starred)}>
                    <StarOutlined className="absolute top-8 right-8 text-2xl text-gray-400"/>
                </div>
            );
        }
    }

    const renderComfort = (comfort: any) => {
        if (comfort === "Red") {
            return (
                <div className="bg-red-400 border-red-500 border w-4 h-4 rounded-full" onClick={() => setComfort("Green")}/>
            );
        }
        if (comfort === "Yellow") {
            return (
                <div className="bg-yellow-300 border-yellow-500 border w-4 h-4 rounded-full" onClick={() => setComfort("Red")}/>
            );
        }
        if (comfort === "Green") {
            return (
                <div className="bg-lime-400 border-lime-600 border w-4 h-4 rounded-full" onClick={() => setComfort("Yellow")}/>
            );
        }
    }

    return (
        <main className="h-screen grid place-content-center gap-6">
            <div className="flex justify-between">
                <LeftOutlined className="text-xl text-gray-600"/>
                <p className="text-lg font-light">1 of 24</p>
                <RightOutlined className="text-xl text-gray-600"/>
            </div>
            <Card className="w-[50rem] h-[28rem] rounded-2xl grid place-content-center shadow-md">
                {renderStar(starred)}
                <p className=" text-3xl font-semibold ">Card Content</p>
            </Card>
            <div className="flex justify-between items-center mx-10">
                <SyncOutlined className="text-xl text-gray-600"/>
                <p className="text-lg font-light">Flashcard Set Name</p>
                {renderComfort(comfort)}
            </div>
        </main>
    )
}