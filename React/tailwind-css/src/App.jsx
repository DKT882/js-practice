import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [source, setSource] = useState('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpgs')
  function handleClick(e) {
    setSource(e.target.value)
  }

  return (
    <>
      <div className='flex gap-10  center justify-center items-center flex-col'>
        <div className="cards flex gap-6  center justify-center items-center">
          <div className="card border-2 border-solid bg-red-300 border-red-500 w-100 rounded-[15px] p-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sint enim vitae nesciunt deleniti. Totam, sunt aspernatur dignissimos veniam maxime ab tempore neque molestias inventore tempora omnis. Illo, iste itaque!</div>
          <div className="card border-2 border-solid bg-red-300 border-red-500 w-100 rounded-[15px] p-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sint enim vitae nesciunt deleniti. Totam, sunt aspernatur dignissimos veniam maxime ab  tempore neque molestias inventore tempora omnis. Illo, iste itaque!</div>
          <div className="card border-2 border-solid bg-red-300 border-red-500 w-100 rounded-[15px] p-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sint enim vitae nesciunt deleniti. Totam, sunt aspernatur dignissimos veniam maxime ab tempore neque molestias inventore tempora omnis. Illo, iste itaque!</div>
        </div>
        <div className="section flex gap-6  center justify-center rounded-full overflow-hidden items-center max-w-[75vw]">
          <div className="left max-w-[50%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam perferendis explicabo ex sapiente, alias eum nulla vitae obcaecati? Architecto molestias, sunt ratione magnam voluptate quod? Adipisci culpa provident facere?
          </div>
          <div><img src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt="" /></div>
        </div>
        <input
          type="text"
          value={() => { source ? source : 'html' }}
          onChange={handleClick}
        />
      </div>
    </>
  )
}

export default App

