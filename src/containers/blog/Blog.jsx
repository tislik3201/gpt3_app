import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'


const blogData = [
  {
    img: blog02,
    date: '19.11.2022',
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    img: blog03,
    date: '17.11.2022',
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    img: blog04,
    date: '16.11.2022',
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    img: blog05,
    date: '14.11.2022',
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  }
]

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
        <div className="gpt3__blog-heading">
            <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
            <div className='gpt3__blog-container_groupA'>
                <Article imgUrl={blog01} date="20.11.2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            </div>
            <div className='gpt3__blog-container_groupB'>
                {blogData.map((item,index)=><Article imgUrl={item.img} date={item.date} title={item.title} key={item.title+index}/>)}
            </div>
        </div>
    </div>
  )
}

export default Blog