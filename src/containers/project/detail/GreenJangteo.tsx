import {
  PhoneProjectLayout,
  PhoneImgBox,
  PhoneImg,
  DetailBox,
  TitleBox,
  TitleH4,
  Description,
  TextBoxGray,
  PageLink,
  Ul,
  List,
  ListDetail,
  ListDetailUl
} from '../../../styles/styled-component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GreenJangteoDetail = () => {
  return (
    <PhoneProjectLayout>
      <PhoneImgBox>
        <PhoneImg src="img/green-jangteo.gif" />
      </PhoneImgBox>
      <DetailBox>
        <TitleBox>
          <TitleH4>Green-jangteo</TitleH4>
          <Description>- 친환경 컨셉의 마켓플레이스</Description>
        </TitleBox>
        <Description>
          인원 : <TextBoxGray>팀프로젝트</TextBoxGray> (FE 2명, BE 2명)
        </Description>
        <Description>기간 : 23.11.16 ~ 24.01.04</Description>
        <Ul>
          <List>
            AWS S3를 활용하여 상품 이미지 및 프로필 이미지를 등록하는 기능을
            구현
            <ListDetailUl>
              <ListDetail>- FileReader를 통해 이미지 미리보기 구현</ListDetail>
              <ListDetail>
                - Bucket에 이미지를 저장한 후 해당 이미지 url 경로를 server에
                성공적으로 전달
              </ListDetail>
            </ListDetailUl>
          </List>
          <List>
            사용자가 필요한 제품 및 보고 싶은 분류의 제품을 선택해서 볼 수
            있도록 2단 구조로 설계하여 UX 사용성 향상
          </List>
          <List>pagination 기능 구현</List>
          <List>
            aws-sdk 라이브러리로 인한 vercel 배포 오류 해결
            <ListDetailUl>
              <ListDetail>
                → 버전 업데이트로 인해 기존 aws-sdk 라이브러리에서
                @aws-sdk/client-s3 라이브러리로 변경하여 해결
              </ListDetail>
            </ListDetailUl>
          </List>
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
  )
}

export default GreenJangteoDetail
