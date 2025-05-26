import { ChangeEvent, useState } from 'react';
import styles from './search-bar.module.scss';
import SearchResults from '../search-results/SearchResults';
import Image from 'next/image';

const suggestions = [
  'наушники', 'наушники беспроводные', 'наушники крутые', 'наушники чугунные'
]

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchString(value);

    const match = suggestions.filter(s => s.toLowerCase().startsWith(value.toLowerCase()));
    setFilteredSuggestions(match);
  }

  return (<div className={styles['search']}>
    <div className={styles['search__icon']} style={{ fill: isFocused ? 'rgba(19, 120, 245, 1)' : 'currentcolor' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill={isFocused ? 'rgba(19, 120, 245, 1)' : 'rgba(140, 140, 140, 1)'} xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4999 14.0001H14.7099L14.4299 13.7301C15.6299 12.3301 16.2499 10.4201 15.9099 8.39014C15.4399 5.61014 13.1199 3.39014 10.3199 3.05014C6.08989 2.53014 2.52989 6.09014 3.04989 10.3201C3.38989 13.1201 5.60989 15.4401 8.38989 15.9101C10.4199 16.2501 12.3299 15.6301 13.7299 14.4301L13.9999 14.7101V15.5001L18.2499 19.7501C18.6599 20.1601 19.3299 20.1601 19.7399 19.7501C20.1499 19.3401 20.1499 18.6701 19.7399 18.2601L15.4999 14.0001ZM9.49989 14.0001C7.00989 14.0001 4.99989 11.9901 4.99989 9.50014C4.99989 7.01014 7.00989 5.00014 9.49989 5.00014C11.9899 5.00014 13.9999 7.01014 13.9999 9.50014C13.9999 11.9901 11.9899 14.0001 9.49989 14.0001Z" />
      </svg>
    </div>
    <input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className={styles['search-bar']} type='text' placeholder="Поиск" onChange={handleChange} />
    {isFocused && <SearchResults searchString={searchString} suggestions={filteredSuggestions} />}
    <div className={styles['search__buttons']}>
      {isFocused && <button className={styles['search__buttons__btn']}>
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"
            d="M11.7338 0.275313C11.3788 -0.0796359 10.8055 -0.0796359 10.4505 0.275313L6 4.71672L1.54949 0.266212C1.19454 -0.0887372 0.62116 -0.0887372 0.266212 0.266212C-0.0887372 0.62116 -0.0887372 1.19454 0.266212 1.54949L4.71672 6L0.266212 10.4505C-0.0887372 10.8055 -0.0887372 11.3788 0.266212 11.7338C0.62116 12.0887 1.19454 12.0887 1.54949 11.7338L6 7.28328L10.4505 11.7338C10.8055 12.0887 11.3788 12.0887 11.7338 11.7338C12.0887 11.3788 12.0887 10.8055 11.7338 10.4505L7.28328 6L11.7338 1.54949C12.0796 1.20364 12.0796 0.62116 11.7338 0.275313Z" />
        </svg>
      </button>}
      {isFocused && <div className={styles['search__buttons__separator']}></div>}
      <button className={styles['search__buttons__btn']}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1615_3264)">
            <path
              d="M14.8303 4.41162C14.8303 2.15934 13.005 0.333496 10.7532 0.333496C8.50153 0.333496 6.67615 2.15934 6.67615 4.41162V8.74348C6.67615 10.9958 8.50153 12.8216 10.7532 12.8216C13.005 12.8216 14.8303 10.9958 14.8303 8.74348V4.41162Z"
              fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M17.0945 10.3407C17.518 10.509 17.725 10.9887 17.5567 11.4122C16.4831 14.1148 13.843 16.0294 10.7521 16.0294C7.66086 16.0294 5.02334 14.1144 3.94777 11.4128C3.77922 10.9894 3.9858 10.5095 4.40918 10.341C4.83256 10.1724 5.31242 10.379 5.48097 10.8024C6.31555 12.8987 8.36055 14.3791 10.7521 14.3791C13.1442 14.3791 15.1907 12.8984 16.0231 10.8029C16.1913 10.3794 16.671 10.1725 17.0945 10.3407Z"
              fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.7543 14.3789C11.21 14.3789 11.5794 14.7483 11.5794 15.204V20.8416C11.5794 21.2973 11.21 21.6667 10.7543 21.6667C10.2986 21.6667 9.9292 21.2973 9.9292 20.8416V15.204C9.9292 14.7483 10.2986 14.3789 10.7543 14.3789Z"
              fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.85083 20.8417C5.85083 20.386 6.22025 20.0166 6.67594 20.0166H14.8301C15.2858 20.0166 15.6553 20.386 15.6553 20.8417C15.6553 21.2974 15.2858 21.6668 14.8301 21.6668H6.67594C6.22025 21.6668 5.85083 21.2974 5.85083 20.8417Z"
              fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_1615_3264">
              <rect width="21.3333" height="21.3333" fill="white" transform="translate(0.333374 0.333496)" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  </div>)
}

export default SearchBar