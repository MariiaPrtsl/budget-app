import styled  from 'styled-components';


export const Nav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        padding: 0 5px;
        li {
            margin-right: 25px;
            a {
                color: ${({theme}) => theme.linkColor}
            }
        }
    }
`;

Nav.displayName = 'Nav';