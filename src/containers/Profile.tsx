import styled from 'styled-components'
import {
  ProfileTitleH3,
  TitleBlind,
  Layout,
  PageLink
} from '../css/styled-component'
import { forwardRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileContainer = forwardRef(({ content1Ref }: any) => {
  return (
    <Layout
      id="Profile"
      ref={content1Ref}>
      <TitleBlind>Profile</TitleBlind>
      <Container>
        <ProfileTitleH3>About Me</ProfileTitleH3>
        <P>
          <Strong>성장을 추구하는 개발자</Strong>
          저는 배움에 욕심이 많은 개발자입니다.
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
        <ProfileTitleH3>Education</ProfileTitleH3>
        <Ul>
          <EducationList>
            <Span>2024.06</Span> 정보처리기사 필기 합격 실기 준비중
          </EducationList>
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
    </Layout>
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
    background-color: #d0d0d0;
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
    background-color: #d0d0d0;
    border-radius: 50%;
  }
`

const Span = styled.span`
  color: #909090;
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
  color: #3456d1;
  font-family: GmarketSansMedium;
  font-size: 1.3rem;
`
