/*  
  Skeleton Line animation
  - Display a placebo-loading line-based animation while content loads

  @author Joe Villegas (joevillegasisawesome@gmail.com)
  @reference (https://medium.com/octopus-wealth/skeleton-loading-pages-with-react-5a931f12677b)
*/

import React from 'react'
import styled from 'styled-components'

//  Style Skeleton animation here!
const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 1em;
  width: 100%;
  background: linear-gradient(-90deg, #F0F0F0 0%, #ff5959 50%, #F0F0F0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonLine = styled(SSkeletonPulse)`
  width: 100%;
  height: 1em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

export const SkeletonLine = () => (
    <SSkeletonLine />
);
