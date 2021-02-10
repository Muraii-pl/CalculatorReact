import React, { Component } from 'react'
import styled from 'styled-components'
import './button.css'

const ButtonDiv = styled.div ` 
    width:100px;
    height:100px;
    border-radius:50%;
    background:${props => props.type === 'function' ? '#ad7f00' : '#000'};
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:48px;
    cursor: pointer;

`


class Button extends Component{
    render(){
        const { content,type, onButtonClick} = this.props
        return (
            
            <ButtonDiv className={content === '0' ? 'zero': ''} type={type} onClick={onButtonClick(content)}>
                { content }
            </ButtonDiv>
    )}
}

export default Button