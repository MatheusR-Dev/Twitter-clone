import { Answer, AnswerField, Avatar, Background, CloseModalButton, DataIcon, Description, Dot, GifIcon, Icons, 
  ImageIcon, MapIcon, ModalContent, ModalImg, ModalWrapper, Status, Submit } from "./styles"

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: React.FC<Props> = ({showModal, setShowModal}) => {
    return(
        <>
        {showModal ? (
            <Background>
                <ModalWrapper showModal={showModal}>
                   <ModalImg />
                    
                    <ModalContent>
                        
                            <strong>Rocketseat</strong>
                            <span>@rocketseat</span>
                            <Dot />
                            <time>13 de jan de 2022</time>
                        
                    </ModalContent>        

                    <Description>Foguete não tem ré 🚀</Description>

                    <Answer>
                        <span>Respondendo a</span>
                        <a href="#">@rocketseat</a>
                    </Answer>

                    <AnswerField>
                        <textarea aria-label="Texto do Tweet" autoCapitalize="sentences" autoComplete="on" autoCorrect="on" placeholder="Tweete sua Resposta"></textarea>
                    </AnswerField>

                    <Avatar />

                    <Icons>

                      <Status>
                        <ImageIcon />
                      </Status>

                      <Status>
                        <GifIcon />
                      </Status>

                      <Status>
                        <MapIcon />
                        1
                      </Status>

                      <Status>
                        <DataIcon />
                      </Status>
                      
                    </Icons>
                    <Submit>Responder</Submit>
                    
                    <button onClick={() => setShowModal(false)} >
                      <CloseModalButton />
                    </button>
                </ModalWrapper> 
            </Background>
        ): null}

        </>
    )
}