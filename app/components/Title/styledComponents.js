import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const H1 = styled.h1`
  font-size: 3.4rem;
  letter-spacing: 0.3px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  width: 100%;
  padding: 0 1rem;
  ${breakpoint('xs')`
    font-size: 4.2rem;
  `}
  ${breakpoint('md')`
    font-size: 5.5rem;
  `}
  ${breakpoint('xl')`
    font-size: 6rem;
  `}
`;
export const H2 = styled.h2`
  font-size: 3rem;
  padding: 0 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  width: 100%;
  ${breakpoint('md')`
    font-size: 3.2rem;
  `}
`;
export const H3 = styled.h3`
  font-size: 1.9rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;
export const H4 = styled.h4`
  font-size: 1.8rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;
export const H5 = styled.h5`
  font-size: 1.7rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;
export const H6 = styled.h6`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
