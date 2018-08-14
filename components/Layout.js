import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';

const Container = styled.div``;


const Layout = props => (
    <Container>
        <Header />
        {props.children}
        <Footer />
    </Container>
);

export default Layout;
