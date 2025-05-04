import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: greenyellow;
  padding: 1.2rem 4.8rem;
  border-bottom: 1xp solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
