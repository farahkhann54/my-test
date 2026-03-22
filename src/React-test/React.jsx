//1: virtual dom
// virtual dom is a copy of real dom .updates only change part instaed of complete UI.

import { useEffect } from "react";

const [count , setCount] = useState(0);

return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>click</button>
    </div>
)

//2: state vs props

// state contains current and updated values.
const [count , setCount] = useState(0);

// props are used to pass data from parent to child component.

function ParentComponent() {
    const [count , setCount] = useState(0);
    return (
<Component setCount={setCount} count={count} />
    )
}

function Component({setCount, count}) {
    return <button onClick={()=> setCount(count + 1)}>click</button>
}

//3: useEffect
//useEffect is a side effect in which data shows immediately before the page reload . 

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

//4:controlled components 
// controlled components are those in which form data is handled .

function ControlledComponent() {
    const [name, setName] = useState(""); 

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>{name}</div>
            </div>
    )}

//5:redux vs context 
//context is used to send data from parent to child components without passing the props.
const UserContext = createContext();

function Parent() {
  const [user, setUser] = useState("Farah");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hello {user}</h1>
      <button onClick={() => setUser("Ali")}>Change Name</button>
    </div>
  );
}

//Redux is a state manangement library where we can store entire app data into single store.

const userSlice = createSlice({
  name: "user",
  initialState: { name: "Farah" },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    }
  }
});

// Create Store
const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

function App() {
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}

function Child() {
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user}</h1>
      <button onClick={() => dispatch(userSlice.actions.setUser("Ali"))}>
        Change Name
      </button>
    </div>
  );
}

//1:Counter with Hooks 

const [count , setCount] = useState(0);

return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>click</button>
    </div>
)

//Resuable componenets 
// reusable component is a component you write once and use multiple times with different data .


function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color, margin: "5px" }}>
      {text}
    </button>
  );
}

// Main Component
function component() {
  return (
    <div>
      <Button text="Login" color="blue" />
      <Button text="Signup" color="green" />
      <Button text="Delete" color="red" />
    </div>
  );
}

//api fetch with loading 

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


//Routing setup 
function child () {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </div>
  )
}

function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )}

  //form handling 
 
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
