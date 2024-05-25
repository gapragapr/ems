import { ReactElement } from 'react'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { HeaderDropdown } from '../HeaderDropdown'

export const HeaderNavbar = (): ReactElement => {

  return (
    <Navbar className='bg-slate-700 text-white rounded-3xl bg-opacity-25 backdrop-filter backdrop-blur-lg'>
      <NavbarBrand>
        <Link className="font-bold text-white cursor-pointer">
            SelfProtego
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className='text-white' href="/app">
            Web app
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href="/map">
            Incident map
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href="/qa">
            Q&A
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="ghost">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
            <HeaderDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
