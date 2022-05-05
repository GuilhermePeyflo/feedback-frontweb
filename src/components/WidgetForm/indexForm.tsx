import { CloseButton } from "../closeButton";

import bugImage from "../../assets/bug.svg"
import ideaImage from "../../assets/light.svg"
import otherImage from "../../assets/cloud.svg"
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";


export const feedbackTypes = {
    Bug: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Imagem de um inseto"
        }
    },
    Idea: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: "Imagem de uma Lâmpada"
        }
    },
    Other: {
        title: "Outro",
        image: {
            source: otherImage,
            alt: "Imagem de uma Nuvem"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [sentFeedback, setSentFeedback] = useState(false)

    function handleRestartFeed() {
        setSentFeedback(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <CloseButton />
            </header>

            { sentFeedback ? (
                <FeedbackSuccessStep restartFeedback={handleRestartFeed}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeddbackTypeChanged={setFeedbackType}/>
                    ) : (
                        <FeedbackContentStep type={feedbackType} restartFeedback={handleRestartFeed} onFeedbackSent={setSentFeedback}/>
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Bem feito pela <a className="underline underline-offset-1" href="https://google.com">Google</a>
            </footer>
        </div>
    )
}