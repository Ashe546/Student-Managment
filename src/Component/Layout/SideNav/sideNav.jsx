import React from 'react'
import ArrowDown from '../../svg/arrowDown'
import Dashboard from '../../svg/dashboard'
import Toggel from '../../svg/toggel'
import User from '../../svg/user'
import { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function sideNave() {
  const [Teacher, setTeacher] = useState("none")
  const [Student, setStudent] = useState('none')


  const handelTeacherDropDown = () => {
    setTeacher(Teacher === '' ? 'none' : '')
  }

  const handelStudentDropDown = () => {
    setStudent(Student === '' ? 'none' : '')
  }

  return (

    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">

          <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <Toggel />
          </button>

        </div>
      </div>
      <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
        <div className="px-6">
          <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Student Managment</a>
        </div>

        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <NavLink to ="/" className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="#">
                <Dashboard />
                Dashboard
              </NavLink>
            </li>


            <li className="hs-accordion" id="users-accordion">
              <button className='w-full' onClick={() => handelTeacherDropDown()}>
                <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="#">
                  <span><User /></span>
                  Teacher
                  <ArrowDown />
                </a>
              </button>

              <div style={{ display: Teacher }} className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                <ul className="pt-2 pl-2">
                  <li>
                    <NavLink to="/teacher" className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="#">
                      All Teacher
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/detail" className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="#">
                      Teacher Details
                    </NavLink>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="#">
                      Add Teacher
                    </a>
                  </li>
                </ul>
              </div>
            </li>



            <li className="hs-accordion" id="users-accordion">
              <button className='w-full' onClick={() => handelStudentDropDown()}>
                <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="#">
                  <span><User /></span>
                  Students
                  <ArrowDown />
                </a>
              </button>

              <div style={{ display: Student }} className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                <ul className="pt-2 pl-2">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="#">
                      All Student
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="#">
                      Student Details
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="#">
                      Admission Form
                    </a>
                  </li>
                </ul>
              </div>
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}

