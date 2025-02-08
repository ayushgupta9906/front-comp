import { useState } from 'react';

function OptionForm({ setSelectedOption }) {
    const [selected, setSelected] = useState('t');

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelected(value);
        setSelectedOption(value);
    };

    const styles = {
        radioContainer: {
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
        },
        radioLabel: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
        },
        radioInput: {
            marginRight: '5px',
        },
    };

    return (
        <div className="containers">
            <div style={styles.radioContainer}>
                <label style={styles.radioLabel}>
                    <input
                        type="radio"
                        value="s"
                        name="options"
                        style={styles.radioInput}
                        checked={selected === 's'}
                        onChange={handleOptionChange}
                    />
                    Sessional
                </label>
                <label style={styles.radioLabel}>
                    <input
                        type="radio"
                        value="e"
                        name="options"
                        style={styles.radioInput}
                        checked={selected === 'e'}
                        onChange={handleOptionChange}
                    />
                    Exam marks
                </label>
                <label style={styles.radioLabel}>
                    <input
                        type="radio"
                        value="t"
                        name="options"
                        style={styles.radioInput}
                        checked={selected === 't'}
                        onChange={handleOptionChange}
                    />
                    Total Marks
                </label>
            </div>
        </div>
    );
}

export default OptionForm;
