import { FC } from "react";
import styles from './search-results.module.scss';
import SearchResultsItem from "../search-results-item/SearchResultsItem";

interface SearchResultsProps {
  searchString: string,
  suggestions: string[]
}

const SearchResults: FC<SearchResultsProps> = ({ searchString, suggestions }) => {
  console.log(suggestions)
  if (!suggestions || suggestions.length == 0) {
    return
  }

  return (
    <div className={styles['search-results']}>
      {!searchString && <h4 className={styles['search-results__header']}>Ваши запросы</h4>}
      <ul>
        {suggestions?.map((suggestion, index) => <SearchResultsItem key={index} text={suggestion} searchString={searchString} />)}
      </ul>
    </div>
  )
}

export default SearchResults;