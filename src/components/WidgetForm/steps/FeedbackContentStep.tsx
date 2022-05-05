import { CloseButton } from "../../closeButton";
import { FeedbackType, feedbackTypes } from "../indexForm";
import {ArrowLeft, Camera} from "phosphor-react"
import { ScreenShot } from "../ScreenShot";
import { FormEvent, useState } from "react";

interface FeedbackProps {
    type: FeedbackType
    restartFeedback: () => void
    onFeedbackSent: (action: boolean) => void
}

export function FeedbackContentStep(props: FeedbackProps) {
    const [screenShot, setScreenShot] = useState<string | null>(null)
    const [comment, setComment] = useState("")

    const feedbackTypeInfo = feedbackTypes[props.type]

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        props.onFeedbackSent(true)
    }

    return (
        <>    
        <header>
            <CloseButton />

            <button type="button" className="top-5 left-5 absolute" onClick={props.restartFeedback}>
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                {feedbackTypeInfo.title}
            </span>
        </header>


        <form onSubmit={handleSubmit} className="my-4 w-full">
            <textarea 
                className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-500 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none"
                placeholder="Conte-me mais..."
                onChange={(event) => setComment(event.target.value)}
            >
            </textarea>

            <footer className="flex gap-2 mb-2 mt-1">
                <ScreenShot 
                onScreenShot={setScreenShot}
                screenShot={screenShot}
                />

                <button
                    type="submit"
                    disabled={comment.length === 0 }
                    className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50"
                >
                    Enviar
                </button>
            </footer>

            

        </form>

    </>
    )
}