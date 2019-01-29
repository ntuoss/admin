import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin: auto;
  width: ${props => props.width || '60vw'};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
export const FullSection = styled.section`
  flex: 1 0 100%;
`;
export const HalfSection = styled.section`
  flex: 1 0 50%;
`;
export const SubSection = styled.section`
  margin: 0;
  padding: 0;
  flex: 1 0 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  align-items: center;
`;
export const SubSectionStart = styled(SubSection)`
  justify-content: flex-start;
  align-items: center;
`;
export const FillSectionBase = styled.section`
  flex: 1;
`;
export const FillSection = styled.section`
  flex: 1;
  padding: 2rem 0 2rem 2rem;
`;
const ContentHolder = styled.div`
  background: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px ${props => props.theme.highlight};
  font-size: 4rem;
  color: ${props => props.theme.hint};
  cursor: pointer;
  &::after {
    content: '+';
    opacity: ${props => (props.src ? 0 : 1)};
  }
`;
export const Avatar = styled(ContentHolder)`
  border-radius: 50%;
  height: ${props => props.size || '14vw'};
  width: ${props => props.size || '14vw'};
`;
export const ArtWork = styled(ContentHolder)`
  flex: 1 1 100%;
  border-radius: 3px;
  height: ${props => props.size || '50vh'};
  width: ${props => props.size || '50vw'};
`;

export const BreakLine = styled.hr`
  width: 100%;
  border: solid 1px ${props => props.theme.highlight};
`;
export const Break = styled.div`
  width: 100%;
  margin: ${props => props.margin || '10px'};
`;
