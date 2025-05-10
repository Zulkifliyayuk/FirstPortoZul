'use client';

import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from '@/components/ui/sheet';

import { navigationData } from '@/app/constants/navigationData';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(2,2,3,0)', 'rgba(2,2,3,0.8)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-140 mx-auto my-0 w-full max-w-[1442px]'
    >
      <div className='flex-between custom-container relative h-16 lg:h-21'>
        {/* cloud */}
        <div className='absolute bottom-0 h-55 w-64 rounded-full bg-[#6831E166] [filter:blur(96.03px)] max-md:hidden'></div>
        <Link href='#'>
          <Image
            src='/images/logoVector.png'
            alt='logo'
            width={40}
            height={40}
            className='size-7 lg:size-10'
          />
        </Link>
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-6'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-secondary-200 px-2'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-end gap-4'>
          <Button asChild size='default' className='hidden px-11.75 lg:flex'>
            <Link
              href='#Contact'
              className='text-md flex w-full items-center leading-7.5 font-medium text-neutral-100'
            >
              <Image
                src='/icons/sms.png'
                alt='sms'
                width={20}
                height={20}
                className='mx-1.5 size-5'
              />
              Hire Me
            </Link>
          </Button>

          <Button
            asChild
            size='icon'
            className='flex items-center px-2.5 lg:hidden'
          >
            <Link href='#Contact'>
              <Image
                src='/icons/sms.png'
                alt='sms'
                width={20}
                height={20}
                className='mx-1.5 size-5'
              />
            </Link>
          </Button>

          {/* SHEET */}
          <Sheet>
            <SheetTrigger asChild>
              <Menu className='cursor-pointer lg:hidden' />
            </SheetTrigger>
            <SheetContent>
              <div className='mx-5'>
                <nav>
                  <ul className='flex flex-col gap-6'>
                    {navigationData.map((data) => (
                      <li key={data.label}>
                        <SheetClose asChild>
                          <Link
                            href={data.href}
                            className='text-md-regular text-neutral-100'
                          >
                            {data.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <SheetClose asChild>
                  <Button asChild size='default' className='mt-6 w-full'>
                    <Link
                      href='#Contact'
                      className='text-md flex items-center leading-7.5 font-medium text-neutral-100'
                    >
                      <Image
                        src='/icons/sms.png'
                        alt='sms'
                        width={20}
                        height={20}
                        className='mx-1.5 size-5'
                      />
                      Hire Me
                    </Link>
                  </Button>
                </SheetClose>
              </div>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
