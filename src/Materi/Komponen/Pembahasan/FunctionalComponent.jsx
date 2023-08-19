const FunctionalComponent = (props) => <h1>Membuat Komponen dengan functional component by {props.nama}</h1>;

//menggunakan nilai default
FunctionalComponent.defaultProps = {
    nama: 'User'
}

export default FunctionalComponent;