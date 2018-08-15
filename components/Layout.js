import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import styled from 'styled-components';

const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: bisque;
    margin: 10px;
    padding: 10px;
`;

const mainLayout = {
    display: 'grid',
    gridTemplateColumns: '70% 30%'
}


const Layout = props => (
    <LayoutStyled>
        <Header />
        <main style={mainLayout}>
            <section>
                {props.children}
            </section>
            {props.sidebar && <aside><Sidebar/></aside>}
        </main>
        <Footer />
    </LayoutStyled>
);

Layout.defaultProps = {
    sidebar: false
}

export default Layout;
