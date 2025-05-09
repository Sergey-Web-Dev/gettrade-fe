import styles from './search-bar.module.scss';

const SearchBar = () => {
  return <input className={styles['search-bar']} type='text' placeholder="Поиск" />
}

export default SearchBar