import styles from '../../components/alert.module.css';
import {clsx} from 'clsx';
import Link from "next/link";

export default function Alert({children, type}) {
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </div>
    );
}