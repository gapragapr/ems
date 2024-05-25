import { ReactElement } from 'react'
import MainImage from '../../../assets/mainIllustration.png'
import MainImage2 from '../../../assets/mainIllustration2.png'
import MainImage3 from '../../../assets/mainIllustration3.png'

import { SectionWrapper } from '../../shared/SectionWrapper'
import { Image, Accordion, AccordionItem } from '@nextui-org/react'

export const Main = (): ReactElement => {
  return (
    <div className='w-[1440px]'>
        <SectionWrapper sectionAnchor='whatIsIt' className='mb-20'>
            <>
                <div className='bg-slate-700 text-white rounded-3xl bg-opacity-25 backdrop-filter backdrop-blur-lg p-6 box-border w-[45%]'>
                    <Image src={MainImage} />
                </div> 
                <div className='w-[40%] text-white flex flex-col justify-center'>
                    <h2 className='text-center text-xl mb-6'>WHAT IS <span className='text-blue-700 text-2xl'>SelfProtego</span>?</h2>
                    <p className='italic text-lg tracking-wide'><span className='text-2xl mr-2'>"</span><span className='text-blue-700 text-2xl'>SelfProtego</span> is a personal security app that works with your contacts in case of an emergency. It allows you to quickly notify your trusted contacts and emergency services if you find yourself in a dangerous situation. With features like real-time location sharing and instant alerts, SelfProtego helps ensure your safety when you need it most. <span className='text-2xl ml-2'>„</span></p>
                </div>
            </>
        </SectionWrapper>
        <SectionWrapper sectionAnchor='howItWorks' className='mb-20'>
            <>
                <div className='w-[50%] flex justify-center flex-col'>
                    <Accordion>
                        <AccordionItem className='text-white text-lg font-bold' title={'Login or register'}>
                            <p className='font-normal'>First you need to register. You can do this both in the application and on the website, there is no difference</p>
                        </AccordionItem>
                        <AccordionItem className='text-white text-lg font-bold' title={'Download the app or use web app'}>
                            <p className='font-normal'>The second step is to download the application. You can find it in the AppStore and PlayMarket, and on the website, of course. <span className='italic ml-3'> Also you can use app in web</span></p>
                        </AccordionItem>
                        <AccordionItem className='text-white text-lg font-bold' title={'Add your contacts'}>
                            <p className='font-normal'>Export as many contacts as you need. Ideally, add close people so that they are always the first to receive any information from you in emergency situations</p>
                        </AccordionItem>
                        <AccordionItem className='text-white text-lg font-bold' title={'Add code phrase'}>
                            <p className='font-normal'>In an emergency, all you have to do is say a phrase or word that you have set yourself for SelfProtego to do its job</p>
                        </AccordionItem>
                        <AccordionItem className='text-white text-lg font-bold' title={'What will happen?'}>
                            <p className='font-normal'>SelfProtego will send your geolocation via SMS to everyone you indicated in your contacts, and will also send a recording from your microphone, from which it can be clear what happened to you</p>
                        </AccordionItem>
                    </Accordion>
                    <p className='mt-10 text-white text-sm'>Who can use SelfProtego? For all! For your children, for your parents, for your friends and, of course, for you!</p>
                </div>
                <div className='bg-slate-700 text-white rounded-3xl bg-opacity-25 backdrop-filter backdrop-blur-lg p-6 box-border w-[45%]'>
                    <Image src={MainImage2} />
                    <h2 className='mt-6 text-center text-xl text-white tracking-[12px]'>HOW IT WORKS?</h2>
                </div>
            </>
        </SectionWrapper>
        <SectionWrapper sectionAnchor='howMutch' className=''>
            <>
                <div>
                    <Image src={MainImage3} />
                </div>
            </>
        </SectionWrapper>
    </div>
  )
}
