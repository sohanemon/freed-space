'use client';

import { ComponentProps, useState } from 'react';
import { cn } from '@sohanemon/utils';

interface PaginationProps extends ComponentProps<'section'> {}

export default function Pagination({ className, ...props }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className={cn('', className)} {...props}>
      <div className="my-12 flex flex-col items-center">
        <div className="flex text-white">
          <div className="mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-chevron-left h-4 w-4"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
          <div className="flex h-8 rounded-full font-medium">
            {Array.from(Array(4)).map((_, idx) => (
              <div
                onClick={() => setCurrentPage(idx + 1)}
                className={cn(
                  'hidden w-8 cursor-pointer items-center  justify-center rounded-full leading-5 text-white transition  duration-150 ease-in md:flex ',
                  { 'bg-accent': currentPage === idx + 1 }
                )}
              >
                {idx + 1}
              </div>
            ))}
            <div className="hidden w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in  md:flex  ">
              ...
            </div>
            <div className="hidden w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in  md:flex  ">
              15
            </div>
          </div>
          <div className="ml-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-chevron-right h-4 w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
