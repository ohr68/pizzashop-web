'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from './button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import type { DateRange } from 'react-day-picker'

interface DateRangePickerProps extends React.ComponentProps<'div'> {
  date: DateRange | undefined
  onDateChange: (date: DateRange | undefined) => void
}

export function DateRangePicker ({
  date,
  onDateChange
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          data-empty={!date}
          className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
        >
          <CalendarIcon />
          {date?.from
            ? (
                date.to
                  ? (
                    <>
                      {format(date.from, 'LLL dd, y')} -{' '}
                      {format(date.to, 'LLL dd, y')}
                    </>
                    )
                  : (
                      format(date.from, 'LLL dd, y')
                    )
              )
            : (
              <span>Pick a date</span>
              )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='range'
          defaultMonth={date?.from ?? new Date()}
          numberOfMonths={2}
          selected={date}
          onSelect={onDateChange}
        />
      </PopoverContent>
    </Popover>
  )
}
