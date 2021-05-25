import React from 'react'
import styles from './Paginator.module.css'

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {

    //вывод страниц
    let pagesCount = Math.ceil (totalUsersCount / pageSize) 

        let pages = [];
        for (let i=1 ; i <= pagesCount; i++) {
            pages.push(i)
        }

    return  <div> 
                {pages.map(page => {
                   return <span className={currentPage === page ? styles.selectedPage : styles.noSelected} onClick={(e) => { onPageChanged(page) }}>{page}</span>
                })}
        </div>
}

export default Paginator;