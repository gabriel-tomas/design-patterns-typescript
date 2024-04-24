import { ImageEditor } from './imageEditor';
import { ImageEditorBackupManager } from './imageEditorBackupManager';

const imageEditor = new ImageEditor('documents/myPhotos/imagem.png', 'png');
const imageEditorBackupManager = new ImageEditorBackupManager(imageEditor);

imageEditorBackupManager.backup();
imageEditor.convertFomartTo('jpg');
imageEditorBackupManager.backup();
imageEditor.convertFomartTo('wav');
console.log(imageEditorBackupManager.mementos);
imageEditorBackupManager.undo();
console.log(imageEditor);
