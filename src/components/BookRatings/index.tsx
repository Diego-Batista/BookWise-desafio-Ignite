import { useState } from "react"
import { RatingForm } from "../RatingForm"
import { Text } from "../Typography"
import { Link } from "../Ui/Link"
import { RatingWithAuthor, UserRatingCard } from "../UserRatingCard"
import { Container } from "./styles"

type BookRatingsProps = {
    ratings: RatingWithAuthor[]
    bookId: string
}

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
    const [showForm, setShowForm] = useState(false)
    const handleRate = () => {
        setShowForm(true)
    }

    return (
        <Container>
            <header>
                <Text>Avaliações</Text>
                <Link withoutIcon onClick={handleRate} text="Avaliar"/>
            </header>

            <section>
                {showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)}/>}
               {ratings?.map((rating) => (
                <UserRatingCard key={rating.id} rating={rating}/>
               ))}
            </section>
        </Container>
    )
}