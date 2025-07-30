'use client'

import { useState } from "react"
import { format } from "date-fns"
import {
  MapPin,
  CalendarDays,
  UserRound,
  ArrowLeftRight ,
  Search
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function TravelSearchForm() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>()
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>()

  return (
    <div className="flex items-center lg:w-[1200px] border  justify-between gap-4 px-6 py-4 rounded-full bg-white/20 backdrop-blur-[64px] shadow-[0px_10px_10px_-5px_#0000000A,0px_20px_25px_-5px_#0000001A] max-w-screen-xl mx-auto">
      {/* Where From */}
      <div className="flex items-center gap-2 w-full  max-w-[200px]">
        <MapPin className="text-gray-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-900">Where From</p>
          <Input
            placeholder="Search for an airport"
            className="border-none p-0 h-auto text-sm text-gray-500 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Swap */}
      <div className="flex items-center justify-center">
        <Button variant="ghost" size="icon" className="rounded-full border border-gray-200">
          <ArrowLeftRight  className="w-4 h-4 text-orange-500" />
        </Button>
      </div>

      {/* Where To */}
      <div className="flex items-center gap-2 w-full  max-w-[200px]">
        <MapPin className="text-gray-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-900">Where To</p>
          <Input
            placeholder="Search for an airport"
            className="border-none p-0 h-auto text-sm text-gray-500 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Check In */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-left p-0 hover:bg-transparent"
          >
            <CalendarDays className="text-gray-500 w-5 h-5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Check in</p>
              <p className="text-sm text-gray-500">
                {checkInDate ? format(checkInDate, "PPP") : "Add date"}
              </p>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={checkInDate}
            onSelect={setCheckInDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Check Out */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-left p-0 hover:bg-transparent"
          >
            <CalendarDays className="text-gray-500 w-5 h-5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Check out</p>
              <p className="text-sm text-gray-500">
                {checkOutDate ? format(checkOutDate, "PPP") : "Add date"}
              </p>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={checkOutDate}
            onSelect={setCheckOutDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Travelers */}
      <div className="flex items-center gap-2 w-full  max-w-[200px]">
        <UserRound className="text-gray-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-900">Travelers & Class</p>
          <p className="text-sm text-gray-500">Add Travelers</p>
        </div>
      </div>

      {/* Search Button */}
      <Button className="rounded-full bg-orange-500 text-white w-10 h-10 hover:bg-orange-600">
        <Search className="w-5 h-5" />
      </Button>
    </div>
  )
}
