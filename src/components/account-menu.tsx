import { Building, ChevronDown, LogOut } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Button } from './ui/button'

export function AccountMenu () {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center gap-2'
        >
          Pizza Shop
          <ChevronDown className='h-4 m-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='flex flex-col'>
          <span>Otávio Odenik</span>
          <span className='text-xs font-normal text-muted-foreground'>
            otavio.odenik@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className='h-4 w-4 mr-2' />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
          <LogOut className='h-4 w-4 mr-2 text-rose-500 dark:text-rose-400' />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
