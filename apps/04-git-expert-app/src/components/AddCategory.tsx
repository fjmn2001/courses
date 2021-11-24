import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";
import PropTypes from "prop-types";

interface AddCategoryProps {
    setCategories: Dispatch<SetStateAction<string[]>>
}

const AddCategory = ({setCategories}: AddCategoryProps) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (inputValue.trim().length === 0) {
            return;
        }

        setCategories((categories) => [inputValue, ...categories])
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValueChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
