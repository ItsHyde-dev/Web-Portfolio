import { useEffect, useRef, useState } from "react";
import './crazy.css'

function Crazy() {

  const leftSibling = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (leftSibling.current) {
      setHeight(leftSibling.current.offsetHeight);
    }
  }, [])

  return (
    <div className='flex flex-row h-full'>

      <div className='flex flex-col' ref={leftSibling}>
        <div className='p-5 bg-blue-400'>
          hello <br />
          hello <br />
          hello <br />
          hello <br />
        </div>
        <div className='p-5 bg-blue-400'>
          hello <br />
          hello <br />
          hello <br />
          hello <br />
        </div>
      </div>

      {
        height &&
        <div className='
          p-5 bg-blue-400 overflow-y-auto
          transparent-scrollbar
        ' style = {{height: `${height}px`}}>
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
          hello <br />
        </div>
      }
    </div>
  )
}

export default Crazy
