import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
      <div className='flex items-center space-x-2 bg-gray-100 p-3 mt-2 rounded-full'>
        <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
        <input type="text" placeholder='Search Twitter' className='bg-transparent flex-1 outline-none' />

      </div>
      <div className='mt-10'>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kanyewest"
          options={{ height: 1000 }} />
      </div>

    </div>
  )
}

export default Widgets