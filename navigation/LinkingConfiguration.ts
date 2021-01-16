import * as Linking from 'expo-linking';
import DetalleSite from '../screens/DetalleSite';
import Login from '../screens/Login';
import DetalleReservacion from '../screens/DetalleReservacion';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Inicio: {
            screens: {
              InicioScreen: 'one'              
            },
          },
          Perfil: {
            screens: {
              PerfilScreen: 'two',
            },
          },
          DetalleSite: {
            screens: {
              DetalleSite: 'Detalle',
            },
          },
          Login: {
            screens: {
              Login: 'Login',
            },
          },
          DetalleReservacion: {
            screens: {
              DetalleReservacion: 'DetalleReservacion',
            },
          },
         
        },
      },
      NotFound: '*',
    },
  },
};
