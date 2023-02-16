import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function CustomForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [calories, setCalories] = useState(0);

    const r = useRouter();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }
    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }
    const handleHeightChange = (e) => {
        setHeight(e.target.value)
    }
    const calcCalories = () => {
        setCalories(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        calcCalories();

        r.push({
            pathname: '/result',
            query: {
                name: name,
                calories: calories,
            }
        })
    }


    return (
        <>
        <div>
            {/* need to add action in form tag */}
            <form onSubmit={handleSubmit} className={styles.formCont}>
                <input 
                    type="text" 
                    placeholder="Name"
                    // required
                    value={name}
                    onChange={handleNameChange}
                />
                <input 
                    type="number" 
                    placeholder="Age"
                    //required
                    value={age}
                    onChange={handleAgeChange}
                /> 
                <input 
                    type="number" 
                    placeholder="Weight / Kilogram"
                    //required
                    value={weight}
                    onChange={handleWeightChange}
                /> 
                <input 
                    type="number" 
                    placeholder="Height / Centimeter"
                    //required
                    value={height}
                    onChange={handleHeightChange}
                />
                <div>You need daily calories</div>
                <div>{calories}</div>
                <button type="submit" value="Submit">See your meals</button>
            </form>
            <button onClick={calcCalories}>Submit</button>
        </div>
        </>
    )
}