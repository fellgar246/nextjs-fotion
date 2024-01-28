import Image from 'next/image'

export const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
        <div className='flex items-center'>
            <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
                <Image src='/documents.png' alt='Documents' className='object-contain dark:hidden' fill />
                <Image src='/documents-dark.png' alt='Documents' className='object-contain hidden dark:block' fill />
            </div>
            <div className='relative h-[400px] w-[400px] hidden md:block'>
                <Image src='/reading.png' className='object-contain dark:hidden' alt='reading' fill />
                <Image src='/reading-dark.png' className='object-contain hidden dark:block' alt='reading' fill />
            </div>
        </div>
        
    </div>
  )
}
