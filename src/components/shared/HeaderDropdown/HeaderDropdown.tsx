import React, { ReactElement, useState } from 'react'

import {Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from '@nextui-org/react'

export const HeaderDropdown = (): ReactElement => {

    const [selectedLang, setSelectedLang] = useState('EN')

    const clickLangItemHandler = (e: React.MouseEvent<HTMLLIElement>): void => {
      const target = e.target as HTMLLIElement
      setSelectedLang(target.textContent || '')
    }

    return (
      <Dropdown className='min-w-[30px]'>
          <DropdownTrigger>
              <Button className='ml-3 p-0 text-white' color='primary' variant='light' size='sm'>{selectedLang}</Button>
          </DropdownTrigger>
          <DropdownMenu color='primary' selectionMode='single' selectedKeys={[selectedLang]} aria-label="Site languages" >
              <DropdownItem onClick={clickLangItemHandler} key="RU">RU</DropdownItem>
              <DropdownItem onClick={clickLangItemHandler} key="KZ">KZ</DropdownItem>
              <DropdownItem onClick={clickLangItemHandler} key="EN">EN</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    )
}