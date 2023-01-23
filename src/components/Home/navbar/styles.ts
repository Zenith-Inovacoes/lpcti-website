import styled, {css} from 'styled-components';
import theme from '../../../styles/theme';


export const Container = styled.nav`
${css({
    backgroundColor: '#161957',
    height: '82px',
    width: '100%',
    display: 'flex',
    margin: '0',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 98%)',
    padding: '0',
    position: 'absolute',
    top: '0',
    alignItems: 'center',
    overflowX: 'hidden',
    overflowY: 'visible',
})}
`;

export const imgContainer = styled.div`
    width: 185px;
    height: 100%;
    display: flex;
    background-color: #fff;
    border-top-right-radius: 8em;
    border-bottom-right-radius: 8em;
    padding: 0;
    margin: 0;
    overflow-y: visible;
> img {
    width: 90%;
    height: 100%;
    object-fit: contain;
}
`