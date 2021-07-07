import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  /* object-fit: cover; */
  /* overflow: hidden; */
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
padding: 3rem;
/* place-items: center; */
column-gap: 2rem;
row-gap: 3.5rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem 0.5rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
position: relative;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 400px;
  /* min-height: 400px; */
  transition: all 150ms ease-in-out;

   img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor:pointer;
  }

  :hover {
      transform: scale(1.05);
      /* z-index: 40; */      
  }


  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.a`
  text-align: center;
  /* z-index: 20; */
  width: 100%;

  &:hover {
    /* text-decoration: underline; */
    /* cursor: pointer; */
  }

`;


export const HeaderThree = styled.h3<{hasTitle:boolean}>`
//TODO: change color based on tags
  font-weight: 500;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.hasTitle ? '2.5rem' : '2rem'};
`;

export const Hr = styled.hr`
  /* width: 50px;
  height: 3px;
  background: white; */
  border: 0;
  margin: 1rem auto;
`;

// export const Intro = styled.div`
//   width: 170px;
//   margin: 0 auto;
//   color: #dce3e7;
//   font-family: 'Droid Serif', serif;
//   font-size: 13px;
//   font-style: italic;
//   line-height: 18px;
// `;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2rem;
  color: #e4e6e7;
  font-size: 1em;
  line-height: 1.2;
  text-align: left;
  word-break: break-word;
  hyphens: auto;
  /* text-overflow: ellipsis; */

  @media ${(props) => props.theme.breakpoints.sm} {
    /* font-size: em; */
    padding: 0 1rem;
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
cursor:pointer;

&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
/* justify-content: space-around; */
flex-wrap: wrap;
gap: 1rem;
padding: 2rem;
`
type TagColorProps = {
  color?: string;
  bgColor: string;
}

export const Tag = styled.li <TagColorProps>`
line-height: 1.5;
border-radius: 20px;
padding: 0 0.5rem;
color: ${props => props.color};
background-color: ${props => props.bgColor};
font-size: 1.5rem;
cursor:pointer;
transition: all 150ms ease-in-out;

&:hover {
  /* border:1px solid white; */
  background-color: ${({ theme }) => theme.colors.background2};
  color: ${({ theme }) => theme.colors.primary1};
}
`