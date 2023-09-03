import { useEffect, useState } from "react"

const Effect = () => {
    let [text, setText] = useState('');
    let [user, setUser] = useState ({});
    let [seconds, setSeconds] = useState (0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(res => setUser(res))
    }, [])

    useEffect(() => {
        localStorage.setItem('text', text);  
        console.log('singkronisasi')
    }, [text])

    useEffect(() => {
        let IntervalId = setInterval(() => {
            setSeconds(s => s + 1)
        }, 1000)

        return () => {
            clearInterval(IntervalId);
        }
    }, [])
    return (
        <div>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)}/>
            <p>{user.name}</p>
            <div>waktu: {Math.floor(seconds / 60)} menit {seconds % 60}</div>
        </div>
    )
}

export default Effect;