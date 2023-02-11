export default function CustomForm() {
    return (
        <>
        <div>
            {/* need to add action in form tag */}
            <form action="/result" method="POST">
                <input 
                    type="text" 
                    placeholder="Name"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Age"
                    required
                /> 
                <input 
                    type="text" 
                    placeholder="Weight / Kilogram"
                    required
                /> 
                <input 
                    type="text" 
                    placeholder="Height / Centimeter"
                    required
                />
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
        </>
    )
}