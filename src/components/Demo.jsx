import {useState} from 'react'
const Demo = () => {
    const [videoNum, setVideoNum] = useState(1);
    const videoSrc ={
        1: "https://go-legal.ai/wp-content/uploads/2024/09/V5-Go-Legal-_HP_-1.mp4",
        2: "https://go-legal.ai/wp-content/uploads/2024/09/V2-Golegal-_HP_-1.mp4",
        3: "https://go-legal.ai/wp-content/uploads/2024/09/V2-Golegal-_HP_-1.mp4"
    }
    return (
        <div className='flex flex-col items-center justify-center bg-purple-200 max-lg:p-8 lg:p-9'>
            <h1 className='items-center justify-center px-4 py-2 text-center text-white bg-green-400 border rounded-full w-max'>How it Works</h1>
            <h1 className='my-3 text-4xl font-semibold'>Simple 3-step Process</h1>
            <div className="flex items-center justify-center p-2 lg:flex-row max-lg:flex-col gap-17">
                <div className="grid gap-10 lg:grid-rows-3 max-lg:grid-cols-3 max-lg:mt-4">
                    <div className='flex items-center gap-3 cursor-pointer lg:flex-row max-lg:flex-col' onClick={() => setVideoNum(1)}>
                        <button  className={`border border-blue-950 rounded-full w-20 h-20 text-4xl lg:px-8 ${videoNum === 1 ? "bg-blue-950 text-white" : ""} `} >1</button>
                        <p className={`${videoNum === 1 ? "bg-white" : ""} border-white border text-2xl lg:mr-5 p-5 text-center w-full`}>Select Template</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer lg:flex-row max-lg:flex-col' onClick={() => setVideoNum(2)}>
                        <button  className={`border border-blue-950 rounded-full w-20 h-20 text-4xl lg:px-8 ${videoNum === 2 ? "bg-blue-950 text-white" : ""} `} >2</button>
                        <p className={`${videoNum === 2 ? "bg-white" : ""} text-2xl lg:mr-5 p-5 text-center w-full border-white border`}>Edit & Review</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer lg:flex-row max-lg:flex-col' onClick={() => setVideoNum(3)}>
                        <button  className={`border border-blue-950 rounded-full w-20 h-20 text-4xl lg:px-8 ${videoNum === 3 ? "bg-blue-950 text-white" : ""} `} >3</button>
                        <p className={`${videoNum === 3 ? "bg-white" : ""} text-2xl lg:mr-5 p-5 text-center w-full border-white border`}>Collaborate & Sign</p>
                    </div>
                </div>
                <video class="lg:w-[70%] max-lg:mt-8" src={videoSrc[videoNum]} autoplay="" loop muted="muted" playsinline="" controlslist="nodownload" crossorigin="anonymous" data-video="1"></video>
            </div>
        </div>
    )
}

export default Demo