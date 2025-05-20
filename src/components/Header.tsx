import styled from 'styled-components'
import { MainLink } from '../styles/styled-component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ onCategory, category }: any) => {
  return (
    <HeaderLayout>
      <HeaderContainerSize>
        <HeaderRow>
          <Logo>
            <MainLink href="/">Portfolio</MainLink>
          </Logo>
          <CategoryList>
            <CategoryItem
              onClick={e => onCategory(e)}
              style={
                category == `Profile`
                  ? { fontWeight: 'bold' }
                  : { fontWeight: 'normal' }
              }>
              Profile
            </CategoryItem>
            <CategoryItem
              onClick={e => onCategory(e)}
              style={
                category == `Project`
                  ? { fontWeight: 'bold' }
                  : { fontWeight: 'normal' }
              }>
              Project
            </CategoryItem>
          </CategoryList>
        </HeaderRow>
      </HeaderContainerSize>
    </HeaderLayout>
  )
}

export default Header

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  background-color: #333333;
  color: #ffffff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  padding: 0 20px;
`
const HeaderContainerSize = styled.div`
  width: 1400px;
  margin: 0 auto;
`

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Logo = styled.h1`
  font-family: SokchoBadaCalligraphy;
  font-size: 40px;
  line-height: 80px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`
const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: 80px;

  @media screen and (max-width: 1024px) {
    opacity: 0;
  }
`

const CategoryItem = styled.li`
  display: inline-block;
  margin-left: 30px;
  font-size: 1.3rem;
  cursor: pointer;
`
