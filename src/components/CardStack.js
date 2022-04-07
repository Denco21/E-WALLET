import Card from './Card';

function CardStack(props) {
    /* separerar ut varje kort från cards */
    const cardstack = props.cards.map((card, index) => {
        return (
            <Card key={inde} card={card} selectCard={props.selectCard}/>
        )
    })

    return(
        <div>
        {cardstack}
        </div>

    )
}

export default CardStack;
