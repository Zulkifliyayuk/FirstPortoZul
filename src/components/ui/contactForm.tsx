import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from './button';
import { FormStatusDialog } from './formstatusDialog';
import { Input } from './input';
import { InputGroup } from './inputGroup';
import { Textarea } from './textarea';

const schema = z.object({
  name: z.string().refine((val) => val.trim() !== '', 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  message: z.string().refine((val) => val.trim() !== '', 'Message is required'),
});

type FormData = z.infer<typeof schema>;

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: FormData) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setVariant('error');
    } finally {
      setLoading(false);
      setShowDialog(true);
    }
  }

  return (
    <div className='relative p-4 md:p-6'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4 md:gap-5'>
          <InputGroup errorMessage={errors.name?.message}>
            <Input
              {...register('name')}
              type='text'
              id='name'
              placeholder='Name'
            />
          </InputGroup>
          <InputGroup errorMessage={errors.email?.message}>
            <Input
              {...register('email')}
              type='text'
              id='email'
              placeholder='Email'
            />
          </InputGroup>
          <InputGroup errorMessage={errors.message?.message}>
            <Textarea
              {...register('message')}
              id='message'
              placeholder='Message'
            />
          </InputGroup>
          <Button
            disabled={loading}
            type='submit'
            size='default'
            className='md:text-md mt-[-10px] text-sm leading-6 font-semibold md:leading-7.5 md:font-medium'
          >
            Send
          </Button>
        </div>
      </form>
      <FormStatusDialog
        open={showDialog}
        variant={variant}
        onOpenChange={setShowDialog}
      />
    </div>
  );
};
