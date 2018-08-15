import MetaHead from "./MetaHead";
import Footer from "./Footer";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: bisque;
`;


const Layout = props => (
    <Container>
        <MetaHead />
        {props.children}
        <Footer />
    </Container>
);

export default Layout;
