// import React from 'react';
import styled from 'styled-components'

const StyledBox = styled.div`
  border: 3px solid #262626;
  box-shadow: 2px 2px 2px #474747;
  margin: 5px;
  background: ${props => props.color || 'black'};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  `

export default StyledBox
