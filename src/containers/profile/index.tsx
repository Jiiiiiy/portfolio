import styled from 'styled-components'
import {
  ProfileTitleH3,
  TitleBlind,
  ProfileLayout,
  PageLink
} from '../../styles/styled-component'
import { forwardRef } from 'react'
import ProfileWebImgBox from '../../components/ProfileWebImgBox'
import { Color } from '../../styles/colors'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileContainer = forwardRef(({ content1Ref }: any) => {
  return (
    <>
      <ProfileWebImgBox />
      <ProfileLayout
        id="Profile"
        ref={content1Ref}>
        <TitleBlind>Profile</TitleBlind>
        <Container>
          <ProfileTitleH3>About Me</ProfileTitleH3>
          <P>
            <Strong>성장을 추구하는 개발자</Strong>
            <BlackText>
              &nbsp;안녕하세요! 꾸준한 성장을 위해 노력하는 프론트엔드 개발자
              김지영입니다.
            </BlackText>
            <BlackText>&nbsp;저는</BlackText>
            <BlackText>
              &nbsp;&nbsp;1. 사용자의 입장에서 편리한 인터페이스는 무엇인지
              끊임없이 고민하며, <br />
              &nbsp;&nbsp;2. 유지 보수의 유용함에 대해 고려하고, <br />
              &nbsp;&nbsp;3. 생각의 결과를 시각적으로 표출할 수 있도록 노력하고
              있는 개발자입니다.
            </BlackText>
            <BlackText>
              &nbsp;새로움을 두려워하지 않고 모르는 것을 부끄러워하지 않고
              배우려하는 마음으로 임하겠습니다.
            </BlackText>
            <SpanTag>#책임감 #꼼꼼함 #노력파</SpanTag>
          </P>
          <Ul>
            <MyInfoList>e-mail : zhiying5@naver.com</MyInfoList>
            <MyInfoList>
              github :&nbsp;
              <PageLink
                href="https://github.com/Jiiiiiy"
                target="_blank">
                https://github.com/Jiiiiiy
              </PageLink>
            </MyInfoList>
          </Ul>
        </Container>
        <Container>
          <ProfileTitleH3>Career</ProfileTitleH3>
          <Ul>
            <CareerList>
              <Span>2024.10 - 2025.03</Span> 리퓨어헬스케어
            </CareerList>
          </Ul>
        </Container>
        <Container>
          <ProfileTitleH3>Education</ProfileTitleH3>
          <Ul>
            <EducationList>
              <Span>2024.02</Span> 프론드엔드 개발자 스쿨_제로베이스 수료
            </EducationList>
            <EducationList>
              <Span>2023.12</Span> 웹디자인 기능사 자격증 취득
            </EducationList>
            <EducationList>
              <Span>2022.09</Span> 웹디자인 및 스마트 UI/UX 웹퍼블리셔 양성과정
              수료
            </EducationList>
          </Ul>
        </Container>
      </ProfileLayout>
    </>
  )
})

export default ProfileContainer

const Container = styled.div`
  margin-bottom: 50px;
`

const Ul = styled.ul``

const MyInfoList = styled.li`
  margin-bottom: 7px;
  color: #aaaaaa;
`

const CareerList = styled.li`
  position: relative;
  padding-bottom: 15px;
  padding-left: 20px;
  font-size: 16px;
  overflow: hidden;

  &::after {
    content: '';
    clear: both;
    display: block;
    position: absolute;
    top: 7px;
    left: 0px;
    width: 9px;
    height: 9px;
    background-color: #c3c3c3;
    border-radius: 50%;
  }
`

const EducationList = styled.li`
  position: relative;
  padding-bottom: 15px;
  padding-left: 20px;
  font-size: 16px;
  overflow: hidden;

  &::before {
    content: '';
    clear: both;
    display: block;
    position: absolute;
    top: 0px;
    left: 4px;
    width: 1px;
    height: 100px;
    background-color: #c3c3c3;
  }
  &:first-child::before {
    top: 10px;
  }
  &:last-child::before {
    top: -90px;
  }

  &::after {
    content: '';
    clear: both;
    display: block;
    position: absolute;
    top: 7px;
    left: 0px;
    width: 9px;
    height: 9px;
    background-color: #c3c3c3;
    border-radius: 50%;
  }
`

const Span = styled.span`
  color: #909090;
  font-size: 16px;
`
const SpanTag = styled.span`
  display: block;
  margin-top: 10px;
  color: ${Color.Green500};
  font-family: 'OTEnjoystoriesBA';
  font-size: 1.5rem;
  text-align: right;
`
const BlackText = styled.span`
  display: block;
  padding: 3px 0;
  font-size: 16px;
`
const P = styled.p`
  margin: 20px 0;
  padding: 15px;
  background-color: #eeeeee;
`

const Strong = styled.strong`
  display: block;
  padding: 10px 5px;
  font-family: GmarketSansMedium;
  color: ${Color.Blue500};
  font-size: 1.3rem;
`
