import React from 'react'
import styled from 'styled-components'
import doge from '../../assets/img/doge.png';
import kimchi from '../../assets/img/kimchi.png';
import frens from '../../assets/img/frens.png';
import sashimi from '../../assets/img/sashimi.png';
import pickle from '../../assets/img/pickle.png';
interface PageHeaderProps {
  icon: React.ReactNode,
  subtitle?: React.ReactNode,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <StyledPageHeader>
      {icon === "aa" && <img style={{width:"85px"}} src="https://zombie.finance/logo2.png"/>}
      {icon === "dd" && <img style={{width:"45px"}} src={doge}/>}
      {icon === "k" && <img style={{width:"85px"}} src={kimchi}/>}
      {icon === "f" && <img style={{width:"85px"}} src={frens}/>}
      {icon === "ns" && <img style={{width:"85px"}} src={sashimi}/>}
      {icon === "p" && <img style={{width:"85px"}} src={pickle}/>}
      {icon !== "p" || icon !== "ns" || icon !== "aa" || icon !== "dd" || icon !== "k" || icon !== 'f' ? '' : <StyledIcon>{icon}</StyledIcon>}
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledPageHeader>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.theme.spacing[6]}px;
  padding-top: ${props => props.theme.spacing[6]}px;
`

const StyledIcon = styled.div`
  font-size: 96px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  width: 96px;
`

const StyledTitle = styled.h1`
  color: ${props => props.theme.color.grey[600]};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${props => props.theme.color.grey[400]};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`

export default PageHeader