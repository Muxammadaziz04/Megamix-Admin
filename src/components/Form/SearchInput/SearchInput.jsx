import { SearchIcon } from '../../icons';
import cls from './SearchInput.module.scss'

const SearchInput = ({
    placeholder = '',
    onChange = () => { },
    value,
    register = {}
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
                {...register}
            />
        </label>
    );
}

export default SearchInput;
