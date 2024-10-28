'use client'

import Link from 'next/link'
import React from 'react'
import { RouteType } from '~/config/route.config'
import { cn } from '~/utils/helpers'

interface Props extends React.HTMLAttributes<HTMLElement> {
  route: RouteType
}

const NavbarItem: React.FC<Props> = ({ route, ...props }) => {
  return (
    <Link
      {...props}
      href={route.path}
      className={cn('font-medium text-foreground hover:text-primary', props.className)}
    >
      {route.name}
    </Link>
  )
}

export default NavbarItem
