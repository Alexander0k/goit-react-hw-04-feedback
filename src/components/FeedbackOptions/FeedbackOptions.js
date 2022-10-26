import styles from './FeedbackOptions.module.css'

const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.button__list}>
            {options.map(option => (
            <li key={option} className={styles.button__listItem}>
                <button
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                    className={styles.button__listBtn}>
                {option}
                </button>
            </li>
            ))}
        </ul>
    );
};

export default Feedback;