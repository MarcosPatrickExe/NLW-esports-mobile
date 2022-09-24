// rotas admin, autenticação, etc
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// TELAS:
import { Home } from '../screens/Home';
import { Game} from '../screens/Game';


export function AppRoutes(){

    const { Navigator, Screen } = createNativeStackNavigator();

    return(
        <Navigator screenOptions={ { headerShown: false} }>
        {/* Navigator é o contexto geral de navegação. A propriedade 'screenOptions' tbm pode ser passada para as screens. Ela define se o header deve aparecer nas rotas ou não */}
            

                {/* Definindo nome da tela */}
                <Screen 
                    name="home" 
                    component={ Home}
                   
                />{/* Componente que será chamado quando 'Home' for chamado */}

                <Screen 
                    name="game" 
                    component={ Game }
                />

        </Navigator>
    );
}



