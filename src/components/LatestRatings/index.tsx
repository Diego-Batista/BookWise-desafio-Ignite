import { ChartLineUp } from "@phosphor-icons/react"
import { RatingCard } from "../RatingCard"
import { Text } from "../Typography"
import { PageTitle } from "../Ui/PageTitle"
import { Container } from "./styles"

export const LatestRatings = () => {
    return (
        <Container>
            <PageTitle title="Início" icon={<ChartLineUp size={32}/>} css={{
                marginBottom: 40
            }}/>

            <Text size='sm'>Avaliações mais recentes</Text>

            <section>
                {Array.from({ length: 20}).map((_, i) => (
                    <RatingCard key={i} rating={{
                        id: 'aa',
                        rate: 4,
                        user: {
                            name: 'Jhon Doe',
                            avatar_url: 'https://github.com/Diego-Batista.png',
                            email: 'teste@email.com',
                            id: 'sfsdfdgfd',
                            created_at: new Date(),
                        },
                        book: {
                            author: 'Teste',
                            cover_url: 'https://github.com/Diego-Batista.png',
                            created_at: new Date(),
                            id: 'dsfdg',
                            name: 'Algum Livro',
                            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint blanditiis qui distinctio provident quisquam eum recusandae nobis alias eligendi iusto impedit minus numquam voluptates dignissimos officiis cupiditate dolor labore optio ea repudiandae libero minima, obcaecati sit! Facilis repellendus ea voluptas blanditiis doloremque eligendi exercitationem quos incidunt dolorem commodi, similique autem eum quas suscipit amet, explicabo fugiat ut eaque ad accusantium eveniet mollitia sapiente praesentium. Voluptas inventore libero eius dolore tenetur voluptatum fugiat molestias doloribus dicta laudantium assumenda sequi hic, vel facere quaerat distinctio. Facere, voluptatum officia. Distinctio deserunt officiis natus et aperiam. Voluptatem deserunt corporis eos quaerat fugiat aliquid at. Quo dolorum sunt esse delectus minima officiis, impedit exercitationem mollitia odio reprehenderit laudantium nisi expedita adipisci voluptates in doloribus repudiandae, asperiores fuga, distinctio veniam autem voluptatum est deleniti? Sed et nulla asperiores beatae magni illo enim. Labore quam, voluptas tenetur veritatis repellendus neque minus delectus error? Voluptatibus, iusto, laborum saepe autem vitae, aliquid earum error quisquam vel sint culpa eos velit molestias perferendis repellendus rerum? Eius ab voluptas necessitatibus vero dolores excepturi amet nesciunt dolorem perspiciatis, magnam inventore explicabo. Qui animi neque rem quo ut, dolore, hic iste veritatis ducimus eius tempora. Ipsum illo, placeat minus officiis dolor odit magnam.',
                            total_pages: 20
                        },
                        book_id: 'dgfdfhfg',
                        created_at: new Date(),
                        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio mollitia excepturi illum maxime atque possimus optio culpa dolores non molestiae?',
                        user_id: 'sfsdfdgfd'

                    }}/>
                ))}
            </section>
        </Container>
    )
}