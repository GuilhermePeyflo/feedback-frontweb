import { CloseButton } from "../../closeButton"
import { FeedbackType, feedbackTypes } from "../indexForm"


interface FeedbackProps {
    onFeddbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep(props: FeedbackProps) {
    return (
        <>    
        <header>
            <CloseButton />

            <span className="text-xl leading-6">Deixe seu Feedback</span>
        </header>


        <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {

            return (
                <button 
                key={key}
                className="bg-zinc-700 rounded-lg py-5 w-36 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none"
                onClick={() => props.onFeddbackTypeChanged(key as FeedbackType)}
                type="button"
                >
                    <img src={value.image.source} alt={value.image.alt}/>
                    <span>{value.title}</span>
                </button>
            )
        }) }

    </div>

    </>
    )
}