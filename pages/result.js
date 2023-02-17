import styles from '@/styles/Result.module.css'
import { useRouter } from "next/router"
import nutrition from '@/data/fastfooddata.json'
import Image from "next/image";
import Header from '@/components/header';

export default function Result(){
    const r = useRouter();
    const { name, calories } = r.query

    //Filter meals based on calories count
    let filterMeals = nutrition.filter(n => n["Energy (kCal)"] <= calories);
    
    const selectMeals = [];
    let totalCalories = selectMeals.reduce((acc, meal) => acc + meal["Energy (kCal)"], 0)
    //At least 3 meals that add up to a total of 1000 calories
    while (selectMeals.length < 3 && filterMeals.length > 0) {
        const randomIndex = Math.floor(Math.random() * filterMeals.length)
        const meal = filterMeals[randomIndex]
        selectMeals.push(meal);
        filterMeals.splice(randomIndex, 1)
    }
    //If the totalCalories is less than 1000 or greater than calories
    if (totalCalories < 1000) {
        //If totalCalories is less than 1000, add more meals
        while (totalCalories < 1000 && filterMeals.length > 0) {
            const randomIndex = Math.floor(Math.random() * filterMeals.length)
            const meal = filterMeals[randomIndex]
            selectMeals.push(meal);
            filterMeals.splice(randomIndex, 1)
            totalCalories += meal["Energy (kCal)"]
        }
        } else if (totalCalories > calories) {
            //If totalCalories is greater than calories, remove meals
            while (totalCalories > calories && selectMeals.length > 3) {
                const meal = selectMeals.pop()
                filterMeals.push(meal)
                totalCalories -= meal["Energy (kCal)"]
            }
    }
    const handleBack = () => {
        r.back();
    }
    const handleRefresh = () => {
        location.reload();
    }

    return(
        <div className={styles.cont}>
            <div className={styles.mainCont}>
                <Header />
                <div className={styles.headingCont}>
                    <button className={styles.backBtn} onClick={handleBack}>Back</button>
                    <button className={styles.shuffleBtn} onClick={handleRefresh}>Shuffle Again</button>
                </div>
                <div className={styles.greeting}>{name}, your Daily Calories are {Math.ceil(calories)} kCal</div>
                <div className={styles.total}>Calories for Recommended Meals: {Math.ceil(totalCalories)} kCal</div>
                <div className={styles.meals}>
                    {selectMeals.map((m, index) => (
                        <div className={styles.meal} key={index}>
                            <div className={styles.company}>{m.Company}</div>
                                <div className={styles.logo}>
                                    {m.Company === "Dominos" && <Image src="/logos/dominos.png" width={100} height={100} />}
                                    {m.Company === "McDonalds" && <Image src="/logos/mcdonalds.png" width={100} height={100} />}
                                    {m.Company === "Pizza Hut" && <Image src="/logos/pizzahut.png" width={100} height={100} />}
                                    {m.Company === "Starbucks" && <Image src="/logos/starbucks.png" width={100} height={100} />}
                                    {m.Company === "KFC" && <Image src="/logos/kfc.png" width={100} height={100} />}
                                    {m.Company === "Burger King" && <Image src="/logos/burgerking.png" width={100} height={100} />}
                                </div>
                            <div className={styles.product}>{m.Product}</div>
                            <div className={styles.energy}>{m["Energy (kCal)"]} kCal</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
