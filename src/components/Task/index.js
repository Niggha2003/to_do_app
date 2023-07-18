import classNames from 'classnames/bind';
import styles from './Task.module.scss';

const cx = classNames.bind(styles);

export default function Task({ content, handleDelete, handleUpdate }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('content')}>{content}</p>
            <button onClick={handleDelete} className={cx('option-btn', 'btn')}>
                delete
            </button>
            <button onClick={handleUpdate} className={cx('option-btn', 'btn')}>
                edit
            </button>
        </div>
    );
}
