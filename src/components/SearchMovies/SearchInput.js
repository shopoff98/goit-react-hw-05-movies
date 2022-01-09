import { useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

export default function SearchInput({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    const { value } = e.currentTarget;
    setSearchQuery(value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchQuery === "") {
      return toast.error(`И что по-твоему мне вводить?`);
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="movieName"
        type="text"
        value={searchQuery}
        placeholder="Search movies"
        onChange={handleSearch}
      />
      <button type="sumbit">Search</button>
    </form>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
