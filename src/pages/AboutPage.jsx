import React from 'react'
import Chef from '../components/Chef';
import '../style/chef/style.css'
import Main from '../components/Main';
import Manager from '../components/Manager'

export default function AboutPage() {
  return (
    <>
           
        <Main />
        <div className='page-wrapper'>
        <Chef />
        </div>
        <Manager />
      

    </>
  )
}
