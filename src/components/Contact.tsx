'use client'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

export default function Contact () {
  const form = React.useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.current === null) return
    emailjs
      .sendForm('service_ah9jj6s', 'template_m2m3g1s', form.current, {
        publicKey: 'uBQ5Gsd8pNzmAego1'
      })
      .then(() => {
        toast.success('Email sent!')
        if (form.current === null) return
        form.current.reset()
      })
      .catch(() => toast.error('There was an error sending the email'))
  }
  return (
    <section id='contact' className='mb-10 mt-32 '>
      <h2 className='mb-9 text-center text-subtitle font-bold'>Contact</h2>
      <div className='flex w-full items-center justify-center gap-12'>
        <form
          onSubmit={sendEmail}
          ref={form}
          className='grid h-72 w-full items-center md:w-1/2'
        >
          <Input name='user_name' required type='text' placeholder='Name' />
          <Input name='user_email' required type='Email' placeholder='Email' />
          <Textarea
            required
            className='rezize-none h-32'
            placeholder='Message...'
            name='message'
          />
          <Button className='bg-secondary' type='submit'>
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}
