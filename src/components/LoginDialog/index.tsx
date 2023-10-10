import { X } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import { AuthButtons } from "../AuthButtons"
import { Heading } from "../Typography"
import { DialogClose, DialogContent, DialogOverlay } from "./styles"

type LoginDialogProps = {
    children: ReactNode
}

export const LoginDialog = ({ children }: LoginDialogProps) => {
    const router = useRouter()

    const paramBookId = router.query.book as string
     return (
        <Dialog.Root>
            <Dialog.DialogTrigger asChild>
            { children }
            </Dialog.DialogTrigger>
            <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                    <DialogClose>
                        <X size={24}/>
                    </DialogClose>

                    <div>
                        <Heading size='xs' color='gray-200' css={{ marginBottom: 40 }}>Faça login para deixar sua avaliação</Heading>
                        <AuthButtons callbackUrl={!!paramBookId ? `/explore?=${paramBookId}` : '/explore'}/>
                    </div>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}