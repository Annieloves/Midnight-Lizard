import { Container } from "../Utils/DI";
import { CurrentExtensionModule, ExtensionModule } from "../Settings/ExtensionModule";
import { ICommandProcessor } from "./CommandProcessor";
import { IZoomService } from "./IZoomService";
import { IUninstallUrlSetter } from "./IUninstallUrlSetter";
import { IThemeProcessor } from "./IThemeProcessor";
import { IApplicationInstaller } from "./IApplicationInstaller";
import { IExternalMessageProcessor } from "./ExternalMessageProcessor";
import { ILocalMessageProcessor } from "./LocalMessageProcessor";

Container.register(Document, class { constructor() { return document } });
Container.register(CurrentExtensionModule, class
{
    constructor()
    {
        return new CurrentExtensionModule(
            ExtensionModule.BackgroundPage);
    }
});

export class BackgroundPageStarter
{
    constructor(...registerations: any[])
    {
        Container.resolve(ICommandProcessor);
        Container.resolve(IZoomService);
        Container.resolve(IUninstallUrlSetter);
        Container.resolve(IThemeProcessor);
        Container.resolve(IApplicationInstaller);
        Container.resolve(IExternalMessageProcessor);
        Container.resolve(ILocalMessageProcessor);
    }
}