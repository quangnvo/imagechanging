import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


export default function Home() {
  return (
    <div className='flex flex-col space-y-4'>

      <div className='flex justify-center items-center mt-14 mb-8 text-3xl'>
        <h1>Hi <span className='font-semibold'>Bunzo</span>, slide the picture! 😎</h1>
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className='w-7/12 rounded-2xl overflow-hidden shadow-xl'>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage
              src="/image_2_ne.jpeg"
              alt="Image one"
            />}
            itemTwo={<ReactCompareSliderImage
              src="/image_1_ne.jpeg"
              alt="Image two"
            />}
          />
        </div>
      </div>


    </div>
  )
}
