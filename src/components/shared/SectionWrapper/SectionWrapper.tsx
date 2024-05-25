import { ReactElement } from 'react'

type SectionWrapperProps = {
    sectionAnchor: string,
    className: string,
    children: ReactElement
}

export const SectionWrapper = ({sectionAnchor, className, children}: SectionWrapperProps) => {
  return (
    <div className={className} id={sectionAnchor}>
        <div className='w-full flex justify-between'>
            {children}
        </div>
    </div>
  )
}
