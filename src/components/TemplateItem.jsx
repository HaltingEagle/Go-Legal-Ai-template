import React from 'react'
import ai from '../assets/ai.png'
import { Link } from 'react-router-dom'
const TemplateItem = ({id, category, title, pages}) => {
    return (
        <Link to={`/templates/${id}`} className='flex flex-row items-center m-3 border border-gray-400'>
            <div className='items-center justify-center p-5'>
                <img src={ai} width={90} alt="" />
            </div>
            <div className='flex flex-col w-2/3'>
                <p className='p-3 font-semibold bg-purple-300 border rounded-full w-max'>{category}</p>
                <p className='text-3xl font-semibold max:md:text-2xl'>{title}</p>
                <p>Pages: {pages}</p>
            </div>
        </Link>
    )
}

export default TemplateItem