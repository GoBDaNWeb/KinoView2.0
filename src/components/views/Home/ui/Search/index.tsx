import styles from "./styles.module.sass";

import SearchForm from "../SearchForm";
//@ts-ignore
import SearchDropDown from "../SearchDropDown";

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchForm />
      <SearchDropDown />
    </div>
  );
};

export default Search;
