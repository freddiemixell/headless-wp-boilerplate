import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';

import Button from 'material-ui/Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    background: #6b2771;
    h3 {
      font-size: 30px;
      margin: 10px;
      color: #fff;
      font-weight: 300;
      width: 250px;

      @media ${device.laptop} {
          width: 100%;
          text-align: center;
          font-size: 40px;
      }
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    a {
        margin: 10px;
    }

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const styles = {
    button: {
        width: '230px', 
        height: '50px', 
        marginLeft: '20px', 
        marginRight: '20px', 
        backgroundColor: '#e8b007', 
        color: '#fff'
    },
    link: { 
        textDecoration: 'none' 
    }
}

class Questions extends Component {
    render () {
        return (
            <Wrapper>
                <h3>{this.props.headline}</h3>
                <ButtonWrap>
                    <a style={styles.link} href={this.props.hrefone}>
                        <Button variant="raised" style={styles.button}>
                            {this.props.btnone}
                        </Button>
                    </a>
                    <a style={styles.link} href={this.props.hreftwo}>
                        <Button variant="raised" style={styles.button}>
                            {this.props.btntwo}
                        </Button>
                    </a>
                </ButtonWrap>
            </Wrapper>
        )
    }
}

export default Questions;