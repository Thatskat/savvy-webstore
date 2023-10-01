import { BsShuffle } from "react-icons/bs";
import { RiExpandUpDownFill } from "react-icons/ri";

import * as styles from "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className={styles.optionsBar}>
      <div className="selectionOverview">
        <button>
          Category <RiExpandUpDownFill />
        </button>
        <button>
          Price <RiExpandUpDownFill />
        </button>
        <button>
          Condition <RiExpandUpDownFill />
        </button>
        <button>
          Brand <RiExpandUpDownFill />
        </button>
        <button>
          Size <RiExpandUpDownFill />
        </button>
        <button>
          Colour <RiExpandUpDownFill />
        </button>
        <button>
          Material <RiExpandUpDownFill />
        </button>
        <button>
          Location <RiExpandUpDownFill />
        </button>
      </div>
      <div className="salesShuffle">
        <button>Sale Items</button>
        <button className="shuffle">
          <BsShuffle />
          Stock Shuffle
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
