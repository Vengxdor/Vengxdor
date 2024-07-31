import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function Contact () {
  return (
    <section id='contact' className='mb-10 mt-32 '>
      <h2 className='mb-9 text-center text-subtitle font-bold'>Contact</h2>
      <div className='flex items-center gap-12'>
        <form className='grid h-72 w-1/2 items-center '>
          <Input type='text' placeholder='Name'/>
          <Input type='Email' placeholder='Email'/>
          <Textarea className='rezize-none h-32' placeholder='Message...'/>
          <Button className='bg-secondary' type='submit'>Send</Button>
        </form>
        <img className='w-1/3' src="/mail.png" alt="" />
      </div>
    </section>
  )
}
