// import Counter from "./Pembahasan/Counter";
// import Effect from "./Pembahasan/Effect";
import { useState } from "react";
// import Identity from "./Pembahasan/Identity";
import { useToogle } from "./Pembahasan/hook/useToogle";

const Hooks = () => {
    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = useToogle();

    const style = {
        background: lampu? 'yellow' : 'black',
        textAlign: 'center',
        height: '400px'
    }

    const handleSaklar = () => {
        setLampu(!lampu);

        setLabel(e => {
            if (e === 'ON'){
                return 'OFF'
            }
            return 'ON'
        })
    }
    return (
        <div style={style}>
            {/* <Counter /> */}
            {/* <Effect /> */}
            {/* <Identity /> */}
            <button onClick={handleSaklar}>{label}</button>
        </div>
    )
}

export default Hooks;