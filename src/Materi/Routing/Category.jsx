import { useParams } from "react-router";

const Category = () => {
    const params = useParams();
    return (
        <h3>Ini halaman kategori {params.name}</h3>
    )
}
export default Category;