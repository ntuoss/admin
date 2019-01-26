import styled from 'styled-components';

export const Form = styled.form`
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

export const Avatar = styled.div`
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  background: ${props => props.theme.sencondary};
  height: ${props => props.size || '14vw'};
  width: ${props => props.size || '14vw'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px ${props => props.theme.highlight};
  font-size: 4rem;
  color: ${props => props.theme.hint};
  cursor: pointer;
`;

export const BreakLine = styled.hr`
  width: 100%;
  border: solid 1px ${props => props.theme.highlight};
`;
export const Break = styled.div`
  width: 100%;
  margin: ${props => props.margin || '10px'};
`;
