import store from "../../app/store";
import Counter from "./Pembahasan/counter";
import { Provider } from "react-redux";

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />        
            </Provider>
            
        </div>
    )
}
export default Redux;