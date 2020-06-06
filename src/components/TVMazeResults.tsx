import React from 'react'
import css from './TVMazeResult.module.css'
import { Series } from '../model/series';

export interface TVMazeResultsProps {
    result: Series[];
    itemClick: (series: Series) => void;
}

export const TVMazeResults: React.FC<TVMazeResultsProps> = ({result, itemClick}) => {
    return (
        <>
        <div className={css.grid}>{result.length} results</div>
            

            {
                <div className={css.grid}>
                    {
                        result.map(series => {
                            const { show: { id, image, name } } = series;
                            return <div key={id} className={css.gridItem}>
                                <div className={css.movie} onClick={() => itemClick(series)}>
                                    {
                                        image ? <img src={image?.medium} alt="" /> : <NoImage />
                                    }
                                    <div className={css.movieText}>
                                        {name}
                                    </div>
                                </div>

                            </div>
                        })
                    }

                </div>
            }

        </>
    )
}

export const NoImage = () => {
    return <div className={css.noImage} />
  }