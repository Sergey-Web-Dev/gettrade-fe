import { FC } from 'react'
import styles from './search-results-item.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface SearchResultsItemProps {
  text: string,
  searchString: string
}

const SearchResultsItem: FC<SearchResultsItemProps> = ({ text, searchString }) => {
  return (<Link href='/'>
    <li className={styles['search-results-item']}>
      <div className={styles['search-results-item__left']}>
        <Image src='/search-res.svg' width={20} height={17} alt='' />
        <div>
          <span style={{ color: searchString ? 'rgba(140, 140, 140, 1)' : '' }}>{text}</span>
          <span className={styles['overlaying-text']}>{searchString}</span>
        </div>
      </div>
      {!searchString && <Image src='/remove-cross.svg' width={12} height={12} alt='' />}
    </li>
  </Link>)
}

export default SearchResultsItem