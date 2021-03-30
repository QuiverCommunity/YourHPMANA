import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${fonts}
  * {
    font-family: 'Regola Pro' !important;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
  }
  body {
    font-family: 'Regola Pro', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    height:100%;
    margin: 0;
  }
  #root {
    height: 100%;
  }
  .ReactModal__Body--open {
    overflow-y: hidden;
  }
  h1, h2, h3, h4 {
    color: black;
  }
  h1 {
    font-size: 38px;
    line-height: 1.2;
  }
  h2 {
    font-size: 30px;
    line-height: 1.2;
  }
  h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
  }
  h4 {
    //styleName: H4 / Medium 22px;
    // font-family: Regola Pro;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0em;

  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  .circle-space {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .circle-container {
    $particleNum: 200;
    $particleColor: hsl(180, 100%, 80%);
  
    position: absolute;
    transform: translateY(-10vh);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  
    .circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      mix-blend-mode: screen;
      background-image: radial-gradient(
        hsl(180, 100%, 80%),
        hsl(180, 100%, 80%) 10%,
        hsla(180, 100%, 80%, 0) 56%
      );
  
      animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
  
      @keyframes fade-frames {
        0% {
          opacity: 1;
        }
  
        50% {
          opacity: 0.5;
        }
  
        100% {
          opacity: 0.2;
        }
      }
  
      @keyframes scale-frames {
        0% {
          transform: scale3d(1, 1, 1);
        }
  
        50% {
          transform: scale3d(2.2, 2.2, 1);
        }
  
        100% {
          transform: scale3d(0.4, 0.4, 1);
        }
      }
    }
  
    $particleBaseSize: 8;
  
    
    @for $i from 1 through $particleNum {
      &:nth-child(#{$i}) {
        $circleSize: random($particleBaseSize);
        width: $circleSize + px;
        height: $circleSize + px;
  
        $startPositionY: 50;
        $framesName: "move-frames-" + $i;
        $moveDuration: 3000 + random(1000) + ms;
  
        animation-name: #{$framesName};
        animation-duration: $moveDuration;
        animation-delay: random(37000) + ms;
  
        @keyframes #{$framesName} {
          from {
            transform: translate3d(
              0,
              0,
              0
            );
          }
  
          to {
            transform: translate3d(
              800px,
              0,
              0
            );
          }
        }
  
        .circle {
          animation-delay: random(4000) + ms;
        }
      }
    }
  }
`
