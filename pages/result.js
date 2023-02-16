import { useRouter } from "next/router"
import nutrition from '@/data/fastfooddata.json'

export default function Result(){
    const r = useRouter();
    const { name, calories } = r.query

    //Filter meals based on calories count
    const filterMeals = nutrition.filter(n => n["Energy (kCal)"] <= calories);

    //Random select 3 meals from the filtered list
    const selectMeals = [];
    while (selectMeals.length < 3 && filterMeals.length > 0) {
        const randomIndex = Math.floor(Math.random() * filterMeals.length)
        const meal = filterMeals[randomIndex]
        selectMeals.push(meal);
        filterMeals.splice(randomIndex, 1)
    }

    const totalCalories = selectMeals.reduce((acc, meal) => acc + meal["Energy (kCal)"], 0)

    return(
        <>
            <div>ResultPage</div>
            <div>Hello, {name}</div>
            <div>you need, {calories}</div>

            {
                selectMeals.map((m, index) => {
                    return(
                        <div key={index}>
                            <div>{m.Company}</div>
                            <div>{m.Product}</div>
                            <div>{m["Energy (kCal)"]} kCal</div>
                        </div>
                    )
                })
            }
            <div>Total Calories: {totalCalories}</div>
        </>
    )
}