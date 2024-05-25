import React, { ReactElement } from 'react'
import { UserIcon, Cog8ToothIcon, HomeIcon } from '@heroicons/react/16/solid'

export const FooterMenu = (): ReactElement => {
  return (
    <div className='flex'>
        <UserIcon className='w-6 h-6'/>
        <Cog8ToothIcon className='w-6 h-6'/>
        <HomeIcon className='w-6 h-6'/>
    </div>
  )
}