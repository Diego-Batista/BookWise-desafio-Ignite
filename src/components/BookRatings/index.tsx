import { useSession } from "next-auth/react"
import { Fragment, useState } from "react"
import { LoginDialog } from "../LoginDialog"
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
    const { status, data: session } = useSession()

    const isAuthenticated = status === "authenticated"

    const [showForm, setShowForm] = useState(false)
    const handleRate = () => {
        if(!isAuthenticated) return
        setShowForm(true)
    }

    const RatingWrapper = isAuthenticated ? Fragment : LoginDialog

    const sortedRatingsByDate = ratings.sort((a, b ) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })

    const canRate = ratings.every(x => x.user_id !== session?.user.id)

    return (
        <Container>
            <header>
                <Text>Avaliações</Text>
                {canRate && 
                    <RatingWrapper>
                        <Link withoutIcon onClick={handleRate} text="Avaliar"/>
                    </RatingWrapper>
                }
            </header>

            <section>
                {showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)}/>}
               {sortedRatingsByDate?.map((rating) => (
                <UserRatingCard key={rating.id} rating={rating}/>
               ))}
            </section>
        </Container>
    )
}