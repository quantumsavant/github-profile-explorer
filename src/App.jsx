import React from 'react'
import ProfileCard from './components/ProfileCard'
import SearchForm from './components/SearchForm'



const App = () => {
  return (
    <div className='min-h-screen flex-col bg-gray-100 flex  gap-10'>

      <SearchForm />
      <ProfileCard />
      
      
      
    </div>
  )
}

export default App