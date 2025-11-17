/** 
* Convert Pixels to rem
* @param pixels - Pixels value to converted
* @returns the converted rem velue
*/

export function pxToRem(pixels: number): string {
    return `${pixels / 16}rem`
}