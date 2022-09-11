import React from 'react'
import Card from '../components/Home/Card'

export default function HomeScreen() {
  return (
    <div className='items-center justify-center'>
        <Card title={"Human Resource"}/>
        <Card title={"Customer Relations"}/>
        <Card title={"Payroll managment"}/>
        <Card title={"Accounting"}/>
        <Card title={"Student Manangment"}/>
    </div>
  )
}
