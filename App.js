import React, { Component } from 'react';
import {Alert} from 'react-native'
import { Container, Header, Title, Item, Content, Label, Input, Form, Button, Text, Segment, Footer, Body } from 'native-base'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      massa: '',
      tinggi: '',
      IMT:'',
      diag:''
    }
  }
  render() {
    var calc=()=>{
      var x=this.state.massa
      var y=this.state.tinggi
      var z=x/Math.pow(y,2)
      this.setState({IMT:z})
      if (z<18.5) {
        this.setState({diag:'Berat badan Anda kurang'})
      }
      else if (z>=18.5&&z<=24.9) {
        this.setState({diag:'Berat badan Anda ideal'})
      }
      else if (z>=25.0&&z<=29.9) {
        this.setState({diag:'Berat badan Anda berlebih'})
      }
      else if (z>=30&&z<=39.9) {
        this.setState({diag:'Berat badan Anda sangat berlebih'})
      }
      else if (z>39.9) {
        this.setState({diag:'Anda obesitas'})
      }
      else {Alert.alert('Mohon input data sesuai pengukuran dan penimbangan')}
    }
    return (
      <Container>
        <Header>
          <Item>
            <Title>INDEKS MASSA TUBUH</Title>
          </Item>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel last>
              <Label>Massa (kg)</Label>
              <Input keyboardType='numeric' onChangeText={(x) => { this.setState({ massa:x }) }}></Input>
            </Item>
            <Item floatingLabel last>
              <Label>Tinggi (cm)</Label>
              <Input keyboardType='numeric' onChangeText={(x) => { this.setState({ tinggi:(x/100) }) }}></Input>
            </Item>
            <Segment style={{ backgroundColor: 'transparent' }}></Segment>
            <Button block rounded primary onPress={calc}>
              <Text>HITUNG IMT</Text>
            </Button>
          </Form>
          <Segment>
            <Item>
              <Text>Massa tubuh: </Text>
              <Text style={{fontWeight:'900'}}>{this.state.massa} kg</Text>
            </Item>
          </Segment>
          <Segment>
            <Item>
              <Text>Tinggi badan: </Text>
              <Text style={{fontWeight:'900'}}>{this.state.tinggi} m</Text>
            </Item>
          </Segment>
          <Segment>
            <Item>
              <Text>Indeks Massa Tubuh: </Text>
              <Text style={{fontWeight:'900'}}>{this.state.IMT}</Text>
            </Item>
          </Segment>
          <Segment>
            <Item>
              <Text>Diagnosa: </Text>
              <Text style={{fontWeight:'900'}}>{this.state.diag}</Text>
            </Item>
          </Segment>
        </Content>
        <Footer>
          <Item>
            <Text style={{color:'white'}}>Kalkulator IMT by ElCesar. Powered by React Native</Text>
          </Item>
        </Footer>
      </Container>
    );
  }
}