import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../redux/features/playersSlice'
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import NoRecords from '../components/NoRecords';
import Error from '../components/Error';


export default function Home() {
  const dispatch = useDispatch()
  const { players, loading, error } = useSelector((state) =>state.players);
  const [peoples, setPeoples] = useState([]);
  const [keyword , setKeyword] = useState('');

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch])

  useEffect(() => {
    filterData();
  },[players])

  const filterData = async() => {
    var myPlayers = players?.playerList.slice(0,50);
    if(myPlayers?.length > 0){
       await myPlayers.sort((a, b) => {
         return a.Value  - b.Value
      });
      await setPeoples(myPlayers)
    }
  }

  const changeKeyword = (word) => {
    setKeyword(word)
  }

  const searchData = (e) => {
    e.preventDefault();
    if(keyword !== ''){
      const filtered = players?.playerList.filter((player) => player.PFName.toString().toLowerCase().includes(keyword.toLowerCase()) || player.TName.toString().toLowerCase().includes(keyword.toLowerCase()))
      setPeoples(filtered)
    }
    else{
      filterData()
    }
  }


  return (
    <div className="bg-[#050830]">
      <div className="container  mx-auto px-4 md:px-12">
         <SearchBar keyword={keyword} changeKeyword={changeKeyword} searchData={searchData}/>
         {
          loading === 'pending' &&
          <LoadingSpinner />
         }

         {
          error !== null &&
          <Error />
         }
        <div className="flex flex-wrap -mx-1 lg:-mx-4 pb-32">
          {
            peoples.length > 0 ?
            <Card players={peoples}/>
            :
            <NoRecords setKeyword={setKeyword}/>
          }
        </div>
      </div>
    </div>
  )
}
