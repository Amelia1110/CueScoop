import { Card } from "antd";
import { useState } from "react";

export default function FlashCard() {
    const [cardStatus, setCardStatus] = useState("definition");

    return (
        <main className="h-screen grid place-content-center">
            <Card className="w-[50rem] h-[28rem] rounded-2xl grid place-content-center text-3xl font-semibold">Card Content</Card>
        </main>
    )
}