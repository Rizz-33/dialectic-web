import React from 'react'
import { Button } from '../common'
import Containerf from '../common/containerf'
import '../../styles/fonts/fonts'
import Image from 'next/image'
import latest_img from '/public/images/Latest Episode Section Image.png'
import { FaRegCirclePlay } from 'react-icons/fa6'

const latest = () => {
  return (
    <Containerf>
      <div className=" h-max grid grid-col-1 md:grid-cols-2 mt-20 p-8  ">
        <div>
          <Image
            alt={'latest image'}
            src={latest_img}
            width={450}
            height={500}
          />
        </div>
        <div className="felx flex-col justify-between">
          <div className="flex items-center justify-left gap-5 bg-gray-50 rounded-full pr-4 w-80 ">
            <div>
              <Button variant={'blue'} size={'rounded'}>
                Episode 1
              </Button>
            </div>
            <div>Speaker Name | 33 mins</div>
          </div>
          <br />
          <h1 className="text-5xl md:text-6xl font-medium tracking-wide">
            Start career path as
            <br /> a Product Designer <br />
            in Startup
          </h1>
          <br />
          <h1 className="text-4l text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            est leo. Nulla fermentum ultrices ullamcorper. Nam eleifend mi sed
            sem convallis condimentum.
          </h1>
          <br />
          <div>
            <Button className="flex items-center gap-3 justify-center">
              <div>Listen Now</div>
              <FaRegCirclePlay className="" />
            </Button>
          </div>
        </div>
      </div>
    </Containerf>
  )
}

export default latest
