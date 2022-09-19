// ARQUIVO DE DEFINIÇÃO DO TIPO DE NAVEGAÇÃO

import { NavigationContainer } from '@react-navigation/native';  
import { AppRoutes } from './app.routes';


export function Routes(){

    return(
        <NavigationContainer>
              <AppRoutes />
              
        </NavigationContainer>
    );
}

