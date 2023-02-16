// import styles from '@/styles/Home.module.css'
// import { useRouter } from 'next/router';
// import { useState } from 'react'

// export default function CustomForm() {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [weight, setWeight] = useState('');
//     const [height, setHeight] = useState('');
//     const [calories, setCalories] = useState('');
//     const [submit, setSubmit] = useState(false)

//     const r = useRouter();

//     const handleNameChange = (e) => {
//         setName(e.target.value)
//     }
//     const handleAgeChange = (e) => {
//         setAge(e.target.value)
//     }
//     const handleWeightChange = (e) => {
//         setWeight(e.target.value)
//     }
//     const handleHeightChange = (e) => {
//         setHeight(e.target.value)
//     }
//     const calcCalories = () => {
//         setCalories(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         r.push({
//             pathname: '/result',
//             query: {
//                 name: name,
//                 calories: calories,
//             }
//         })
//     }

//     return (
//         <>
//         <div>
//             {/* need to add action in form tag */}
//             <form onSubmit={handleSubmit} className={styles.formCont}>
//                 <label>Name : </label>
//                 <input 
//                     type="text" 
//                     placeholder="Name"
//                     // required
//                     value={name}
//                     onChange={handleNameChange}
//                 />
//                 <label>Age : </label>               
//                 <input 
//                     type="number" 
//                     placeholder="Age"
//                     //required
//                     value={age}
//                     onChange={handleAgeChange}
//                 />
//                 <label>Weight(kg) : </label> 
//                 <input 
//                     type="number" 
//                     placeholder="Weight / Kilogram"
//                     //required
//                     value={weight}
//                     onChange={handleWeightChange}
//                 /> 
//                 <label>Height(cm) : </label> 
//                 <input 
//                     type="number" 
//                     placeholder="Height / Centimeter"
//                     //required
//                     value={height}
//                     onChange={handleHeightChange}
//                 />
//                 <div>You need daily calories</div>
//                 <div>{calories}</div>
//                 <button type="submit" value="Submit">See your meals</button>
//             </form>  
//             <button onClick={calcCalories}>Submit calculate</button>
//         </div>
//         </>
//     )
// }

import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function CustomForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [calories, setCalories] = useState('');
    const [submitted, setSubmitted] = useState(false); // add submitted state variable

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
        setSubmitted(true); // set submitted to true after calories are calculated
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        calcCalories();
    }

    return (
        <>
            <div>
                {/* need to add action in form tag */}
                <form onSubmit={handleSubmit} className={styles.formCont}>
                    <label>Name : </label>
                    <input 
                        type="text" 
                        placeholder="Name"
                        // required
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label>Age : </label>               
                    <input 
                        type="number" 
                        placeholder="Age"
                        //required
                        value={age}
                        onChange={handleAgeChange}
                    />
                    <label>Weight(kg) : </label> 
                    <input 
                        type="number" 
                        placeholder="Weight / Kilogram"
                        //required
                        value={weight}
                        onChange={handleWeightChange}
                    /> 
                    <label>Height(cm) : </label> 
                    <input 
                        type="number" 
                        placeholder="Height / Centimeter"
                        //required
                        value={height}
                        onChange={handleHeightChange}
                    />
                    {submitted && ( // conditionally render the calories and "See your meals" button
                        <>
                            <div>You need daily calories</div>
                            <div>{calories}</div>
                            <button 
                                onClick={() => r.push({
                                                    pathname: '/result',
                                                    query: {
                                                        name: name,
                                                        calories: calories,
                                                    }
                                                })}>See your meals
                            </button>
                        </>
                    )}
                    {!submitted && ( // conditionally render the "Submit calculate" button
                        <button type="submit" value="Submit">Submit calculate</button>
                    )}
                </form>
            </div>
        </>
    )
}
