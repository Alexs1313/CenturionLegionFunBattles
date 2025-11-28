import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import CenturionLegionStack from './CenturionLegionFunBattles/CenturionLegionNavigation/CenturionLegionStack';
import CenturionLegionLoader from './CenturionLegionFunBattles/CenturionLegionComponents/CenturionLegionLoader';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <CenturionLegionStack /> : <CenturionLegionLoader />}
    </NavigationContainer>
  );
};

export default App;
