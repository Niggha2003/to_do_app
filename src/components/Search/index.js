import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, forwardRef, useImperativeHandle } from 'react';

const cx = classNames.bind(styles);

function Search({ handleAdd }, ref) {
    const [inputValue, setInputValue] = useState('');

    useImperativeHandle(ref, () => {
        return {
            inputValue,
        };
    });

    return (
        <div className={cx('wrapper')}>
            <input
                onInput={(e) => {
                    setInputValue(e.target.value);
                }}
                type="text"
                placeholder="add item ..."
                className={cx('item-input')}
                value={inputValue}
            />
            <button
                onClick={() => {
                    handleAdd();
                    setInputValue('');
                }}
                className={cx('add-btn', 'btn')}
            >
                ADD
            </button>
        </div>
    );
}

export default forwardRef(Search);
