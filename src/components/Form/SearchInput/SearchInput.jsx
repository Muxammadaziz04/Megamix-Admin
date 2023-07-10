import { SearchIcon } from '../../icons';
import cls from './SearchInput.module.scss'

const SearchInput = ({
    placeholder = '',
    onChange = () => { },
    value
}) => {
    return (
        <label className={cls.label}>
            <SearchIcon />
            <input
                type='text'
                className={cls.input}
                placeholder={placeholder}
                onChange={onChange}
                {...(value && { value })}
            />
        </label>
    );
}

export default SearchInput;
