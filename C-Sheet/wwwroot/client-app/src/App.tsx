interface Item {
    id: string,
    name: string,
    quantity: number,
}

interface AppProps { 
    initialItems: Item[];
}

const App = ({ initialItems }: AppProps) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Items List</h1>
            <ul>
                {initialItems.map(({ id, name, quantity }) => (
                    <li key={id} className="mb-2">
                        <span>{name} --- {quantity}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
