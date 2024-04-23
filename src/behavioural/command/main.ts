import { LightIntensityCommand } from './lightIntensityCommand';
import { LightPowerCommand } from './lightPowerCommand';
import { SmartHouseApp } from './smartHouseApp';
import { SmartHouseLight } from './smartHouseLight';

const bedroomSmartLight = new SmartHouseLight('bedroom light');
const lightPowerCommand = new LightPowerCommand(bedroomSmartLight);
const lightIntensityCommand = new LightIntensityCommand(bedroomSmartLight);
const smartLightController = new SmartHouseApp();
smartLightController.addCommand('btn-liga-desliga', lightPowerCommand);
smartLightController.addCommand('btn-mudar-intensidade', lightIntensityCommand);

smartLightController.executeCommand('btn-liga-desliga');
smartLightController.undoCommand('btn-liga-desliga');
smartLightController.executeCommand('btn-mudar-intensidade');
smartLightController.undoCommand('btn-mudar-intensidade');
