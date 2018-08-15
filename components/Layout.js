import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: bisque;
`;


const Layout = props => (
    <Container>
        <Header />
        {props.children}
        <Footer />
    </Container>
);

export default Layout;
