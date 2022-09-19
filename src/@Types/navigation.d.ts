export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
}


export declare global {

    // UTILIZANDO NAMESPACE DO 'ReaactNavigation' para utilizar a interface 'RootParamList'
    namespace ReactNavigation{
        interface RootParamsList{ // INTERFACE QUE SERVE PARA DEFINIR AS ROTAS DA APLICAÇÃO
            home: undefined; // PARA A ROTA 'home' NÃO PRECISA DE NENHUM PARÂMETRO DE TIPOS (OU GENERICS<>)
            game: GameParams; // PARA A ROTA 'game', A MESMA COISA. 
            // ISSO É NECESSÁRIO PARA QUE NA HORA DO USO DO MÉTODO 'navigation.navigate()' 
            // AS PROPRIEDADES DEFINIDAS AQUI SEJAM PASSADAS PARA O COMPONENTE DE TELA
        }
    }

}