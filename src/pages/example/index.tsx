import Layout from "@/components/layout";

export default function ExamplePage() {

    return (
        <Layout home>
            <div className={'text-center'}>
                ЗДЕСЬ ХРАНЯТСЯ ПРИМЕРЫ, ДЛЯ ИСПОЛЬЗОВАНИЯ - РАСКОММЕНТИРУЙ!
            </div>
        </Layout>
    );

    {/*
    // Set the value received from the local storage to a local state
    const [favoriteNumber, setFavoriteNumber] = useState("")

    useEffect(() => {
        let value
        // Get the value from local storage if it exists
        value = localStorage.getItem("favoriteNumber") || ""
        setFavoriteNumber(value)
    }, [])

    // When user submits the form, save the favorite number to the local storage
    const saveToLocalStorage = e => {
        e.preventDefault()
        localStorage.setItem("favoriteNumber", favoriteNumber)
    }

    return (
        <div>
            <label htmlFor="number">Your favorite number</label>
            <form onSubmit={saveToLocalStorage}>
                <input
                    id="number"
                    value={favoriteNumber}
                    onChange={e => setFavoriteNumber(e.target.value)}
                />
                <input type="submit" value="Save"/>
            </form>
        </div>
    )*/
    }

    /*const [selectedFruit, setSelectedFruit] = useState('orange'); // Declare a state variable...
    // ...
    return (
        <Select
            value={selectedFruit} // ...force the select's value to match the state variable...
            onChange={e => {
                console.log(e)
                // @ts-ignore
                setSelectedFruit(e)
                //setSelectedFruit(e.target.value)
            }} // ... and update the state variable on any change!
        >
            <Option value='apple'>Apple</Option>
            <Option value='banana'>Banana</Option>
            <Option value='orange'>Orange</Option>
        </Select>
    );*/
}