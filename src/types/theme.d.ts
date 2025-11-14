import 'styled-components'
import type { Theme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    appBackground: string
    appColor: string
    appDefaltStroke: string
    appLogo: string
    appSkeletonFrom: string
    appSkeletonTo: string
    buttons: {
        alert: string
        alertColor: string
        alertHover: string
        desabled:string
        disabledColor: string
        primary:string
        primaryColor:string
        primaryHover: string
    }
    card: {
        alert: string
        background: string
        border: string
        success: string
        warning: string
    }
    textInput: {
        active: string
        activeColor: string
        borerColor: string
        disabled: string
        disabledBorderColor: string
        disabledColor: string
        placeholderColor: string
    }
    typographies: {
        error: string
        subtitle: string
        success:string
    }
  }
}