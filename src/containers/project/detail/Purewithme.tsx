import {
  PhoneProjectLayout,
  PhoneImgBox,
  PhoneImg,
  DetailBox,
  TitleBox,
  TitleH4,
  Description,
  TextBoxGray,
  Ul,
  List,
  ListDetail,
  ListDetailUl
} from '../../../styles/styled-component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PurewithmeDetail = () => {
  return (
    <PhoneProjectLayout>
      <PhoneImgBox>
        <PhoneImg src="dist/img/purewithme.png" />
      </PhoneImgBox>
      <DetailBox>
        <TitleBox>
          <TitleH4>purewithme</TitleH4>
          <Description>
            - 기록을 기반으로 사용자의 건강 상태를 분석하여 건강기능식품을
            추천해 주는 앱
          </Description>
        </TitleBox>
        <Description>
          인원 : <TextBoxGray>회사프로젝트</TextBoxGray>
        </Description>
        <Description>기간 : 24.10.07 ~ 25.01.16</Description>
        <Ul>
          <List>
            React Native와 TypeScript를 사용하여 사용자 인터페이스 개발
          </List>
          <List>서버와의 데이터 통신을 위한 API 연동 작업 수행</List>
          <List>
            재사용 가능한 컴포넌트를 설계하여 유지보수성과 확장성 강화
          </List>
          <List>
            React Query를 사용하여 실시간 데이터 저장 및 동기화 기능 구현
            <ListDetailUl>
              <ListDetail>
                - Context API를 사용하여 사용자 정보를 관리
              </ListDetail>
            </ListDetailUl>
          </List>
          <List>슬라이드를 좌우로 넘기는 인터렉션 구현</List>
          <List>SVG 기반 실시간 데이터를 시각화하여 꺾은선 그래프 구현</List>
        </Ul>
      </DetailBox>
    </PhoneProjectLayout>
  )
}

export default PurewithmeDetail
