
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from "react";
import { BookRatings } from '../BookRatings';
import { RatingStars } from '../RatingStars';
import { Heading, Text } from '../Typography';
import { BookInfo } from './BookInfo';
import { BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay } from './styles';

type RatingsDialogProps = {
    children: ReactNode
}
export const RatingsDialog = ({ children }: RatingsDialogProps) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>

            <Dialog.Portal>
                <DialogOverlay />

                <DialogContent>
                    <DialogClose>
                        <X size={24}/>
                    </DialogClose>

                    <BookDetailsWrapper>
                        <BookDetailsContainer>
                            <BookImage width={171} height={242} alt='Book name' src='https://github.com/Diego-Batista.png'/> 

                            <BookContent>
                                <div>
                                    <Heading size='sm'>
                                        Book name
                                    </Heading>
                                    <Text color='gray-300' css={{ marginTop: '$2'}}>Joe Doe</Text>
                                </div>
                                <div>
                                    <RatingStars rating={4} size='md'/>
                                    <Text color='gray-400' size='sm' css={{ marginTop: '$1'}}>2 avaliações</Text>
                                </div>
                            </BookContent>
                        </BookDetailsContainer>
                        <BookInfos>
                            <BookInfo 
                                icon={<BookmarkSimple/>}
                                title='Categorias'
                                info='Ficção, Ação'
                            />
                            <BookInfo 
                                icon={<BookOpen/>}
                                title='Páginas'
                                info='217'
                            />
                        </BookInfos>
                    </BookDetailsWrapper>

                    <BookRatings />
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}