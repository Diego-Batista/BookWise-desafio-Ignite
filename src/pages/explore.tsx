import { BookCard, BookWithAvgRating } from "@/components/BookCard";
import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import { Input } from "@/components/Ui/Form/Input";
import { PageTitle } from "@/components/Ui/PageTitle";
import { Tag } from "@/components/Ui/Tag";
import { api } from "@/lib/axios";
import { BooksGrid, ExploreContainer, TagsContainer } from "@/styles/pages/explore";
import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NextPageWithLayout } from "./_app";

const ExplorePage: NextPageWithLayout = () => {
    const [search, setSearch] = useState('')
    const [ selectedCategory, setSelectedCategory ] = useState< string | null >(null)

    const { data: categories } = useQuery<Category[]>(["categories"], async () => {
        const { data } = await api.get("/books/categories");
        return data?.categories ?? []
      })

      const { data: books } = useQuery<BookWithAvgRating[]>(["books", selectedCategory], async () => {
        const { data } = await api.get("/books", {
          params: {
            category: selectedCategory
          }
        });
        return data?.books ?? []
      })

      const filteredBooks = books?.filter((book) => {
        return book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
      })

    return (
        <ExploreContainer>
            <header>
                <PageTitle title="Explorar" icon={<Binoculars size={32}/>} />

                <Input 
                    placeholder="Buscar livro ou autor."
                    icon={<MagnifyingGlass size={20} />}
                    css={{
                        maxWidth: 433
                    }}
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />
            </header>

            <TagsContainer>
                    <Tag active={selectedCategory === null} onClick={() => setSelectedCategory(null)}>
                        Tudo
                    </Tag>
                {categories?.map(category => (
                    <Tag key={category.id} active={selectedCategory === category.id} onClick={() => setSelectedCategory(category.id)}>
                        {category.name}
                    </Tag>
                ))}
            </TagsContainer>

            <BooksGrid>
                {filteredBooks?.map((book) => (
                    <BookCard key={book.id} size="lg" book={book} />
                ))}
            </BooksGrid>
        </ExploreContainer>
    )
}

ExplorePage.getLayout = (page) => {
    return (
      <div>
        <DefaultLayout title="Explorar">
          {page}
        </DefaultLayout>
      </div>
    )
  }
  
  export default ExplorePage;