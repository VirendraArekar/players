import React, { memo } from 'react';
import Rating from './Rating';
import Match from './Match';

function Card({players}) {
  return (
    <>
     {
      players.map((item, index) => {
        return(
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5 " key={index}>
                <article className="overflow-hidden rounded-lg shadow-lg m-1 bg-[#131740] text-[#38BDF8] h-full transform transition duration-500 hover:scale-110">
                    <img 
                    alt="Placeholder" 
                    className="block h-auto w-full" 
                    src={require(`../assets/player-images/${item.Id}.jpg`)}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src= `../assets/player-images/63706.jpg`;
                    }} 
                    />
                    <header className="flex items-center justify-between leading-tight px-2 md:px-4 pt-2 md:pt-2">
                        <h1 className="text-sm">
                                Name :- {item.PFName}
                        </h1>
                        <Rating rate={item.Skill} />
                    </header>
                    <h1 className="px-2 md:px-4 text-sm">
                                Team Name :- {item.TName}
                    </h1>
                    <h3 className='px-2 md:px-4 text-sm'>Skill Description :- {item.SkillDesc}</h3>
                    <h3 className='px-2 md:px-4 text-sm'>Value :- ${item.Value}</h3>
                    <h2 className='text-center font-medium my-2 text-sm'>UPCOMING MATCHES</h2>
                    <Match matches={item.UpComingMatchesList}/>
                </article>
            </div>
        )
      })
     }
    </>
  )
}

export default  memo(Card)