import {
  ButtonBox,
  CloseButton,
  ContainerSize,
  PhoneProjectLayout,
  ModalBackground,
  ProjectModal,
  PhoneImgBox,
  PhoneImg,
  DetailBox,
  TitleBox,
  TitleH4,
  Description,
  TextBoxGray,
  PageLink,
  Ul,
  List
} from '../css/styled-component'
import { MdOutlineClose } from 'react-icons/md'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GreenJangteoDetail = ({ setModalOpenGJ }: any) => {
  const closeModalGJ = () => {
    setModalOpenGJ(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <ModalBackground>
      <ContainerSize>
        <ProjectModal>
          <ButtonBox>
            <CloseButton onClick={closeModalGJ}>
              <MdOutlineClose />
            </CloseButton>
          </ButtonBox>
          <PhoneProjectLayout>
            <PhoneImgBox>
              <PhoneImg src="img/green-jangteo.gif" />
            </PhoneImgBox>
            <DetailBox>
              <TitleBox>
                <TitleH4>green-jangteo</TitleH4>
                <Description>- 친환경 컨셉의 마켓플레이스</Description>
              </TitleBox>
              <Description>
                인원 : <TextBoxGray>팀프로젝트</TextBoxGray> (FE 2명, BE 2명)
              </Description>
              <Description>기간 : 23.11.16 ~ 24.01.04</Description>
              <Ul>
                <List>
                  AWS S3를 활용하여 상품 이미지 및 프로필 이미지를 등록하는
                  기능을 구현
                  <br />- FileReader를 통해 이미지 미리보기 구현
                </List>
                <List>
                  사용자가 필요한 제품 및 보고 싶은 분류의 제품을 선택해서 볼 수
                  있도록 2단 구조로 설계하여 UX 사용성 향상
                </List>
                <List>pagination 기능 구현</List>
              </Ul>
              <Description>
                Github :&nbsp;
                <PageLink
                  href="https://github.com/zerobase-first-one/green-jangteo-frontend"
                  target="_blank">
                  https://github.com/zerobase-first-one/green-jangteo-frontend
                </PageLink>
              </Description>
              <Description>
                사이트 :&nbsp;
                <PageLink
                  href="https://green-jangteo.vercel.app/"
                  target="_blank">
                  https://green-jangteo.vercel.app/
                </PageLink>
              </Description>
            </DetailBox>
          </PhoneProjectLayout>
        </ProjectModal>
      </ContainerSize>
    </ModalBackground>
  )
}

export default GreenJangteoDetail
