import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import { ProfileRatings } from "@/components/ProfileRatings";
import { api } from "@/lib/axios";
import { HomeContainer } from "@/styles/pages/home";
import { Rating } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

export type ProfileData ={
    user: {
        avatar_url: string
        name: string
        member_since: string
    },
    ratings: Rating[]
    readPages: number
    ratedBooks: number
    readAuthors: number
    mostReadCategory?: string
}

const ProfilePage: NextPageWithLayout= () => {
    const router= useRouter()

    const userId = router.query.id as string

    const { data: profile } = useQuery<ProfileData>(['profile', userId], async () => {
        const {data} = await api.get(`/profile/${userId}`)

        return data?.profile ?? {}
    }, {
        enabled: !!userId
    })

    return (
        <HomeContainer>
            <ProfileRatings />
        </HomeContainer>
    )
}

ProfilePage.getLayout = (page: ReactElement) => {
    return (
        <DefaultLayout title="Perfil">
            {page}
        </DefaultLayout>
    )
}

export default ProfilePage