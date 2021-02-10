import React, { Component, useState} from 'react'
import styled from 'styled-components'
import Button from './Button/button'

const WrapperBox = styled.div `
    width:520px;
    height:720px;
    display:flex;
    flex-flow:row wrap; 
    border: 3px solid hsl(240,30%,30%);
    padding:10px;
    align-content:space-around;
    justify-content:space-around;
    position:relative;
  

`

const Display = styled.div `
    width:calc(100% - 20px);
    max-width:calc(100%-20px);
    height:120px;
    border:2px solid white;
    position:absolute;
    padding:20px;
    top:10px;
    text-align:right;
    font-size:96px;
    display:flex;
    justify-content:end;
    align-items:center;
    overflow:hidden;
    text-overflow:ellipsis;

    

`

const Buttons = styled.div ` 
    height:540px;
    width:calc(100% - 20px);
    position:absolute;
    bottom:10px;
    display:flex;
    align-content:space-around;
    justify-content:space-around;
    flex-flow:row wrap;


`




export default class Wrapper extends Component {

    state = {
        value : "0",
        memory: null,
        operator:null
    }

    handleButtonPress = content => () => {
        const num = parseFloat(this.state.value)
        const {value,memory,operator} = this.state
        if (content === "AC"){
            this.setState({value: "0",memory:null,operator:null})
            return
        }

        if(content === "±"){
            this.setState({value: (num * -1).toString()}) 
            return
        }

        if(content === "%"){
            this.setState({value:(num/100).toString(),memory:null,operator:null},)
            return
        }
        if(content === "×"){
            if(operator !== null){
                if(operator === "+"){
                    this.setState({memory:(memory + parseFloat(value))})
                } else if(operator === "−"){
                    this.setState({memory:(memory - parseFloat(value))})
                } else if(operator === "×"){
                    this.setState({memory:(memory * parseFloat(value))})
                } else if(operator === "÷"){
                    this.setState({memory:(memory / parseFloat(value))})
                }
             } else {
                this.setState(({memory:parseFloat(value)}))
            }
            this.setState({value:"0",operator:"×"})
            return    
        }
        if(content === "+"){
            if(operator !== null){
                if(operator === "+"){
                    this.setState({memory:(memory + parseFloat(value))})
                } else if(operator === "−"){
                    this.setState({memory:(memory - parseFloat(value))})
                } else if(operator === "×"){
                    this.setState({memory:(memory * parseFloat(value))})
                } else if(operator === "÷"){
                    this.setState({memory:(memory / parseFloat(value))})
                }
             } else {
                this.setState(({memory:parseFloat(value)}))
            }
            this.setState({value:"0",operator:"+"})
            return 
        }
        if(content === "−"){
            if(operator !== null){
                if(operator === "+"){
                    this.setState({memory:(memory + parseFloat(value))})
                } else if(operator === "−"){
                    this.setState({memory:(memory - parseFloat(value))})
                } else if(operator === "×"){
                    this.setState({memory:(memory * parseFloat(value))})
                } else if(operator === "÷"){
                    this.setState({memory:(memory / parseFloat(value))})
                }
             } else {
                this.setState(({memory:parseFloat(value)}))
            }
            this.setState({value:"0",operator:"−"})
            return 
            
        }
        if(content === "÷"){
            if(operator !== null){
                if(operator === "+"){
                    this.setState({memory:(memory + parseFloat(value))})
                } else if(operator === "−"){
                    this.setState({memory:(memory - parseFloat(value))})
                } else if(operator === "×"){
                    this.setState({memory:(memory * parseFloat(value))})
                } else if(operator === "÷"){
                    this.setState({memory:(memory / parseFloat(value))})
                }
             } else {
                this.setState(({memory:parseFloat(value)}))
            }
            this.setState({value:"0",operator:"÷"})
            return 
        }
        if(content === "="){
            if(!operator) return

            if(operator === "+"){
                   this.setState({value:(memory + parseFloat(value)).toString()})
              }
            if(operator === "−"){
                  this.setState({value:(memory - parseFloat(value)).toString()})
             }
            if(operator === "×"){
                  this.setState({value:(memory * parseFloat(value)).toString()})
              }
            if(operator === "÷"){
                  this.setState({value:(memory / parseFloat(value)).toString()})
              }
            
            return
        }

        if(content === "."){
            if(value.includes(".")) return

            this.setState({value: value + '.'})
            return
        }

        if(value[value.length-1] === '.'){
            this.setState({value:value+content})
        } else {
            this.setState({value:parseFloat(num+content).toString()})
        }


        if(num === 0 && !isNaN(content)){
            this.setState({value:content})
            return
        } 
        

        // this.setState({value:parseFloat((num+content)).toString()})


    }

    render() {
        const { ButtonText } = this.props
        const { value } = this.state
            return (
            <WrapperBox>
                <Display > {value} </Display>
                <Buttons> 
                    <Button onButtonClick={this.handleButtonPress} content="AC" type="function"/>
                    <Button onButtonClick={this.handleButtonPress} content="±" type="function"/>
                    <Button onButtonClick={this.handleButtonPress} content="%" type="function"/>
                    <Button onButtonClick={this.handleButtonPress} content="÷" type="function"/>
                    <Button onButtonClick={this.handleButtonPress} content="7"/>
                    <Button onButtonClick={this.handleButtonPress} content="8"/>
                    <Button onButtonClick={this.handleButtonPress} content="9"/>
                    <Button onButtonClick={this.handleButtonPress} content="×" type="function"/>
                    <Button onButtonClick={this.handleButtonPress} content="4"/>
                    <Button onButtonClick={this.handleButtonPress} content="5"/>
                    <Button onButtonClick={this.handleButtonPress} content="6"/>
                    <Button onButtonClick={this.handleButtonPress} content="−" type="function"/>
                    <Button onButtonClick={this.handleButtonPress} content="3"/>
                    <Button onButtonClick={this.handleButtonPress} content="2"/>
                    <Button onButtonClick={this.handleButtonPress} content="1"/>
                    <Button onButtonClick={this.handleButtonPress} content="+" type="function"/>
                    <Button onButtonClick={this.handleButtonPress} content="0"/>
                    <Button onButtonClick={this.handleButtonPress} content="."/>
                    <Button onButtonClick={this.handleButtonPress} content="=" type="function"/>
                </Buttons>
                
            </WrapperBox>
        )
    }
}
