import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('header')}>
            <h3 className={cx('title')}>TO DO LIST</h3>
            <div className={cx('line-space')}></div>
        </header>
    );
}
