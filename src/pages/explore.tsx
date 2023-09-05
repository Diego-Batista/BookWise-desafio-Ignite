import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import { Input } from "@/components/Ui/Form/Input";
import { PageTitle } from "@/components/Ui/PageTitle";
import { Tag } from "@/components/Ui/Tag";
import { ExploreContainer, TagsContainer } from "@/styles/pages/explore";
import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { NextPageWithLayout } from "./_app";

const ExplorePage: NextPageWithLayout = () => {
    const [search, setSearch] = useState('')

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
                <Tag active>
                    Todos
                </Tag>
                <Tag>
                    Computação
                </Tag>
            </TagsContainer>
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