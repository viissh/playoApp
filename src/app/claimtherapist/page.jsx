import React from 'react'
import { Home } from './home'
import {Home2} from './home2'
import { Navbar2 } from '@/component/navbar2';

export const page = () => {
  return (
    <>
    <Navbar2/>
    <Home/>
    </>
  )
}

module.exports = page;
