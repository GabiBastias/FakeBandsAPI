/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import backgroundIMG from './assets/PageBackground.png'
import APIShower from './components/APIShower/APIShower'
import { useAppDispatch } from './services/redux/hooks'
import { getAllFakeGenres } from './services/redux/actions';
import { setAllGenres } from './services/redux/reducer';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(getAllFakeGenres())
    .then(data => {
      dispatch(setAllGenres(data.payload))
    })
    .catch(error => {
      console.log(error);
      alert(error.message)
    });
  }, [])

  return (
    <main>
      <img className='backgroundIMGbody' src={backgroundIMG} alt="backgoundIMG" />
      <APIShower />
    </main>
  )
}

export default App
