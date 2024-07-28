import {
  ButtonBox,
  CloseButton,
  ContainerSize,
  Description,
  DetailBox,
  PageLink,
  ModalBackground,
  ProjectModal,
  TextBoxGray,
  TitleBox,
  TitleH4,
  WebImg,
  WebImgBox,
  WebProjectLayout
} from '../css/styled-component'
import { MdOutlineClose } from 'react-icons/md'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PortfolioWPDetail = ({ setModalOpenWP }: any) => {
  const closeModalWP = () => {
    setModalOpenWP(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
      <ModalBackground>
        <ContainerSize>
          <ProjectModal>
            <ButtonBox>
              <CloseButton onClick={closeModalWP}>
                <MdOutlineClose />
              </CloseButton>
            </ButtonBox>
            <WebProjectLayout>
              <WebImgBox>
                <WebImg src="img/portfolio_wp.gif" />
              </WebImgBox>
              <DetailBox>
                <TitleBox>
                  <TitleH4>Portfolio_WebPublisher</TitleH4>
                  <Description>
                    - HTML, CSS, JavaScript, JQuery를 활용한 클론코딩 및 리뉴얼
                    프로젝트
                  </Description>
                </TitleBox>
                <Description>
                  인원 : <TextBoxGray>개인프로젝트</TextBoxGray>
                </Description>
                <Description>기간 : 23.03 ~ 23.05</Description>
                <Description>
                  사이트 :&nbsp;
                  <PageLink
                    href="https://jiiiiiy.github.io/portfoliowp/"
                    target="_blank">
                    https://jiiiiiy.github.io/portfoliowp/
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

export default PortfolioWPDetail
