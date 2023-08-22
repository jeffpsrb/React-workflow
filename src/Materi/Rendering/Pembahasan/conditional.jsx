import React from "react";

export default class Conditional extends React.Component {
    state = {
        isLoading: true
    }
    render() {

        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
        // const isLogin = true;
        // let message = ' ';
        // cara pertama
        // if(isLogin){
        //     return (
        //     <div>
        //         <h1>anda seudah login</h1>
        //     </div>
        //     )
        // }else {
        //     return(
        //        <div>
        //             <h1>silahkan login terlebih dahulu</h1>
        //         </div> 
        //     )
            
        // }

        //cara kedua
        // if (isLogin) {
        //     message = 'Anda sudah login'
        // } else {
        //     message = 'Silahkan login terlebih dahulu'
        // }

        // return (
        //     <div>
        //         <h1>{message}</h1>
        //     </div>
        // )

        //menggunakan ternary operator

        // return(
        //     <div>
        //         {isLogin ? <h1>Anda sudah login</h1> : <h1>Silahkan login terlebih dahulu</h1>}
        //     </div>
        // )

        return(
            <div>
                {this.state.isLoading
                    ? <h1>Loading</h1>
                    : <h1>Berhasil masuk</h1>
                }
            </div>
        )
        
    }
}