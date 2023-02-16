import styles from '@/styles/Customform.module.css'
import { Inknut_Antiqua } from '@next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function CustomForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [calories, setCalories] = useState('');
    const [submitted, setSubmitted] = useState(false);
    //error msg for type
    const [ageError, setAgeError] = useState(false);
    const [weightError, setWeightError] = useState(false);
    const [heightError, setHeightError] = useState(false);

    const r = useRouter();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        const value = e.target.value
        setAge(value)
        setAgeError(value && isNaN(value) ? true : false)
    }
    const handleWeightChange = (e) => {
        const value = e.target.value
        setWeight(value)
        setWeightError(value && isNaN(value) ? true : false)
    }
    const handleHeightChange = (e) => {
        const value = e.target.value
        setHeight(value)
        setHeightError(value && isNaN(value) ? true : false)
    }
    const calcCalories = () => {
        setCalories(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
        setSubmitted(true);
    }
    const handleMeals = () => {
        r.push({
            pathname: '/result',
            query: {
                name: name,
                calories: calories,
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        !ageError && !weightError && !heightError ? calcCalories() : null
    }

    return (
        <>
            <div className={styles.cont} >
                <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Daily Calories Calculator</h2>
                    <div className={styles.inputCont}>
                        <div className={styles.label}>
                            <label>Name</label>
                        </div>
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Name"
                            required
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className={styles.inputCont}>
                        <div className={styles.label}>
                            <label>Age</label>
                        </div>              
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Age"
                            required
                            value={age}
                            onChange={handleAgeChange}
                        />
                        {ageError && <div className={styles.errorMessage}>Please enter the number</div>}
                    </div>
                    <div className={styles.inputCont}>
                        <div className={styles.label}>
                            <label>Weight(kg)</label>
                        </div>
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Weight / Kilogram"
                            required
                            value={weight}
                            onChange={handleWeightChange}
                        /> 
                        {weightError && <div className={styles.errorMessage}>Please enter the number</div>}
                    </div>
                    <div className={styles.inputCont}>
                        <div className={styles.label}>
                            <label>Height(cm)</label>
                        </div> 
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder="Height / Centimeter"
                            required
                            value={height}
                            onChange={handleHeightChange}
                        />
                        {heightError && <div className={styles.errorMessage}>Please enter the number</div>}
                    </div>
                    {submitted && ( // conditionally render the calories and "See your meals" button
                        <div className={styles.result}>
                            <div className={styles.resultBox}>
                                <div className={styles.resultLabel}>You need daily calories</div>
                                <div className={styles.resultValue}>{Math.ceil(calories)} kCal</div>
                            </div>
                            <button
                                className={styles.button} 
                                onClick={handleMeals}>See your daily meals
                            </button>
                        </div>
                    )}
                    {!submitted && ( // conditionally render the "Submit calculate" button
                        <button className={styles.button} type="submit">Calculate Your Calories</button>
                    )}
                </form>
            </div>
        </>
    )
}
