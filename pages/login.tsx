import FlexBox from '@component/FlexBox'
import Login from '@component/sessions/Login'
import React from 'react'

const LoginPage = () => {
  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Login toggleDialog  = {false}/>
    </FlexBox>
  )
}

export default LoginPage
