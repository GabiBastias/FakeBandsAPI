/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
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
    <>
      <APIShower />
    </>
  )
}

export default App
