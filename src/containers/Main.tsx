import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import WebImgBox from '../components/WebImgBox'
import { ContainerSizeFlex } from '../css/styled-component'
import ProfileContainer from './Profile'
import ProjectContainer from './Project'

const MainContainer = () => {
  const [category, setCategory] = useState('Profile')
  const content1Ref = useRef<HTMLDivElement>(null)
  const content2Ref = useRef<HTMLDivElement>(null)

  // const onContent1Cli

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategory = (e: any) => {
    setCategory(e.currentTarget.textContent || '')
    category == `Profile`
      ? content1Ref.current?.scrollIntoView({ behavior: 'smooth' })
      : content2Ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    console.log(content1Ref)
  }, [])

  return (
    <>
      <Header
        onCategory={handleCategory}
        category={category}
      />
      <ContainerSizeFlex>
        <WebImgBox />
        {width > 1024 && category == `Profile` ? (
          <ProfileContainer />
        ) : width > 1024 && category == `Project` ? (
          <ProjectContainer />
        ) : (
          <>
            <ProfileContainer ref={content1Ref} />
            <ProjectContainer ref={content2Ref} />
          </>
        )}
      </ContainerSizeFlex>
    </>
  )
}

export default MainContainer
