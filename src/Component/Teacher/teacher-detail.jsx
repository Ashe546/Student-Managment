import React from 'react'

export default function Teacherdetail() {
  return (
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <h1>Teacher Detail \ <span className='text-amber-500'>Steven Johnson</span></h1>
      <div className='bg-gray-200 p-4 mt-10'>
        <div className='flex w-full justify-between'>
          <h1>About Me</h1>
          <h1>...</h1>
        </div>

        <div class="grid grid-flow-col w-fit gap-16 mt-3">
          <div class="w-fit"><img src="/teacher.jpg" alt="" /></div>
          <div class="w-2/3">
            <h1>Steven Johnson</h1>
            <p>Aliquam erat volutpat. Curabiene natis
              massa sedde lacu stiquen sodale word moun
              taiery.Aliquam erat volutpaturabiene natis
              massa sedde sodale word moun taiery.
            </p>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <h1>name: Steven Johnson</h1>
              </div>
              <div>
                <h1>name: Steven Johnson</h1>
              </div>
              <div>
                <h1>name: Steven Johnson</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
