import { ProfileData } from "@/pages/profile/[id]"
import { BookOpen, BookmarkSimple, Books, UserList } from "@phosphor-icons/react"
import { Heading, Text } from "../Typography"
import { Avatar } from "../Ui/Avatar"
import { ProfileDetailsItem } from "./ProfileDetailsItem"
import { Container, ProfileDetailsWrapper, UserInfo } from "./styles"

type ProfileDetailsProps = {
    profile: ProfileData
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
    const memberSinceYear = new Date(profile.user.member_since).getFullYear()
    return (
        <Container>
            <UserInfo>
                <Avatar size='lg' src={profile.user.avatar_url} alt={profile.user.name} />
                <Heading size='md' css={{ marginTop: 20 }}>{profile.user.name}</Heading>
                <Text size='sm' color='gray-400'>membro desde {memberSinceYear} </Text>
            </UserInfo>

            <ProfileDetailsWrapper>
                <ProfileDetailsItem 
                    icon={<BookOpen />}
                    info={profile.readPages}
                    label='Páginas lidas'
                />
                <ProfileDetailsItem 
                    icon={<Books />}
                    info={profile.ratedBooks}
                    label='Livros avaliados'
                />
                <ProfileDetailsItem 
                    icon={<UserList />}
                    info={profile.readAuthors}
                    label='Autores lidos'
                />
                {profile.mostReadCategory && (
                    <ProfileDetailsItem 
                        icon={<BookmarkSimple />}
                        info={profile.mostReadCategory}
                        label='Categoris mais lida'
                    />
                )}
            </ProfileDetailsWrapper>
        </Container>
    )
}