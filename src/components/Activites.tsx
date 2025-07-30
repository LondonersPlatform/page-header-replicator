import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

function Activites() {
  return (
    <div className='  min-h-[90vh] '>
        
<section className='mx-auto max-w-[80%]'>
<div className="flex py-12 items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
       Top Activites
        </h2>
        <p className="text-gray-500 text-sm mt-1">
Favorite destinations based on customer reviews
        </p>
      </div>
      <Button
        variant="secondary"
        className="rounded-full bg-[#E4E6E8] text-gray-900 hover:bg-gray-200 flex items-center gap-2"
      >
        See More
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>



</section>


    </div>
  )
}

export default Activites