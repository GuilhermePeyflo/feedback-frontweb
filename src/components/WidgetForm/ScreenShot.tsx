import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas"
import { useState } from "react";
import { Loading } from "./Loading";


interface ScreenShotProps {
    onScreenShot: (screenshot: string | null) => void
    screenShot: string | null
}

export function ScreenShot(props: ScreenShotProps) {
    const [isTakingScreenShot, setTakingScreenShot] = useState(false)

    async function handleTake() {
        setTakingScreenShot(true)

        const canvas = await html2canvas(document.querySelector("html")!)
        const base64image = canvas.toDataURL("image/png")

        props.onScreenShot(base64image)
        setTakingScreenShot(false)
    }

    if (props.screenShot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 hover:transition-colors"
                style={{
                    backgroundImage: `url(${props.screenShot})`
                }}
                onClick={() => props.onScreenShot(null)}
            >
                <Trash weight="fill"/>
            </button>
        )
    }

    return (
        <button type="button" 
            className="p-2 bg-zinc-900 rounded-md border-transparent hover:bg-zinc-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            onClick={handleTake}
        >
            
            { isTakingScreenShot ? < Loading /> :<Camera className="w-6 h-6"/>}
        </button>
    )
}