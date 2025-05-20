import {
  Description,
  DetailBox,
  PageLink,
  TextBoxGray,
  TitleBox,
  TitleH4,
  WebImg,
  WebImgBox,
  WebProjectLayout,
  Ul,
  List
} from '../../../styles/styled-component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PortfolioWPDetail = () => {
  return (
    <WebProjectLayout>
      <WebImgBox>
        <WebImg src="img/portfolio_wp.gif" />
      </WebImgBox>
      <DetailBox>
        <TitleBox>
          <TitleH4>Portfolio_WebPublisher</TitleH4>
          <Description>
            - HTML, CSS, JavaScript, JQuery를 활용한 클론코딩 및 리뉴얼 프로젝트
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
        <Ul>
          <List>할리스 리디자인</List>
          <List>화폐박물관 클론코딩</List>
          <List>디에트르 클론코딩</List>
        </Ul>
      </DetailBox>
    </WebProjectLayout>
  )
}

export default PortfolioWPDetail
