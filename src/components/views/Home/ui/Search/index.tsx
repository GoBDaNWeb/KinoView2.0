// * styles
import styles from "./styles.module.sass";

// * components
import SearchForm from "../SearchForm";
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
