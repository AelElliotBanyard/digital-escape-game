'use client'

import { useState } from "react"

export default function rätsel10() {
    const [solved, setSolved] = useState(false)
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl w-fit mx-auto">Lebende Fäden</h1>
            <p className="text-xl text-center">
                Ein Gewebe aus Fäden, kunstvoll und fein, <br />
                Ich erzähle Geschichten, lasse Träume lebendig sein. <br />
                Von Wand zu Wand, in Farbenpracht, <br />
                Errate mich richtig, um im Spiel voranzuschreiten, mit Bedacht.
                <br />
                Was bin ich?

            </p>
            <input type="text" className="bg-gray-300 text-black" onChange={e => {
                if (e.target.value === "Gemälde" | e.target.value === "gemälde") {
                    setSolved(true)
                    return
                }
                setSolved(false)
            }} />
            {solved ? <h2>✅ You are right</h2> : null}
        </div>
    )
}