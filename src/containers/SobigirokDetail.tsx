import {
  ButtonBox,
  CloseButton,
  ContainerSize,
  Description,
  DetailBox,
  ModalBackground,
  ProjectModal,
  TextBoxGray,
  TitleH4,
  TitleBox,
  WebImg,
  WebImgBox,
  WebProjectLayout,
  PageLink,
  Ul,
  List
} from '../css/styled-component'
import { MdOutlineClose } from 'react-icons/md'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SobigirokDetail = ({ setModalOpenS }: any) => {
  const closeModalS = () => {
    setModalOpenS(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
      <ModalBackground>
        <ContainerSize>
          <ProjectModal>
            <ButtonBox>
              <CloseButton onClick={closeModalS}>
                <MdOutlineClose />
              </CloseButton>
            </ButtonBox>
            <WebProjectLayout>
              <WebImgBox>
                <WebImg src="img/sobigirok.png" />
              </WebImgBox>
              <DetailBox>
                <TitleBox>
                  <TitleH4>Sobigirok</TitleH4>
                  <Description>
                    - 하루의 소비를 기록할 수 있는 가계부 웹프로젝트
                  </Description>
                </TitleBox>
                <Description>
                  인원 : <TextBoxGray>개인프로젝트</TextBoxGray>
                </Description>
                <Description>기간 : 23.11.16 ~ 24.01.04</Description>
                <Ul>
                  <List>firebase를 활용하여 구글 로그인 구현</List>
                  <List>
                    회원가입에 필요한 형식에 조건을 지정하고 react-hook-form
                    라이브러리를 통해 유효성 검사 진행
                  </List>
                  <List>pagination 기능 구현</List>
                </Ul>
                <Description>
                  사이트 :&nbsp;
                  <PageLink
                    href="https://jiiiiiy.github.io/project/"
                    target="_blank">
                    https://jiiiiiy.github.io/project/
                  </PageLink>
                </Description>
              </DetailBox>
            </WebProjectLayout>
          </ProjectModal>
        </ContainerSize>
      </ModalBackground>
    </>
  )
}

export default SobigirokDetail
