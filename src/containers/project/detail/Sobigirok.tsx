import {
  Description,
  DetailBox,
  TextBoxGray,
  TitleH4,
  TitleBox,
  WebImg,
  WebImgBox,
  WebProjectLayout,
  PageLink,
  Ul,
  List,
  ListDetail,
  ListDetailUl
} from '../../../styles/styled-component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SobigirokDetail = () => {
  return (
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
          <List>firebase를 활용하여 구글 로그인 연동 구현</List>
          <List>
            회원가입에 필요한 형식에 조건을 지정하고 react-hook-form
            라이브러리를 통해 유효성 검사 진행
            <ListDetailUl>
              <ListDetail>
                - 단순한 이메일 형식이 아닌 숫자, 소문자, 대문자 및 특수문자와
                같은 조건을 지정하여 복잡한 형식의 유효성 검사를 진행
              </ListDetail>
              <ListDetail>
                - 사용자가 주어진 형식과 다른 형식으로 입력한 경우, 잘못 작성한
                부분을 알 수 있도록 입력 창 아래에 오류 메시지 노출
              </ListDetail>
            </ListDetailUl>
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
  )
}

export default SobigirokDetail
