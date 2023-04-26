import React, {memo} from 'react'
import moment from 'moment-timezone';

function Match({matches}) {
  return (
    <>
      {
        matches.map((match, index) => {
            return(
                <div key={index}>
                    <header className="flex relative items-center justify-between leading-tight px-2 md:px-4 pt-2 md:pt-2 mb-2">

                    <h1 className="text-sm">
                            {match.CCode ? match.CCode :  'Unknown'}
                    </h1>
                    <h1>VS</h1>
                    <h1 className="text-sm">
                            {match.VsCCode ? match.VsCCode  : 'Unknown'}
                    </h1>
                    </header>

                    <h3 className='text-center text-sm'>{match.MDate !== '' ? moment.tz(match.MDate,'Asia/Kolkata').format('DD-MM-YYYY HH:mm a') : 'NA'}</h3>
                </div>
            )
        })
      }
    </>
  )
}

export default memo(Match)
