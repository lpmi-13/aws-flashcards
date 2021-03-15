const FlashCard = ({ description, functionName }) => {
    return (
        <div className="flashcard">
            <div className="function-name">{`name: ${functionName}`}</div>
            <div className="description">{`description: ${description || "no description given"}`}</div>
        </div>
    )
}

export default FlashCard;