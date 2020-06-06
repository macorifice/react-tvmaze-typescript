import React from 'react'
import { Show } from '../model/series'
import css from './TVMazeShowDetails.module.css'

export interface TVMazeShowDetailsProps {
    show: Show | null;
    onClose: () => void;
}

export const TVMazeShowDetails: React.FC<TVMazeShowDetailsProps> = ({ show, onClose }) => {
    return show && (
        <div className={css.wrapper}>
            <div className={css.card}>

                <span
                    className={css.closeButton}
                    onClick={onClose}
                    role='img'
                    aria-label='Close'
                >
                    X
            </span>

                <img className={css.image} src={show.image.original} alt="" />

                {
                    show?.genres.map(g =>
                        <span className={css.tag} key={g}>{g}</span>
                    )
                }
                <div className={css.metadata}>
                    <h1>{show?.name}</h1>

                    <div className={css.summary} dangerouslySetInnerHTML={{ __html: show?.summary }} />
                    <a className={css.button} href={show?.url} target='_blank' rel='noopener noreferrer'></a>
                </div>

            </div>

        </div>
    )
}
