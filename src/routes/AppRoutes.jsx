import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"
import ListarCategoria from "../pages/ListarCategoria/ListarCategoria"

// BrowserRouter : Navegação entre página utilizando a tag html <a> </a>, sempre recarrega toda a página
// HashRouter: Navegação entre páginas utilizando a tag <Link> <Link/> do react-router-dom, carrega apenas o que é necessário


const AppRoutes = () =>{

    return (
         <HashRouter>
               <Routes>
                    
                    <Route 
                      path="/"
                      element={<HomeFuncionario/>}
                    />

                    <Route 
                      path="/pizzaria/funcionario/home"
                      element={<HomeFuncionario/>}
                    />

                    <Route 
                      element={<ListarProduto/>}
                      path="/pizzaria/funcionario/produtos"
                    />

                    <Route 
                      element={<ListarCategoria/>}
                      path="/pizzaria/funcionario/categorias"
                    />

               </Routes>
         
         </HashRouter>

    )
}

export default AppRoutes