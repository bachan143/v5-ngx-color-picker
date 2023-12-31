import { Rgba, Hsla, Hsva } from './formats';
import * as i0 from "@angular/core";
export declare class ColorPickerService {
    private active;
    constructor();
    setActive(active: any): void;
    hsla2hsva(hsla: Hsla): Hsva;
    hsva2hsla(hsva: Hsva): Hsla;
    rgbaToHsva(rgba: Rgba): Hsva;
    hsvaToRgba(hsva: Hsva): Rgba;
    stringToHsva(colorString?: string, allowHex8?: boolean): Hsva;
    outputFormat(hsva: Hsva, outputFormat: string, alphaChannel: string): string;
    hexText(rgba: Rgba, allowHex8: boolean): string;
    denormalizeRGBA(rgba: Rgba): Rgba;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ColorPickerService>;
}
