import React from 'react'
import styled from 'styled-components'
import Input from '../../Components/Input'
import TextArea from '../../Components/TextArea'
import Button from '../../Components/Button'

const Contact: React.FC = () => {
  
  return (
    <Container>
      <h2>
        GET IN TOUCH
      </h2>
      
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>
      
      <Content>
        <h3>
          Contact Form
        </h3>
        
        <Row>
          <Input label="Name *" />
          <Input label="Email Address *" />
        </Row>
        
        <TextArea label="Message *" rows={5} />
        
        <Button>
          Send
        </Button>
      </Content>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 50px auto;
  color: ${p => p.theme.colors.text_color};

  h2 {
    font-size: 32px;
    margin: 0 0 30px 0;
  }
`

const Content = styled.div`
  background-color: ${p => p.theme.colors.content_background};
  padding: 25px;
  width: 100%;
  margin-top: 50px;

  h3 {
    font-size: 24px;
    margin: 0 0 30px 0;
  }
`

const Row = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 710px) {
    flex-wrap: wrap;
  }
`
