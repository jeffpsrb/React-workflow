import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div>
            <h3>Ini Halaman About</h3>

            <button onClick={handleClick}>Klik menuju Home</button>
        </div>
    )
}
export default About;