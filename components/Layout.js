import MetaHead from "./MetaHead";
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


const Layout = props => (
    <LayoutStyled>
        <MetaHead />
        <main>
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
